import React from 'react';
import { Estate } from '../types';

interface EstateItemProps {
    estate: Estate;
    onSelect: (id: number) => void;
}

const EstateItem: React.FC<EstateItemProps> = ({ estate, onSelect }) => {
    return (
        <div onClick={() => onSelect(estate.id)}>
            <h3>{estate.title}</h3>
            <p>{estate.description}</p>
            <p>{estate.address}</p>
            <p>{estate.price}</p>
        </div>
    );
};

export default EstateItem;
