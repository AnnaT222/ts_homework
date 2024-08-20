declare enum UserRole {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}
declare function roleMessage(role: UserRole): string;
declare let unknownRole: any;
declare let assertedRole: UserRole;
