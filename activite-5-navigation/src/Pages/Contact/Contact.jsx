import "./Contact.css";
import Menu from '../../Components/Menu/Menu';
import Footer from '../../Components/Footer/Footer';

// Page de contact disponible au path /Contact
function Contact () {
    return <section id="contact">
    <Menu />{/* Appel du header*/}
    <div class="contact-container">
        <div class="contact-info">
            <h2>Contactez-nous</h2>
            <p>N'hésitez pas à nous envoyer un message pour toute question ou demande.</p>
            <div>
                <p><strong>Email:</strong> contact@example.com</p>
                <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
                <p><strong>Adresse:</strong> 123 Rue de l'exemple, 75000 Paris, France</p>
            </div>
        </div>
        <div class="contact-form">
            <form>
                <input type="text" placeholder="Votre nom" required/>
                <input type="email" placeholder="Votre email" required/>
                <textarea placeholder="Votre message" required/>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    </div>
    <Footer />{/* Appel du footer*/}
    </section>;
}
export default Contact;