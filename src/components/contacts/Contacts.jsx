import vk from "./../../img/icons/vk.png";
import tg from "./../../img/icons/tg.png";
import wa from "./../../img/icons/wa.png";

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts__wrapper">
                <h2 className="contacts__title">Контакты:</h2>
                <div className="contacts-block">
                    <p>forgotlib@gmail.com</p>
                    <div className="contacts-block__icons">
                        <a href="/">
                            <img src={tg} alt="" className="contacts-block__icon" />
                        </a>
                        <a href="/">
                            <img src={vk} alt="" className="contacts-block__icon" />
                        </a>
                        <a href="/">
                            <img src={wa} alt="" className="contacts-block__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;