import Contacts from "../contacts/Contacts";

const Footer = () => {
    return (
        <footer className="footer">
            <Contacts />
            <div className="footer__wrapper">
                <div className="footer__row">
                    <p className="copyright">© 2024 All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;