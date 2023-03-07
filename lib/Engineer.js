// Code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor (name,email,id,github,role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
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
getGithub() {
    return this.github;
}
getRole() {
    return 'Engineer';

}}


module.exports = Engineer