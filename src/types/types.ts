import { DocumentData } from 'firebase-admin/firestore';

export interface Estate {
    id: number;
    title: string;
    description: string;
    address: string;
    price: number;
    imageUrl: string;
}

export interface Booking extends DocumentData {
    estateId: number;
    name: string;
    email: string;
    date: string;
}
