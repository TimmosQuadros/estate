import React, { useState } from 'react';
import { Booking } from '../types/types.ts';

interface BookingFormProps {
    estateId: number;
    onSubmit: (booking: Booking) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ estateId, onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ estateId, name, email, date });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Book a Presentation</h3>
    <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    />
    <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    />
    <button type="submit">Submit</button>
        </form>
);
};

export default BookingForm;
