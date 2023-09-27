'use client'

import React from 'react';
import {Row, Col, Card} from "react-bootstrap";
import Image from "next/image";

// import our custom components
import TitleText from "@/components/miscellaneous/TitleText";
import IconListItem from "@/components/miscellaneous/IconListItem";
import SearchBar from "@/components/searchbar/SearchBar";
import Header1 from "@/components/headers/Header1";
import FeaturedCarItem from "@/components/featuredCars/FeaturedCarItem";

// import images
import verified from "../../assets/images/verified.png"
import secured from "../../assets/images/secured.png"
import flexible from "../../assets/images/flexible.png"
import explore from '../../assets/images/explore-without-limit.png'

// import dummy data
import {FEATURED_CARS} from "@/assets/dummyData/FEATURED_CARS";
import star from "@/assets/images/featuredCars/star.png";
import disabledSeat from "@/assets/images/featuredCars/disabledSeat.png";
import ac from "@/assets/images/featuredCars/air-conditioner.png";
import wifi from "@/assets/images/featuredCars/wifi.png";
import Button from "react-bootstrap/Button";
import SubtitleText from "@/components/miscellaneous/SubtitleText";

const fetchData = async () => {
//     const response = await fetch('',
//         {next: {revalidate: 30}
//         })
//
//     const data = await response.json();
//     console.log('Data: ', data?.data?.docs)
//     return data?.data?.docs;
}

const Page = async () => {
    const data = await fetchData()

    return (
        <div style={{paddingTop: 24}}>
            <div className='w-100 d-flex justify-content-center'>
                <SearchBar />
            </div>
            <Header1 />
            <div style={{marginTop: 197, }}>
                <div className='text-center justify-content-center'>
                    <TitleText text="Featured Cars" mb={16} />
                    <div className="d-flex justify-content-between mx-auto" style={{maxWidth: 400, marginBottom: 64}}>
                        <IconListItem text='Verified hosts' imageURL={verified} />
                        <IconListItem text='Secured payment' imageURL={secured} />
                        <IconListItem text='Flexible rate' imageURL={flexible} />
                    </div>
                </div>

                <Row>
                    {
                        FEATURED_CARS.map((item, index) => {
                            return <Col key={index}>
                                <FeaturedCarItem
                                    carName={item.carName}
                                    carImage={item.image}
                                    hasAC={item.hasAC}
                                    hasWifi={item.hasWifi}
                                    hasDisabledSeat={item.hasDisabledSeat}
                                    isChauffeured={item.isChauffeured}
                                    rating={item.rating}
                                    numSeats={item.seats}
                                    price={item.price}
                                    tripsCount={item.trips}
                                />
                            </Col>
                        })
                    }
                    <Col>
                        <Card style={{ maxWidth: 282, height: 307, borderRadius: 12, }}>
                            <Image src={explore} alt="car" height={200}
                                   style={{borderTopLeftRadius: 12, borderTopRightRadius: 12,}}
                                    objectFit='cover'/>
                            <Card.Body style={{backgroundColor: '#101010'}}>
                                <Card.Title
                                    style={{fontSize: 18, fontWeight: '500', marginBottom: 24, lineHeight: 1.5, color: '#ffffff'}}>
                                    Explore without limits.{'\n'}
                                    Find your next ride.
                                </Card.Title>
                                <Card.Text>
                                    <Button className='btn w-100'
                                            style={{backgroundColor: '#F8B02B', borderColor: "#F8B02B"}}>
                                        Download the app
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{marginTop: 172.5, }}>
                <div className='text-center justify-content-center'>
                    <TitleText text="Find your ride by make" mb={8} />
                    <SubtitleText text="Collections of the most desired vehicle make by guests"
                    mb={64}/>
                </div>

                <Row>
                    {
                        FEATURED_CARS.map((item, index) => {
                            return <Col key={index}>
                                <FeaturedCarItem
                                    carName={item.carName}
                                    carImage={item.image}
                                    hasAC={item.hasAC}
                                    hasWifi={item.hasWifi}
                                    hasDisabledSeat={item.hasDisabledSeat}
                                    isChauffeured={item.isChauffeured}
                                    rating={item.rating}
                                    numSeats={item.seats}
                                    price={item.price}
                                    tripsCount={item.trips}
                                />
                            </Col>
                        })
                    }
                    <Col>
                        <Card style={{ maxWidth: 282, height: 307, borderRadius: 12, }}>
                            <Image src={explore} alt="car" height={200}
                                   style={{borderTopLeftRadius: 12, borderTopRightRadius: 12,}}
                                   objectFit='cover'/>
                            <Card.Body style={{backgroundColor: '#101010'}}>
                                <Card.Title
                                    style={{fontSize: 18, fontWeight: '500', marginBottom: 24, lineHeight: 1.5, color: '#ffffff'}}>
                                    Explore without limits.{'\n'}
                                    Find your next ride.
                                </Card.Title>
                                <Card.Text>
                                    <Button className='btn w-100'
                                            style={{backgroundColor: '#F8B02B', borderColor: "#F8B02B"}}>
                                        Download the app
                                    </Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Page;