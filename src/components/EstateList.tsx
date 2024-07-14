import React from 'react';
import { Link } from 'react-router-dom';
import { Estate } from '../types/types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import isSafari from "../utils/utils";
import Button from 'react-bootstrap/Button';

interface EstateListProps {
    estates: Estate[];
}

const EstateList: React.FC<EstateListProps> = ({ estates }) => {
    const imageClass = isSafari() ? "estate-image-safari" : "estate-image";
    return (
        <Row>
            {estates.map((estate) => (
                <Col key={estate.id} xs={12} sm={6} md={4} className="mb-3">
                    <Link to={`/booking/${estate.id}`} className="estate-link">
                        <Card className="estate-card">
                            <Card.Img variant="top" src={estate.imageUrl} className={imageClass} />
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
                                <div className="d-flex justify-content-center align-items-center">
                                    <Button variant="primary">Book a Presentation</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
};

export default EstateList;
