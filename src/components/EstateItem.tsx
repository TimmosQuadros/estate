import React from 'react';
import { Estate } from '../types/types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface EstateItemProps {
    estate: Estate;
    onSelect: (id: number) => void;
}

const EstateItem: React.FC<EstateItemProps> = ({ estate, onSelect }) => {
    return (
        <Card onClick={() => onSelect(estate.id)} className="estate-card">
            <Card.Body>
                <Card.Title>{estate.title}</Card.Title>
                <Card.Text>{estate.description}</Card.Text>
                <Card.Text>{estate.address}</Card.Text>
                <Card.Text>Price: DKK{estate.price}</Card.Text>
                <Button variant="primary" onClick={() => onSelect(estate.id)}>View Details</Button>
            </Card.Body>
        </Card>
    );
};

export default EstateItem;