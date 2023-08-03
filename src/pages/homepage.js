
import image from '../assets/thumbnails/49er-thumb.png';

function HomePage() {

    return (
        <div className="homepage">
            <div className="homepage-1" style={{  
            backgroundImage: "url(" + image + ")",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
            }}>
                <h1 className='homepage-1-title'>Great People &#x2022; Great Solutions</h1>

                <div className='homepage-1-subtitle-wrapper'>
                    <p className='homepage-1-subtitle'>Keeping the lumber supply chain connected</p>
                </div>

                <button className='homepage-1-btn'>About BP Global</button>
            </div>
        </div>
    );
}

export default HomePage;