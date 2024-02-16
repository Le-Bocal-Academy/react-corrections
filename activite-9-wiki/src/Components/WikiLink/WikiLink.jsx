
function WikiLink (props) {
    return <div>{props.name + " : " + props.link} <button onClick={() => window.open(props.link, '_blank')}>visualize</button></div>;
}
export default WikiLink;
