export interface User {
    id: string;
    username: string;
    role: Role;
    createdAt: string;
    createdBy: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
}

export enum Role {
    Root = "root",
    Admin = "admin",
    User = "user",
}
