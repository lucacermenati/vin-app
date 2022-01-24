function Slide (props) {
    return (
        <div class={props.type}>
                <img class="slide-image" src={props.src}></img>
        </div>
    );
}

export default Slide