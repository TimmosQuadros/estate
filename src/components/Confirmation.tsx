import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Confirmation: React.FC = () => {
    const location = useLocation();
    const { state } = location as any;
    const { success, booking } = state || {};
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <Container className="confirmation-page mt-5">
            <Card>
                <Card.Body className="text-center">
                    {success ? (
                        <div>
                            <Card.Title>Booking Confirmed!</Card.Title>
                            <Card.Text>
                                Your booking has been confirmed. A confirmation email has been sent with the details of your booking.
                            </Card.Text>
                            <Card className="mt-4">
                                <Card.Body>
                                    <Card.Title>Booking Details</Card.Title>
                                    <Card.Text>
                                        <strong>Estate ID:</strong> {booking.estateId}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Date:</strong> {booking.date}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Name:</strong> {booking.name}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Email:</strong> {booking.email}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ) : (
                        <div>
                            <Card.Title>Booking Failed</Card.Title>
                            <Card.Text>There was an error processing your booking. Please try again.</Card.Text>
                        </div>
                    )}
                    <Button variant="primary" className="mt-4 back-home-button" onClick={handleGoBack}>
                        Go Back to Home
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Confirmation;
