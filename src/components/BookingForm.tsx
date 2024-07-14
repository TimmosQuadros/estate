import React, { useState } from 'react';
import { Booking } from '../types/types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
        <Form onSubmit={handleSubmit} className="booking-form">
            <h3>Book a Presentation</h3>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-input"
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-input"
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="form-input"
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
                Book
            </Button>
        </Form>
    );
};

export default BookingForm;
