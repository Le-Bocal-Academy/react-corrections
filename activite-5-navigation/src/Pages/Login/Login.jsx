import "./Login.css";
import Menu from '../../Components/Menu/Menu';
import Footer from '../../Components/Footer/Footer';

// Page de login disponible au path /Login
function Login () {
    return <section id="login">
                <Menu />{/* Appel du header*/}
                <div class="login-container">
                    <form class="login-form">
                        <h2>Connexion</h2>
                        <div class="input-group">
                            <input type="text" id="username" placeholder="Nom d'utilisateur" required/>
                        </div>
                        <div class="input-group">
                            <input type="password" id="password" placeholder="Mot de passe" required/>
                        </div>
                        <button type="submit">Se connecter</button>
                    </form>
                </div>
                <Footer />{/* Appel du footer*/}
            </section>;
}

export default Login;