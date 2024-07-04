import React from 'react';
import { useParams } from 'react-router-dom';
import { Estate, Booking } from '../types/types';
import BookingForm from './BookingForm';
import isSafari from "../utils/utils";

interface EstateDetailProps {
    estates: Estate[];
}

const EstateDetail: React.FC<EstateDetailProps> = ({ estates }) => {
    const { id } = useParams<{ id: string }>();

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
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };

    return (
        <div className="estate-detail">
            <div className="estate-info">
                <img src={'/'+estate.imageUrl} alt={estate.title} className={imageClass}/>
                <h2>{estate.title}</h2>
                <p>{estate.description}</p>
                <p>{estate.address}</p>
                <p>Price: ${estate.price}</p>
            </div>
            <BookingForm estateId={estate.id} onSubmit={handleBookingSubmit}/>
        </div>
    );
};

export default EstateDetail;
