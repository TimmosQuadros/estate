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
    const [time, setTime] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ estateId, name, email, date: `${date}T${time}` });
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h3>Book a Presentation</h3>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="form-input"
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="form-input"
            />
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default BookingForm;
