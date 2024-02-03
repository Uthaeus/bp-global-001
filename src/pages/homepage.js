import { Link, useNavigate } from 'react-router-dom';

import image from '../assets/images/overtime_image1.jpg';
import assortedPlywood from '../assets/thumbnails/assorted_plywood.jpeg';
import douglasFirPremium from '../assets/thumbnails/douglas_fir_premium.jpg';
import douglasFirLowgrade from '../assets/thumbnails/douglas_fir_lowgrade.jpeg';
import douglasFirTimbers from '../assets/thumbnails/douglas_fir_timbers.jpeg';
import chineseOsb from '../assets/thumbnails/chinese_osb.jpeg';
import canadianOsb from '../assets/thumbnails/canadian_osb.jpeg';
import domesticPlywood from '../assets/thumbnails/domestic_plywood.jpeg';
import chineseWhiteBirch from '../assets/thumbnails/chinese_white_birch.jpeg';
import brazilianPlywood from '../assets/thumbnails/brazilian_plywood.jpeg';
import brazilianPlywood2 from '../assets/thumbnails/brazilian_plywood_2.jpeg';


function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="homepage-1" style={{  
            backgroundImage: "url(" + image + ")",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>
                <h1 className='homepage-1-title'>GREAT PEOPLE &#x2022; GREAT SOLUTIONS</h1>

                <div className='homepage-1-subtitle-wrapper'>
                    <p className='homepage-1-subtitle'>KEEPING THE LUMBER SUPPLY CHAIN CONNECTED</p>
                </div>

                <button onClick={() => navigate('/about')} className='homepage-1-btn'>ABOUT BP GLOBAL</button>
            </div>

            <div className='homepage-2'>
                <h1 className='homepage-2-title'>WE ARE YOUR LUMBER TRADING PARTNER</h1>

                {/* <p className='homepage-2-subtitle'>We connect supply with demand and provide solutions to your challenges</p> */}

                <div className='homepage-2-content'>
                    <div className='homepage-2-content-item'>
                        <img src={brazilianPlywood2} alt='content 1' width='100%' height='300px' />

                        <Link className='content-item-title'>What We Do</Link>

                        <p className='content-item-blurb'>Our team works in partnership with out partner suppliers and you partner with us. We work together with you!</p>
                    </div>
                </div>
            </div>

            <div className='homepage-3' style={{  
            backgroundImage: "url(" + douglasFirPremium + ")",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>
                <h3 className='homepage-3-title'>WE TRADE A VARIETY OF LUMBER PRODUCTS</h3>

                <p className='homepage-3-subtitle'>BP Global trades a variety of lumber, panel, and industrial products. We also manage ready-to-ship inventory at locations across North America to provide wood products where and when you need it.</p>

                <div className='homepage-3-content'>
                    <div className='homepage-3-content-item'>
                        <img src={douglasFirLowgrade} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>DOMESTIC DOUGLAS FIR DIMENSION</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={assortedPlywood} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>PINE PRODUCTS IN DIMENSION AND COMMONS</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={douglasFirTimbers} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>TIMBERS IN DOUGLAS FIR</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={assortedPlywood} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>PLYWOOD</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={canadianOsb} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>OSB</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={domesticPlywood} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>HARDWOOD PLYWOOD</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={chineseWhiteBirch} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>IMPORTED CHINESE BIRCH</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={chineseOsb} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>IMPORTED CHINESE OSB</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={brazilianPlywood} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>IMPORTED BRAZILIAN PINE AND EUCALIPTUS PLYWOOD</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;