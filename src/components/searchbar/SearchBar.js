'use client'

import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import mapPin from "../../assets/images/map-pin.png";
import calendar from "../../assets/images/calendar-line.png";
import search from "../../assets/images/search-line.png";
import Image from "next/image";

const SearchBar = () => {
    return (
        <div
            style={{
                borderRadius: '30px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Adding a subtle shadow
                width: "60%",
            }}
        >
            <InputGroup className='border-0'>
                {/*<InputGroup.Prepend>*/}
                {/*    <InputGroup.Text>*/}
                {/*        <i className="fas fa-map-marker-alt"></i>*/}
                {/*    </InputGroup.Text>*/}
                {/*</InputGroup.Prepend>*/}
                <div className="input-group-prepend border-0">
                    <span className="input-group-text border-0 bg-transparent">
                      {/*<i className="fas fa-map-marker-alt"></i>*/}
                        <Image src={mapPin} alt='map-pin' width={24} height={24} />
                    </span>
                </div>
                <FormControl className='border-start-0 border-top-0 border-bottom-0' placeholder="Whare are you heading to?" />
            </InputGroup>

            {/*<div className='d-flex'>*/}
            {/*    /!*<div>*!/*/}
            {/*        <Image src={mapPin} alt='map-pin' width={24} height={24} />*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div>*!/*/}
            {/*        <DatePicker*/}
            {/*            className="form-control border-start-0 border-bottom-0 border-top-0"*/}
            {/*            placeholderText="Start Date"*/}
            {/*            dateFormat="dd/MM/yyyy"*/}
            {/*        />*/}
            {/*    /!*</div>*!/*/}

            {/*</div>*/}

            <div className='d-flex'>
                <div className="input-group-prepend border-0 d-flex">
                <Button
                    // variant="light"
                    style={{
                        borderTopLeftRadius: '0',
                        borderBottomLeftRadius: '0',
                        borderColor: "transparent",
                        backgroundColor: 'transparent',
                        // marginRight: -10,
                    }}
                >
                    <Image src={calendar} alt='map-pin' width={72} height={72} />
                </Button>
                </div>
                <DatePicker
                    className="form-control border-start-0 border-top-0 border-bottom-0"
                    placeholderText="Start Date"
                    dateFormat="dd/MM/yyyy"
                />
            </div>


            <div className='d-flex'>
                <div className="input-group-prepend border-0 d-flex">
                    <Button
                        // variant="light"
                        style={{
                            borderTopLeftRadius: '0',
                            borderBottomLeftRadius: '0',
                            borderColor: "transparent",
                            backgroundColor: 'transparent',
                        }}
                    >
                        <Image src={calendar} alt='map-pin' width={72} height={72} />
                    </Button>
                </div>
                <DatePicker
                    className="form-control border-start-0 border-top-0 border-bottom-0"
                    placeholderText="End Date"
                    dateFormat="dd/MM/yyyy"
                />
            </div>

            <Button
                style={{
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#F8B02B',
                    borderColor: '#F8B02B',
                }}
            >
                <Image src={search} alt='search' width={24} height={24} />
            </Button>
        </div>
    );
};

export default SearchBar;
