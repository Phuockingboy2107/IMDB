export const RoleNumber = (num) => {
    switch (num){
        case 1:
            return "User";
        case 2:
            return "Admin";
        default:
            return "Unknown"
    }
}