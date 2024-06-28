export interface Estate {
    id: number;
    title: string;
    description: string;
    address: string;
    price: number;
}

export interface Booking {
    estateId: number;
    name: string;
    email: string;
    date: string;
}
