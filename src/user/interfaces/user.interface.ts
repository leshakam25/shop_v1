export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: IRole;
}

export interface IRole {
    role: 'ADMIN' | 'USER' | 'MANAGER';
}
