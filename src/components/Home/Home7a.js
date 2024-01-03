 
import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Container, Row, Col } from "react-bootstrap";
import Fab from '@mui/material/Fab';
import myImg from "../../Assets/milgaye.jpg";
import myImg1 from "../../Assets/family.JPG";
import myImg2 from "../../Assets/inv3.jpg";
import myImg22 from "../../Assets/logo.png";
import myImg224 from "../../Assets/npic.png";
import Tilt from "react-parallax-tilt";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { styled } from '@mui/material/styles';

import { useTranslation } from 'react-i18next'
function Home2() {
    const { t } = useTranslation();

    const navigate = useNavigate()
    const send = () => { navigate('/table') }

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    const buttonStyle = {

        backgroundColor: isHovered ? "#430e7e" : "#e5b509",
        color: isHovered ? "white" : "black",
        alignItems: "left",
        justifyContent: "left",
        border: "none",
        cursor: "pointer",
        transition: "background-color 0.3s",
    };

    const iconStyle = {
        fontSize: "20px",
        marginRight: "2px",
    };

    return (
        <>
 
            <Container fluid className="home-about-section-444421   " id="about" style={{}}>
<br/>
<br/>
                <Container className="home-4444">
                    <Row>
                        <Col md={6} className="home-about-description">
                            <br />
                            <img src={myImg224} className="img-f " alt="avatar" style={{ height: "350px", width: "450px" }} />
                        </Col>
                        <Col md={6} className="myAvtar">
                            <p className="home-about-body" style={{ color: "RED" }}><>Fully Guarantee!!!!</></p>
                            <h1 className="home-about-body-under" style={{ fontSize: "2.6em", color: "black", textAlign: "left", fontFamily: "Sans-serif" }}><b>  ABOUT WHAT?<span className="purple">    </span>  </b> </h1>
                            <p className="home-about-body-under-under" style={{ color: "black", textAlign: "left" }}>
                            We give you the best enviorment for your animals in which they can grow at their full potential. Our dedicated team strives to provide the ideal conditions for your animals to thrive. From spacious enclosures to enriching activities, we prioritize the well-being and happiness of your furry friends. Our commitment to excellence ensures that every aspect of our facility is designed with your animals in mind.
  
                                <br />
                                <br />
                            </p>

                        </Col>
                    </Row>
                </Container>

            </Container>
           
        </>
    );
}
export default Home2;