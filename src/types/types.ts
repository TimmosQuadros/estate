import { DocumentData } from 'firebase-admin/firestore';

export interface Estate {
    id: number;
    title: string;
    description: string;
    address: string;
    price: number;
}

export interface Booking extends DocumentData {
    estateId: number;
    name: string;
    email: string;
    date: string;
}
