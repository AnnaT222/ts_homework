"use strict";
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["User"] = "User";
    UserRole["Guest"] = "Guest";
})(UserRole || (UserRole = {}));
function roleMessage(role) {
    if (role === UserRole.Admin) {
        return "Welcome, Admin!";
    }
    else if (role === UserRole.User) {
        return "Hello, User!";
    }
    else {
        return "Greetings, Guest!";
    }
}
console.log(roleMessage(UserRole.User));
let unknownRole = "Admin";
let assertedRole = unknownRole;
console.log(roleMessage(assertedRole));
