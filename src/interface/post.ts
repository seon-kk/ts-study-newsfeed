
export interface IPost {
    idx?: number;
    subject: string;
    content: string;
    adminIdx: number;
    schoolIdx?: number;
    createdAt?: string;
    updatedAt?: string;
}