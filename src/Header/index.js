import "./style.css";

const Header = ({ tittle }) => (
    <header className="header">
        <h1 className="header__tittle">{tittle}</h1>
    </header>
)

export default Header