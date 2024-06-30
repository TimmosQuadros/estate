import React from 'react';
import { Estate } from '../types/types.ts';

interface EstateListProps {
    estates: Estate[];
    onSelectEstate: (id: number) => void;
}

const EstateList: React.FC<EstateListProps> = ({ estates, onSelectEstate }) => {
    return (
        <div className="estate-grid">
            {estates.map((estate) => (
                <div key={estate.id} className="estate-card" onClick={() => onSelectEstate(estate.id)}>
                    <img src={estate.imageUrl} alt={estate.title} className="estate-image" />
                    <h3>{estate.title}</h3>
                    <p>{estate.description}</p>
                    <p>{estate.address}</p>
                    <p>Price: ${estate.price}</p>
                </div>
            ))}
        </div>
    );
};

export default EstateList;
