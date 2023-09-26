'use client'

import React from 'react';
import {Card} from "react-bootstrap";
import car1 from '../../assets/images/featuredCars/car1.png'
import chauffeured from '../../assets/images/featuredCars/chauffeured.png'
import star from '../../assets/images/featuredCars/star.png'
import wifi from '../../assets/images/featuredCars/wifi.png'
import ac from '../../assets/images/featuredCars/air-conditioner.png'
import disabledSeat from '../../assets/images/featuredCars/disabledSeat.png'
import Image from "next/image";

const FeaturedCarItem = () => {
    return (
        <div>
            <Card style={{ maxWidth: 282, borderRadius: 12, }}>
                <Image src={car1} alt="car" height={200} width={'100%'} />
                <Card.Body>
                    <div className="d-flex w-100 justify-content-between" style={{marginBottom: 12}}>
                        <Image src={chauffeured} alt='chauffered' height={20} quality={100} />
                        <div className="d-flex align-items-center">
                            <Image src={star} alt="star" width={13} height={13} />
                            <span style={{fontSize: 12, fontWeight: '500'}}>
                                4.9 (30 trips)
                            </span>
                        </div>
                    </div>
                    <Card.Title style={{fontSize: 16, fontWeight: '500', marginBottom: 15}}>Mercedes Maybach</Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between">
                            <div className='d-flex align-items-center'>
                                <Image style={{marginRight: 8}} src={disabledSeat} alt='disabled seat' height={16} width={16} />
                                <span style={{height:16, fontSize: 12, fontWeight: '600', color: '#7D7D81', marginRight:8,}}>4</span>
                                <Image style={{marginRight: 8}} src={ac} alt='air conditioner' height={16} width={16} />
                                <Image src={wifi} alt='wifi' height={16} width={16} />
                            </div>
                            <div>
                                <span style={{color: '#5C5C61', fontSize: 13}}>
                                    from <span style={{fontSize: 16, fontWeight: '700', color: '#101010'}}>
                                    &#8358; {'2000'}
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