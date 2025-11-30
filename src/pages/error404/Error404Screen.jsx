import React from "react";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LOGO_PATH = '/';

const Error404Screen = () => {

    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/')
    };
    return (
        <div className="not-found-wrapper">

        </div>
    );
};

export default Error404Screen;