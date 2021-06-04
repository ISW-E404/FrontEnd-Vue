export default class User {
    constructor(email,firstName, lastName, password,identification,callNumber) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.identification = identification;
        this.callNumber = callNumber;
    }
}
