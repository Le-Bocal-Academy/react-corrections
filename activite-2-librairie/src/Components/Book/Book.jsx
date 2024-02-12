//ajout du CSS de mon composant
import './Book.css';

function Book (props) {
    // récupération des props et mise dans des variables simple à utiliser
    const {title, author, date, note, image} = props;
    
    return <section className='book'>
                {/* ici on utilise la props "image" qui est un lien pour définir la source de l'image  */}
                <img src={image} alt="oups"/>
                <h1>{title}</h1>
                <section className='infos'>
                    <h2>{author} - {date}</h2>
                </section>
                <section className='note'>
                    {/* ici on a une map qui permet de mettre autant d'étoiles pleines que de points. Les autres points sur 5 seront des étoiles vides */}
                    {[...Array(5)].map((e, i) => { return i+1<=note ? <img className="star" src={process.env.PUBLIC_URL + '/star-ok.png'} alt="oups"/> :<img className="star" src={process.env.PUBLIC_URL + '/star-nok.png'}  alt="oups"/> })}
                </section>
            </section>;
}
export default Book;