import React from 'react'
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const FaqPage = () => {
    return (
        <div className="top-margin-main">
            <Container>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>FAQ | Mover.for.uz</title>
                    <meta name="description" content="Mover.uz saytidan saytidan foydalanish yo`riqnomasi"/>
                    <meta name="keywords" content="mover.uz, video, download, скачать, faq, help"/>
                    <link rel="canonical" href="https://mover.for.uz" />
                </Helmet>
                <h2>Как скачать видео онлайн?</h2>
                <ol>
                    <li>Введите адрес веб-страницы в соответствующее поле на главной странице и нажмите кнопку Скачать.</li>
                    <li>Используйте удобные расширения.</li>
                    <li>Используйте короткий домены:mover.for.uz</li>
                    <li>Добавьте for между mover.uz; Пример https://mover.<b>for</b>.uz/watch/vCjkBiVm/</li>
                </ol>
            </Container>
            
        </div>
    )
}

export default FaqPage
