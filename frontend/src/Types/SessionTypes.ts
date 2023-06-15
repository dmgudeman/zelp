export interface SessionState {
    user: User | null;
}

export interface User {
    id: number;
    username: string;
    email: string;
    createdAt: string | null;
    updatedAt: string | null;
}

export interface SignupUserData {
    username: string;
    email: string;
    password: string;
    fullName: string | null;

}
