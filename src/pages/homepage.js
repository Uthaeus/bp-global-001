import { Link, useNavigate } from 'react-router-dom';

import image from '../assets/images/overtime_image1.jpg';
import thumb1 from '../assets/thumbnails/assorted_plywood.jpeg';
import douglasFirPremium from '../assets/thumbnails/douglas_fir_premium.jpg';

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
                        <img src={thumb1} alt='content 1' width='100%' height='300px' />

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
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>DOMESTIC DOUGLAS FIR DIMENSION</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>PINE PRODUCTS IN DIMENSION AND COMMONS</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>TIMBERS IN DOUGLAS FIR</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>PLYWOOD</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>OSB</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>HARDWOOD PLYWOOD</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>IMPORTED CHINESE BIRCH</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>MPORTED CONCRETE FORM</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>IMPORTED CHINESE OSB</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb1} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>IMPORTED BRAZILIAN PINE AND EUCALIPTUS PLYWOOD</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;