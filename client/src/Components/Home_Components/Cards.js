import React from 'react'
import { CardDeck, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import cardImage from '../../Assets/roundedimg01.svg'
import cardImage2 from '../../Assets/roundedimg02.svg'
import cardImage3 from '../../Assets/roundedimg03.svg'
import "./Cards.css"


export const Cards = () => (
    <>
        <CardDeck id="features" className="text-center alignCard">
            <Card className="border-0 align-items-center">
                <Card.Img className="" id="sizeCardImg" variant="top" src={cardImage} />
                <Card.Body>
                    <Card.Title><h5>DIFFERENT LEVELS</h5></Card.Title>
                    <Card.Text className="text">
                        Fit-Connect welcomes all fitness levels from beginner to advanced.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="border-0 align-items-center">
                <Card.Img id="sizeCardImg" variant="top" src={cardImage2} />
                <Card.Body>
                    <Card.Title><h5>FIND YOUR GROUP</h5></Card.Title>
                    <Card.Text className="text">
                        Look for groups based on the things that you enjoy doing or try something new!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="border-0 align-items-center">
                <Card.Img id="sizeCardImg" variant="top" src={cardImage3} />
                <Card.Body>
                    <Card.Title><h5>HOW WE WORK</h5></Card.Title>
                    <Card.Text className="text">
                    Fit-Connect provides opportunities for people to connect with others to produce results!
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    </>
);

