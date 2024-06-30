import { useState } from 'react';
import './App.css';
import { Booking, Estate } from "./types/types.ts";
import BookingForm from "./components/BookingForm.tsx";
import EstateList from "./components/EstateList.tsx";

function App() {
    const [estates] = useState<Estate[]>([
        { id: 1, title: 'Estate 1', description: 'Description 1', address: 'Address 1', price: 100000, imageUrl: 'src/assets/Møllevænget.jpg' },
        { id: 2, title: 'Estate 2', description: 'Description 2', address: 'Address 2', price: 200000, imageUrl: 'src/assets/Møllevænget.jpg' },
    ]);
    const [selectedEstateId, setSelectedEstateId] = useState<number | null>(null);
    const handleSelectEstate = (id: number) => {
        setSelectedEstateId(id);
    };

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
        <div className="app-container">
            <EstateList estates={estates} onSelectEstate={handleSelectEstate} />
            {selectedEstateId !== null && (
                <BookingForm estateId={selectedEstateId} onSubmit={handleBookingSubmit} />
            )}
        </div>
    );
}

export default App;
