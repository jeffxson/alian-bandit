import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import TelegramIcon from '@mui/icons-material/Telegram'
import InstagramIcon from '@mui/icons-material/Instagram'

import Logo from '../../assets/images/vert.png'
import { FooterStyle } from './style.js'

const Footer = () => {
  return (
    <FooterStyle>
      <div className='footer-container'>
        <div>
          <img src={Logo} alt='logo' height={100} width={100} />
        </div>
        <div className='footer-bottom'>
          <div className='footer-icons'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/alien_bandits?t=JGmN1nU84m2TYJ8N4cSfaA&s=08'
              className='footer-link'
            >
              <TwitterIcon />
            </a>
          </div>

          <div className='footer-icons'>
            <a
              href='https://t.me/+4ICOg08hzMQwZTdk'
              className='footer-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TelegramIcon />
            </a>
          </div>

          <div className='footer-icons'>
            <a
              href='https://instagram.com/alienbandits?utm_medium=copy_link'
              className='footer-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className='copy'>&copy; 2021 Alien Bandits</div>
    </FooterStyle>
  )
}

export default Footer
