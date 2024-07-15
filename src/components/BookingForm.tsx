import React, { useState, useEffect } from 'react';
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
    const [bookedTimes, setBookedTimes] = useState<string[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('https://europe-west3-realestatebooking.cloudfunctions.net/app/bookings');
                const bookings: Booking[] = await response.json();
                const futureBookings = bookings.filter(b => new Date(b.date) > new Date());
                setBookedTimes(futureBookings.map(b => b.date));
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ estateId, name, email, date: `${date}T${time}` });
    };

    const isTimeBooked = (selectedDate: string, selectedTime: string) => {
        return bookedTimes.includes(`${selectedDate}T${selectedTime}`);
    };

    const today = new Date().toISOString().split('T')[0];

    const generateTimeSlots = () => {
        const slots = [];
        const startHour = 10;
        const endHour = 19;
        for (let hour = startHour; hour < endHour; hour++) {
            slots.push(`${hour.toString().padStart(2, '0')}:00`);
            slots.push(`${hour.toString().padStart(2, '0')}:30`);
        }
        return slots;
    };

    const validTimeSlots = generateTimeSlots().filter(timeSlot => !isTimeBooked(date, timeSlot));

    const isWeekday = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDay();
        return day >= 1 && day <= 5; // Monday to Friday
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
                    min={today}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="select"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="form-input select-time"
                    disabled={!date || !isWeekday(date)}
                >
                    <option value="">Select Time</option>
                    {validTimeSlots.map((timeSlot) => (
                        <option key={timeSlot} value={timeSlot}>
                            {timeSlot}
                        </option>
                    ))}
                </Form.Control>
                {date && !isWeekday(date) && (
                    <Form.Text className="text-danger">Bookings are only available from Monday to Friday.</Form.Text>
                )}
                {date && time && isTimeBooked(date, time) && (
                    <Form.Text className="text-danger">This time is already booked. Please choose another time.</Form.Text>
                )}
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-button">
                Book
            </Button>
        </Form>
    );
};

export default BookingForm;
