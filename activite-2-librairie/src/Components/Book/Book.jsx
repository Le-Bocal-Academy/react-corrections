import './Book.css';

function Book (props) {
    const {title, author, date, note, image} = props;
    console.log(title + ' ' + author + ' ' + date + ' ' + note + ' ' + image);
    return <>
    <section className='book'>
        <img src={image} alt="oups"/>
        <h1>{title}</h1>
        <section className='infos'>
            <h2>{author} - {date}</h2>
        </section>
        <section className='note'>
            {[...Array(5)].map((e, i) => { return i+1<=note ? <img className="star" src={process.env.PUBLIC_URL + '/star-ok.png'} alt="oups"/> :<img className="star" src={process.env.PUBLIC_URL + '/star-nok.png'}  alt="oups"/> })}
        </section>
    </section>
    </>;
}
export default Book;