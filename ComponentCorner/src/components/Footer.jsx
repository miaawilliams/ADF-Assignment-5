import './Footer.css';

function Footer({email, phoneNumber, address}) {
    return (
        <footer className="footer">
            <div className='footer-logo'>ComponentCorner</div>
            <nav className='footer-menu'>
                <a href='#' className='footer-email'>{email}</a>
                <a href='#' className='footer-phone'>{phoneNumber}</a>
                <a href='#' className='footer-address'>{address}</a>
            </nav>
            <p>&copy; 2024 ComponentCorner. All rights reserved.</p>
        </footer>
    );
}

export default Footer;