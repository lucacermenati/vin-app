import SlideButton from './SlideButton';
import Slide from './Slide';
import polo1 from './img/polo1.jpg';
import polo2 from './img/polo2.jpg';
import polo3 from './img/polo3.jpg';

var currentSlide=0;
var slides = document.getElementsByClassName("slide");
var slideInterval = setInterval(autoSlide,3000);

function Slideshow () {
    return (
        <div class="slideshow-container">     
            <div class="prev-next">
                <SlideButton type="button prev" arrow="&#10094;"/>
                <SlideButton type="button next" arrow="&#10095;"/>
            </div>
            <Slide type="slide showing fade" src={polo1} />
            <Slide type="slide fade" src={polo2}/>
            <Slide type="slide fade" src={polo3}/>
        </div> 
    );
}

function autoSlide()
{
    slides[currentSlide].className = "slide fade";
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing fade';
}

function nextSlide()
{
    clearInterval(slideInterval);
    slides[currentSlide].className = "slide fade";
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing fade';
    slideInterval = setInterval(autoSlide,3000);
}

function prevSlide()
{
    clearInterval(slideInterval);
    slides[currentSlide].className = "slide fade";
    
    if(currentSlide!=0)
        currentSlide = (currentSlide-1)%slides.length;
    else
        currentSlide = slides.length-1;
    
    slides[currentSlide].className = 'slide showing fade';
    slideInterval = setInterval(autoSlide,3000);
}

export default Slideshow