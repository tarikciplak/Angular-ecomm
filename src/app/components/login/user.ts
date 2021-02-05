export class User{
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    role: number;
    id: number;   
}

export interface UserResponse{

    users: User[];
   
}