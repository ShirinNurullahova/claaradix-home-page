import React from 'react'
import '../HomePage/HomePage.css';
import logo from '../../images/logo.png'

const HomePage = () => {
    return (
        <div className='home-page'>
            <section id='up'></section>
          
            

            <div className='home-page-text'>
                <div className='imglogo'>
                    <img src={logo} />
                </div>
                <div className='news'>
                    <h1>Yenilənirik</h1>
                    <p>Çox yaxında yeniliklərlə sizin qarşınızda olacağıq!</p>

                </div>
               
                <div className='home-page-footer'>
                    <div className='footer-left'>
                        <p><span>Bizimlə əlaqə:</span>  +994 50 443 19 29 </p>
                        <div className='dots'></div>
                        <p >info@claradix.com</p>
                        <div className='dot'></div>
                    </div>
                    <div className='footer-right'>
                    <p>Instagram</p>
                        <div className='white'></div>
                        <p>Facebook</p>
                        <div className='white'></div>
                        <p>Linkedin</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomePage