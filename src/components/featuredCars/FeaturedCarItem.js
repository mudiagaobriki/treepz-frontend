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

const FeaturedCarItem = ({carImage, carName, price, hasDisabledSeat=true, numSeats=4, hasAC=true, hasWifi=true,
                             isChauffeured=true, rating=4.9, tripsCount=30}) => {
    const attendedImg = () => isChauffeured? chauffeured: selfDrive

    return (
        <div>
            <Card style={{ maxWidth: 282, borderRadius: 12, }}>
                <Image src={carImage} alt="car" height={200} width={'100%'} />
                <Card.Body>
                    <div className="d-flex w-100 justify-content-between" style={{marginBottom: 12}}>
                        <Image src={attendedImg()} alt='chauffered or selfdriven' height={20} quality={100} />
                        <div className="d-flex align-items-center">
                            <Image src={star} alt="star" width={13} height={13} />
                            <span style={{fontSize: 12, fontWeight: '500'}}>
                                {rating} ({tripsCount} trips)
                            </span>
                        </div>
                    </div>
                    <Card.Title style={{fontSize: 16, fontWeight: '500', marginBottom: 15}}>{carName}</Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className='d-flex align-items-center'>
                                {hasDisabledSeat && <Image style={{marginRight: 8}} src={disabledSeat} alt='disabled seat' height={16} width={16} />}
                                <span style={{height:16, fontSize: 12, fontWeight: '600', color: '#7D7D81', marginRight:8,}}>{numSeats}</span>
                                {hasAC && <Image style={{marginRight: 8}} src={ac} alt='air conditioner' height={16} width={16} />}
                                {hasWifi && <Image src={wifi} alt='wifi' height={16} width={16} />}
                            </div>
                            <div>
                                <span style={{color: '#5C5C61', fontSize: 13}}>
                                    from <span style={{fontSize: 16, fontWeight: '700', color: '#101010'}}>
                                    &#8358; {price}
                                </span>/day
                                </span>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FeaturedCarItem;