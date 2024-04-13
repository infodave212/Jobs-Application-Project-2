async function newForm(){
    const applicant = document.getElementById("applicant")
    const phoneNumber = document.getElementById("phoneNumber")
    const address = document.getElementById("address")
    const city = document.getElementById("city")
    const state = document.getElementById("state")
    const resume = document.getElementById("resume")
    const email = document.getElementById("email")
    const  JobTitle = document.getElementById("JobTitle")
    if (applicant && phoneNumber && address && city && state && resume && email && email && JobTitle) {
        const response = await fetch(`/api/application`, {
          method: 'POST',
          body: JSON.stringify({ applicant, phoneNumber, address, city, state, resume , JobTitle}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create project');
        }
      }
}