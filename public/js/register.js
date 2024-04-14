async function newForm(){
    const applicant = document.getElementById("applicant").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const address = document.getElementById("address").value
    const City = document.getElementById("City").value
    const State = document.getElementById("State").value
    const resume = document.getElementById("resume").value
    const email = document.getElementById("email").value
    const description = document.getElementById("description").value
    const  JobTitle = document.getElementById("JobTitle").value
    alert(applicant + phoneNumber + JobTitle + address + City + State + email + description + resume )
    if (applicant && phoneNumber && address && City && State && resume && email && JobTitle && description) {
        const response = await fetch(`/api/applications`, {
          method: 'POST',
          body: JSON.stringify({ applicant, phoneNumber, address, City, State, description, resume , JobTitle}),
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
document.querySelector(".btnRegister").addEventListener("click",newForm)