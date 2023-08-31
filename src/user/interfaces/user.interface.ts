export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface IRole {
    role: 'ADMIN' | 'USER' | 'MANAGER';
}
