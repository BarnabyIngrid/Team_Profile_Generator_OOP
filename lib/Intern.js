// Code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor (name,email,id,school,role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = role;
}

getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getSchool() {
    return this.school;
}
getRole() {
    return 'Intern';

}}


module.exports = Intern