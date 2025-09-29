import React from 'react'
import '../Styles/Main.scss'
import { Twitter, Instagram, Facebook, LinkedIn } from '@mui/icons-material'
import portfolioImage from '../Assests/portfolio.jpg'

const Main = () => {
  return (
    <div className='main'>
        <div className='main-container'>
            <div className='main-content'>
                <div className='text'>
                    <p>Welcome to my portfolio</p>
                    <h1>I'm <span>Shenal</span></h1>
                    <p>Full Stack Developer</p>
                    <div className='icons'>
                        <Twitter className='icon'/>
                        <Instagram className='icon'/>
                        <Facebook className='icon'/>
                        <LinkedIn className='icon'/>
                    </div>
                    <div className='buttons'>
                         <button>See Me</button>
                    <button >Hire Me</button>
                    </div>
                </div>
            </div>
            <div className='main_img'>
                <img src={portfolioImage} alt='Portfolio' style={{maxWidth: '200px', width: '100%'}}/> 
            </div>
        </div>
    </div>
  )
}

export default Main