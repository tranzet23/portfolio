import React from 'react';
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Узнать</h5>
            <h2>Обо мне</h2>


            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About img"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>100+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Project</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div>
                    <p>Добрый день, меня зовут Влад, опыт работы 2 года в сфере frontend разработки.
                        <br/>
                        <br/>
                        Основные навыки и умения:
                        Уверенное владение HTML, БЭМ, CSS, CSS-препроцессоры, Bootstrap, кроссбраузерная и адаптивная
                        верстка, Сборщики.
                        JavaScript + es6, JQuery, React, Redux, Redux-toolkit, Git, typescript
                        <br/>
                        <br/>
                        Усидчив. Внутри меня живет перфекционист, который не дает делать работу "кое-как". Всегда
                        стараюсь искать новые подходы в работе и применять их на практике. Тащусь от крутых дизайнов в
                        связке с динамикой.
                        <br/>
                        <br/>
                        В свободное время занимаюсь чтением, просмотром полезной информации для себя. Читаю
                        художественную литературу, занимаюсь спортом.
                        Всегда стараюсь развиваться и не стоять на месте
                        <br/>
                        <br/>
                        За 2 года работы проработал в нескольких кампаниях, краткое описание в профиле <a
                            href="https://hh.ru/resume/e26cf488ff09a865bf0039ed1f4b4a66316f68">hh.ru</a>
                        <br/>
                        <br/>
                        p.s. Мобильный телефон российского оператора не доступен в моём месте проживания. В случае
                        необходимости, пишите на почту, указанную в профиле
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;