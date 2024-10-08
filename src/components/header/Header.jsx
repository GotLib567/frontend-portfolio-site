import avatar from "./../../img/avatar.png";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <img src={avatar} alt="avatar" />
                <h1 className="header__name">Глеб Широков</h1>
                <h2 className="header__subtitle">Frontend разработчик</h2>
                <p className="header__text">Моя работа направлена на создание быстрых,
                    отзывчивых и интуитивно понятных интерфейсов, которые делают взаимодействие
                    с сайтом или приложением удобным и приятным.</p>
                <a className="header__btn" href="https://t.me/gotlibtg">Связаться</a>
            </div>
        </header>
    );
}

export default Header;