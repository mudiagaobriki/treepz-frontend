'use client'

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import sampleHosts from '../../assets/images/sample-hosts.png';
import line1 from '../../assets/images/line1.png';
import line2 from '../../assets/images/line2.png';
import qrCode from '../../assets/images/QrCodeLine.png';
import {Header2Right} from "@/components/headers/Header2Right";

const Header1 = () => {

    return (
        <Row style={{gap: 86, marginTop: 39}}>
            <Col xs={5}>
                <h1 style={{fontSize: 72, fontWeight: "500", letterSpacing: 0.5 }}>
                    Rent your perfect car in minutes
                </h1>
                <p style={{fontSize: 20, fontWeight: "400", letterSpacing: 0.4, marginBottom: 56 }}>
                    Move on your own terms, rent any car of your choice,
                    anytime and anywhere
                </p>
                <div className='d-flex align-items-center' style={{marginBottom: 28}}>
                    <Image src={sampleHosts} alt='sample hosts' height={24} width={96} />
                    <span style={{fontSize: 16, fontWeight: "400", letterSpacing: 0.1, marginLeft: 5,}}>
                        2000+ unique hosts
                    </span>
                </div>
                <div className="d-flex align-items-center">
                    <Image src={line2} alt='line 2' height={1} width={'100%'} />
                    <Image src={qrCode} alt='qr code' height={20} width={20} />
                    <span>Scan to download</span>
                    <Image src={line1} alt='line 1' height={1} width={'100%'} />
                </div>
            </Col>
            <Col xs={5}>
                <Header2Right />
            </Col>
        </Row>
    );
};

export default Header1;
