import React from 'react'
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

const DownloadPage = () => {
    const params = useParams();
    return (
        <Container className="top-margin-main">
            <Row>
                <Col xs="12" sm="12" md="8" lg="7">
                    <iframe width="100%" height="360" src={`https://mover.uz/video/embed/${params.id}/`} frameBorder="0" allowFullScreen title="video preview"></iframe>
                </Col>
                <Col>
                <a download rel="noreferrer" href={`https://v.mover.uz/${params.id}_s.mp4`} target="_blank" className="btn btn-outline-warning d-block mb-2">
                    Small(124p)
                </a>
                <a download rel="noreferrer" href={`https://v.mover.uz/${params.id}_m.mp4`} target="_blank" className="btn btn-outline-info d-block mb-2">
                    Medium(480p)
                </a>
                <a download rel="noreferrer" href={`https://v.mover.uz/${params.id}_h.mp4`} target="_blank" className="btn btn-outline-success d-block mb-2">
                    High(720p)
                </a>
                <hr />
                <a href={`https://mover.uz/watch/${params.id}`} target="_blank" className="btn btn-outline-primary d-block mb-2">
                    Video's page
                </a>
                <a href="https://mover.uz" target="_blank" className="btn btn-outline-primary d-block mb-2">
                    Mover.uz
                </a>
                </Col>
            </Row>
        </Container>
    )
}

export default DownloadPage
