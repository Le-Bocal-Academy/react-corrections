import "./Menu.css";
import logo from "./logo.png" ;

function Menu () {
    return <>
        <nav id="menuNav">
            <span id="menuLinks">
                <span>menu1</span>
                <span>menu2</span>
                <span>menu3</span>
            </span>
            <img src={logo} alt="oups" />
        </nav>
    </>;
}
export default Menu;