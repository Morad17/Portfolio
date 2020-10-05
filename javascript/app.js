                                    
                    //Nav Javascripy//

// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
    
// burger.addEventListener('click', () =>{
//     //Toggle the Name
//     nav.classList.toggle('nav-active');
  
//     //Animations of Links
//     navLinks.forEach((link, i)=>{
//         if(link.style.animation){
//             link.style.animation = '';
//         } else{
//             link.style.animation = `navLinkFade 0.5s ease forwards ${i / 7 + 0.7}s`;
//         }
//         });  
//         //Burger Animation
//         burger.classList.toggle('toggle');

//     });
// }
// navSlide();
                //Progress Bar Slider//
    // const focusBar = document.getElementsByClassName('focus-bars')[0];
    // setInterval(()=>{
    //     const computedStyle = getComputedStyle(focusBar)
    //     const width = parseFloat(computedStyle.getPropertyValue('--focus')) || 0;
    //     focusBar.style.setProperty('--focus', width + .1);
        
    // }, 5);
    // if ('--focus' == width){
    //         clearInterval(focusBar);
    //     };//