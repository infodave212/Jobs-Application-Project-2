const User = require('./User');
const Project = require('./Project');
const JobsApplication=require('./JobsApplication');
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});
User.hasMany(JobsApplication,{
  foreignKey: 'user_id',
  onDelete:'CASCADE'
})
JobsApplication.belongsTo(User,{
  foreignKey: 'user_id'
})
module.exports = { User, Project };
