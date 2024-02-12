import './Task.css';

function Task (props) {
    const {content, supprfct, modiffct} = props; //je récupères mes props dont les fonctions supprimé et modifier
    //ATTENTION VOUS N'AVEZ PAS ENCORE FAIT LES FONCTION DANS DES PROPS ON VERRA CA MERCREDI OU MARDI SI VOUS ETES RAPIDES !!!

    return <div className='taskcontent'>
                <li>{content} </li>
                <div className='buttons'> 
                    {/* bouton pour modifier la tache */}
                    <button className="editButton" onClick={modiffct}> 
                        {/* Svg d'une image de pinceau pour modifier (le tout dans un bouton à la place d'un texte) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
                            <path fill='#6868AC' d="M 46.574219 3.425781 C 45.625 2.476563 44.378906 2 43.132813 2 C 41.886719 2 40.640625 2.476563 39.691406 3.425781 C 39.691406 3.425781 39.621094 3.492188 39.53125 3.585938 C 39.523438 3.59375 39.511719 3.597656 39.503906 3.605469 L 4.300781 38.804688 C 4.179688 38.929688 4.089844 39.082031 4.042969 39.253906 L 2.035156 46.742188 C 1.941406 47.085938 2.039063 47.453125 2.292969 47.707031 C 2.484375 47.898438 2.738281 48 3 48 C 3.085938 48 3.171875 47.988281 3.257813 47.964844 L 10.746094 45.957031 C 10.917969 45.910156 11.070313 45.820313 11.195313 45.695313 L 46.394531 10.5 C 46.40625 10.488281 46.410156 10.472656 46.417969 10.460938 C 46.507813 10.371094 46.570313 10.308594 46.570313 10.308594 C 48.476563 8.40625 48.476563 5.324219 46.574219 3.425781 Z M 45.160156 4.839844 C 46.277344 5.957031 46.277344 7.777344 45.160156 8.894531 C 44.828125 9.222656 44.546875 9.507813 44.304688 9.75 L 40.25 5.695313 C 40.710938 5.234375 41.105469 4.839844 41.105469 4.839844 C 41.644531 4.296875 42.367188 4 43.132813 4 C 43.898438 4 44.617188 4.300781 45.160156 4.839844 Z M 5.605469 41.152344 L 8.847656 44.394531 L 4.414063 45.585938 Z"/>
                        </svg>
                    </button> 
                    {/* bouton pour supprimer la tache */}
                    <button className="editButton" onClick={supprfct}>
                        {/* Svg d'une image de poubelle pour supprimer (le tout dans un bouton à la place d'un texte) */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button> 
                </div>
            </div>;
}
export default Task;