enum UserRole {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}

function roleMessage(role: UserRole): string {
    if (role === UserRole.Admin) {
        return "Welcome, Admin!";
    } else if (role === UserRole.User) {
        return "Hello, User!";
    } else {
        return "Greetings, Guest!";
    }
}

console.log(roleMessage(UserRole.User));

let unknownRole: any = "Admin";
let assertedRole = unknownRole as UserRole;

console.log(roleMessage(assertedRole));
