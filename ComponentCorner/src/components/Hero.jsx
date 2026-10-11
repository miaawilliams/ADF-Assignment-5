import './Hero.css';

function Hero({ title, subtitle, callToAction, image }) {
    return (
        <div className='hero'>
            <img
                src={image}
                alt='hero image'
                className='hero-image'
            />

            <div className='hero-overlay'>
                <h1 className='hero-title'>{title}</h1>
                <p className='hero-subtitle'>{subtitle}</p>
                <button className='hero-btn'>{callToAction}</button>
            </div>
        </div>
    );
}

export default Hero;