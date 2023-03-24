import React from 'react'
import '../HomePage/HomePage.css';
import logo from '../../images/logo.png'

const HomePage = () => {
    return (
        <div className='home-page'>
            <div id='up'></div>
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
                        <p>info@claradix.com</p>
                        <div className='dot'></div>
                    </div>
                    <div className='footer-right'>
                        <a href='https://instagram.com/claradix_llc?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer">
                           <p>Instagram</p>  
                        </a>
                       
                        <div className='white'></div>
                        <a href='https://www.facebook.com/profile.php?id=100076390094082&mibextid=LQQJ4d' target='_blank' rel="noreferrer">
                           <p>Facebook</p>  
                        </a>
                       
                        <div className='white'></div>
                        <a href='https://www.linkedin.com/company/claradix/' target='_blank' rel="noreferrer">
                             <p>Linkedin</p>
                        </a>
                       
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HomePage