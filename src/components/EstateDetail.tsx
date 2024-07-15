import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Estate, Booking } from '../types/types';
import BookingForm from './BookingForm';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import isSafari from "../utils/utils";

interface EstateDetailProps {
    estates: Estate[];
}

const EstateDetail: React.FC<EstateDetailProps> = ({ estates }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    // Type guard to ensure `id` is defined
    if (!id) {
        return <div>Estate not found</div>;
    }

    const estate = estates.find(e => e.id === parseInt(id));

    if (!estate) {
        return <div>Estate not found</div>;
    }

    const imageClass = isSafari() ? "estate-image-safari" : "estate-image";

    const handleBookingSubmit = async (booking: Booking) => {
        console.log('Booking submitted:', booking);
        try {
            const response = await fetch('https://europe-west3-realestatebooking.cloudfunctions.net/app/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(booking),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Booking submitted:', data);
            navigate('/confirmation', { state: { success: true, booking: { ...booking, id: data.id } } });
        } catch (error) {
            console.error('Error submitting booking:', error);
            navigate('/confirmation', { state: { success: false } });
        }
    };

    return (
        <Container className="estate-detail">
            <Card>
                <Image src={'/' + estate.imageUrl} alt={estate.title} className={imageClass} fluid />
                <Card.Body>
                    <Card.Header as="h2">{estate.title}</Card.Header>
                    <Card.Text>
                        <strong>Beskrivelse:</strong> {estate.description}
                    </Card.Text>
                    <Card.Text>
                        <strong>Adresse:</strong> {estate.address}
                    </Card.Text>
                    <Card.Text>
                        <strong>Pris:</strong> DKK {estate.price}
                    </Card.Text>
                </Card.Body>
            </Card>
            <BookingForm estateId={estate.id} onSubmit={handleBookingSubmit} />
        </Container>
    );
};

export default EstateDetail;
