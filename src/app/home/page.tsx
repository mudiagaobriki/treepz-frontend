'use client'

import React from 'react';
import Link from "next/link";
import SearchBar from "@/components/searchbar/SearchBar";
import Header1 from "@/components/headers/Header1";
import FeaturedCarItem from "@/components/featuredCars/FeaturedCarItem";
import {Row, Col} from "react-bootstrap";
// import {Header2} from "@/components/headers/Header2";

const fetchData = async () => {
    const response = await fetch('https://indabosky.binary-optionllc.com/api/all-users/1/1000',
        {next: {revalidate: 30}
        })

    const data = await response.json();
    console.log('Data: ', data?.data?.docs)
    return data?.data?.docs;
}

const Page = async () => {
    const data = await fetchData()

    return (
        <div style={{paddingTop: 24}}>
            <div className='w-100 d-flex justify-content-center'>
                <SearchBar />
            </div>
            <Header1 />
            <div style={{marginTop: 200, }}>
                <h1>
                    Featured Cars
                </h1>

                <Row>
                    <Col>
                        <FeaturedCarItem />
                    </Col>
                    <Col>
                        <FeaturedCarItem />
                    </Col>
                    <Col>
                        <FeaturedCarItem />
                    </Col>
                    <Col>
                        <FeaturedCarItem />
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default Page;