'use client'

import React from 'react';
import {Card} from "react-bootstrap";
import car1 from '../../assets/images/featuredCars/car1.png'
import chauffeured from '../../assets/images/featuredCars/chauffeured.png'
import selfDrive from '../../assets/images/featuredCars/self-drive.png'
import star from '../../assets/images/featuredCars/star.png'
import wifi from '../../assets/images/featuredCars/wifi.png'
import ac from '../../assets/images/featuredCars/air-conditioner.png'
import disabledSeat from '../../assets/images/featuredCars/disabledSeat.png'
import Image from "next/image";

const CarItem = ({carImage, carName, guests,}) => {

    return (
        <div>
            <Card style={{ maxWidth: 282, borderRadius: 12, }}>
                <Image src={carImage} alt="car" height={200} width={'100%'} />
                <Card.Body>
                    <Card.Title style={{fontSize: 16, fontWeight: '500', marginBottom: 15}}>
                        {carName}
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">

                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CarItem;