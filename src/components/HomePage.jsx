import React, { useState } from 'react'
import { FormControl, InputGroup, Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Helmet } from "react-helmet";
import logo from '../logo.svg';

const HomePage = () => {
    const [url, setUrl] = useState('');

    let id = {
        value: Array.from(url).splice([url.indexOf('watch') + 6], 8).join(''),
        isCorrect: false
    }

    if(id.value.length === 8) id.isCorrect = true;


    const handleInputChange = (e) => {
        setUrl(e.target.value);        
    }

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Mover.for.uz</title>
                <meta name="description" content="Mover.uz saytidan istalgan videoni yuklab oling va videoni kompyuteringizda yoki telefoningizda internet yo`qligida tomosha qiling"/>
                <meta name="keywords" content="mover.uz, video, download, скачать"/>
                <link rel="canonical" href="https://mover.for.uz" />
            </Helmet>
            <div className="main-page-inner">
                <img src={logo} alt="Mover.for.uz logo" width="30%" className="mb-5 d-block mx-auto"/>
                <InputGroup className="m-auto">
                    <FormControl 
                        placeholder="Video url manzilini kiriting"
                        aria-label="Video url manzilini kiriting"
                        aria-describedby="basic-addon2"
                        onChange={handleInputChange}
                        value={url}
                    />
                    <InputGroup.Append>
                    <LinkContainer to={`/${id.value}`}>
                        <Button>Go</Button>
                    </LinkContainer>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </Container>
    )
}

export default HomePage
