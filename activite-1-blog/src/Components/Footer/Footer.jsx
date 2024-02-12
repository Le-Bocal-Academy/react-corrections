import "./Footer.css";
import logo from "./logo.png" ;

function Footer () {
    return <>
        <footer id="theFooter">
            <img src={logo} alt="oups" />
            <nav id="footerMenuLinks">
                <span>footer 1</span>
                <span>footer 2</span>
                <span>footer 3</span>
            </nav>
        </footer>
    </>;
}
export default Footer;