function SlideButton (props) {
    return (
        <div class={props.type} onClick="nextSlide()">
            <p>{props.arrow}</p>
        </div>
    );
}

export default SlideButton