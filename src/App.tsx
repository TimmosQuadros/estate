import { useState } from 'react'
import './App.css'
import {Booking, Estate} from "./types";
import BookingForm from "./components/BookingForm.tsx";
import EstateList from "./components/EstateList.tsx";

function App() {

    const [estates] = useState<Estate[]>([
        { id: 1, title: 'Estate 1', description: 'Description 1', address: 'Address 1', price: 100000 },
        { id: 2, title: 'Estate 2', description: 'Description 2', address: 'Address 2', price: 200000 },
    ]);
    const [selectedEstateId, setSelectedEstateId] = useState<number | null>(null);
    const handleSelectEstate = (id: number) => {
        setSelectedEstateId(id);
    };
    const handleBookingSubmit = (booking: Booking) => {
        console.log('Booking submitted:', booking);
        // Handle booking submission logic here (e.g., send to server)
    };

  return (
      <>
          <div>
              <EstateList estates={estates} onSelectEstate={handleSelectEstate}/>
              {selectedEstateId !== null && (
                  <BookingForm estateId={selectedEstateId} onSubmit={handleBookingSubmit}/>
              )}
          </div>
      </>
  )
}

export default App
