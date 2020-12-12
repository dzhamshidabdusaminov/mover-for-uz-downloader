import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet';

const AboutPage = () => {
    return (
        <div className="top-margin-main">
            <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | Mover.for.uz</title>
                <meta name="description" content="Mover.for.uz sayti nima? mover.for.uz sayti haqida"/>
                <meta name="keywords" content="mover.uz, mover.for.uz about, haqida"/>
                <link rel="canonical" href="https://mover.for.uz" />
            </Helmet>
            <p>Онлайн загрузчик видео Mover.for.uz - это специальный сервис, который помогает быстро и бесплатно загружать видео. Вам не нужно устанавливать различное программное обеспечение или искать онлайн-сервисы.</p>
            <p>Это SaveFrom! Он помогает загружать видео с различных веб сайтов, просто введя URL-адрес видео и нажав «Загрузить». Также, наше расширение доступно для браузера Google Chrome.</p>
            <h2>Как сохранить онлайн видео в формате MP4 в HD качестве?</h2>
            <p>Вы можете смотреть видео онлайн, когда у вас есть высокоскоростное подключение к Интернету, но иногда вам приходится смотреть их автономно.</p>
            <p>Наш онлайн загрузчик поможет вам сохранить видео в формате MP4 в HD качестве без каких-либо потерь и смотреть в удобное для вас время.</p>
            <h2>Какое качество видео поддерживается?</h2>
            <p>Большинство видео в формате MP4 и SD, HD. Качество зависит от загружаемого файла. Если автор загрузил его в формате 720p, то его можно сохранить в том же качестве.</p>
            <h2>С какими браузерами работает этот загрузчик видео?</h2>
            <p>Работает с: Google Chrome, Mozilla Firefox, Safari, Opera и всеми браузерами на основе Chromium.</p>
            </Container>
            
        </div>
    )
}

export default AboutPage
