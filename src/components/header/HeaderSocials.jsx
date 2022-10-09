import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTelegram} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://vk.com/tranzet98" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/tranzet23" target="_blank"><FaGithub /></a>
            <a href="https://t.me/anzett" target="_blank"><SiTelegram /></a>
            <a href="https://www.instagram.com/tranzet_98/" target="_blank"><BsInstagram /></a>
        </div>
    );
}

export default HeaderSocials;