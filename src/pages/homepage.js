import { Link, useNavigate } from 'react-router-dom';

import image from '../assets/thumbnails/49er-thumb.png';
//import thumb1 from '../assets/thumbnails/giants-thumb.png';
//import thumb2 from '../assets/thumbnails/sf-thumb.png';
import thumb3 from '../assets/thumbnails/machine-main.jpeg';
import thumb4 from '../assets/thumbnails/machine-thumb.jpeg';
import thumb5 from '../assets/thumbnails/overtime_image1.jpg';
import thumb6 from '../assets/thumbnails/overtime_image2.jpeg';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="homepage-1" style={{  
            backgroundImage: "url(" + thumb5 + ")",
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

                <p className='homepage-2-subtitle'>We connect supply with demand and provide solutions to your challenges</p>

                <div className='homepage-2-content'>
                    <div className='homepage-2-content-item'>
                        <img src={thumb3} alt='content 1' width='100%' height='300px' />

                        <Link className='content-item-title'>What We Do</Link>

                        <p className='content-item-blurb'>paragraph here summarizing what is explained on the what we do page. Could probably use another sentence here to make it a little longer. Maybe a little more would make it look a bit better.</p>
                    </div>

                    <div className='homepage-2-content-item'>
                        <img src={thumb4} alt='content 1' width='100%' height='300px' />

                        <Link to='/' className='content-item-title'>Why BP Global</Link>

                        <p className='content-item-blurb'>paragraph here summarizing what is explained on the what we do page. Could probably use another sentence here to make it a little longer. Maybe a little more would make it look a bit better.</p>
                    </div>
                </div>
            </div>

            <div className='homepage-3' style={{  
            backgroundImage: "url(" + thumb3 + ")",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>
                <h3 className='homepage-3-title'>WE TRADE A VARIETY OF LUMBER PRODUCTS</h3>

                <p className='homepage-3-subtitle'>BP Global trades a variety of lumber, panel, and industrial products. We also manage ready-to-ship inventory at locations across North America to provide wood products where and when you need it.</p>

                <div className='homepage-3-content'>
                    <div className='homepage-3-content-item'>
                        <img src={image} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>Industrial</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb6} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>Lumber & Boards</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb3} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>Moulding & Millwork</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb4} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>Panels</Link>
                    </div>

                    <div className='homepage-3-content-item'>
                        <img src={thumb5} alt='content item 1' width='100%' height='140px' className='content-item-img' />
                        <Link to='/' className='content-item-link'>Crane Mats</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;