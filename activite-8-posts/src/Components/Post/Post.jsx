import './Post.css';

function Post (props) {
    // ici dans les props je met la fonction addLike pour récupéré la fonction présente dans l'App.js
    const {title, author, content, likes, addLikes} = props;
    
    return <section className='post'>
                <h1>{title}</h1>
                <section className='infos'>
                    <h2>{author}</h2>
                    <h3>{content}</h3>
                </section>
                {/* ici on utilise la fonction addLikes */}
                <section className='likes'>{likes}<button onClick={addLikes}>+</button></section>
            </section>;
}
export default Post;