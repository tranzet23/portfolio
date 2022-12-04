import React from 'react';
import './portfolio.css'
import IMG1 from '../../assets/img.png'
import IMG2 from '../../assets/img_1.png'
import IMG3 from '../../assets/img_2.png'
import IMG4 from '../../assets/img_3.png'
import IMG5 from '../../assets/img_4.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/nft.PNG'


const data = [
    {
        id: 1,
        image: IMG1,
        title: "Cancreate",
        github: "https://github.com/tranzet23/Cancreate",
        demo: "http://wrestlk6.beget.tech/"
    },
    {
        id: 2,
        image: IMG2,
        title: "chat-react_redux",
        github: "https://github.com/",
        demo: ""
    },
    {
        id: 3,
        image: IMG3,
        title: "vr-soft",
        github: "https://github.com/tranzet23/VR_soft",
        demo: "https://vr-arsoft.com/about/"
    },
    {
        id: 4,
        image: IMG5,
        title: "football",
        github: "https://github.com/tranzet23/football-project",
        demo: "https://football-project-six.vercel.app/"
    },
    {
        id: 5,
        image: IMG4,
        title: "restaurant",
        github: "https://github.com/tranzet23/restaraunt",
        demo: "https://restaraunt-gjya.vercel.app/"
    },
    {
        id: 6,
        image: IMG7,
        title: "nft-marketplace_react",
        github: "https://github.com/tranzet23/nft-marketplace",
        demo: "https://nft-marketplace-taupe-sigma.vercel.app/"
    },
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn'>Github</a>
                                    {demo === ''
                                    ? ''
                                    :  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>}

                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;