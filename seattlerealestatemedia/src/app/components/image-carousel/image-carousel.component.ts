import {  Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent  implements OnInit {
  
 
// images = [
//   { url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhYKL2hFWDeNkdPwHVPjkmud64_aCzBmh6D4uTX4tZypj1FPlWjLuIXGtgd5EYieBO9TdOcP9X7SgFeLeUd_VCUD10I0ATZAnJ1_tEVApGJrrp2TAOJtqR3ffOa-3kXkes08zeUn1KNW5hh5arx9j_xtqjlAd6IDtAc4ghm3wfZ6lYx0VGOnCypkuzwvg=s800', alt: 'Image 1' },
//   { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcl3ZgOY-FWr1WssmdbyV-t8XJ6Egzh5uwj4v48SBt_L2vRDsF9PAKPqCfIdoUG2bb9KMTjlX1KLZI7DrgguFHbenocorqgVpnYIjJ96cEU2WR6FEt-MWKB0rA9FhMPM-A6h_poICjLBIHECfpxN_hDJ2IpNy7EjH-4whcwow5kyXZ3yg_wqqImsoFVg/s800/_MKY0354.jpg', alt: 'Image 2' },
//   { url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhjmN2PGxeP20DOSVdc4Jde96pVTqlBcwu2rnjmwMhXXfXdfWeYOWsEAUVGFZv1jPIKcsDRThF13eSYPjd3UaRqSTGqqOLAkYlRUNR1Nn9f6_-NVCBZ-v9a86kWwVivfEStJuuQ68iG0GezlCdd9yi8IaaisuaaqsSMmY3L988jDq5LGXwcFUXBkn36Lg=s800', alt: 'Image 3' },
//   { url: 'https://blogger.googleusercontent.com/img/a/AVvXsEg9nT114i7bIq6VQOhSsTeDW_JGFTL7dB8UgZhzZnpeuh08mbhwgvI0OqMy-RkG2Z35x_cAQjrBSn-80tqHbSqRsYvvxfFq-Ws8iVFkaTeYXVJZ4lQLT1GQJczSIoX9kREAFviClGS4lX3Dv0X25-8kuMS3db2Uj6E17qJCer9ARbwa7Zwyobb3pGc1wA=s800', alt: 'Image 4' },
//   { url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgphU1RYRBFAqhTHjcLhH0-0CvA4YgvTzdVJGV9FN6x4naP_3o6f25mfDN25g8dVl4hKSNDH7Ai8Ssgzrhcp7oYb4MaXmwC1gS8OcvTIp3wzUCusFvD9jq2P7a0NTfmgXyqrqXpCl443Yz2rmfp2a2oNNJWXqva7BjrPy0w6RyCEb4GI9bYnCGt3ReTWw=s800', alt: 'Image 5' }
// ];
// currentIndex = 0; 
  
  constructor(){}

  ngOnInit(){

    const track = document.querySelector('.carousel__track') as HTMLDivElement;
    console.log(track);
    const slides = Array.from(track?.children) as Element[];
    const nextButton = document.querySelector('.carousel__button--right')as HTMLButtonElement;
    const prevButton = document.querySelector('.carousel__button--left')as HTMLButtonElement;
    const dotsNav = document.querySelector('.carousel_nav')as HTMLDivElement;
    const dots = Array.from(dotsNav?.children);
    console.log(slides);
    const slideWidth = slides[0].getBoundingClientRect().width;
    console.log("ngOnInit");
    let direction : number = 0; 
    let nextSlide : any = null;
    let targetDot : any = null;
    let targetIndex : any = null;

    setInterval(function() {
     
      const currentSlide = document.querySelector('.current_slide') as HTMLDivElement;
      const curDot = dotsNav.querySelector('.current_slide') as HTMLButtonElement;
      if( direction == 0 ){
        nextSlide = currentSlide?.nextElementSibling as HTMLDivElement;
        targetDot = curDot.nextElementSibling as HTMLButtonElement;
        if(nextSlide == null){
          direction = 1;
          nextSlide = currentSlide?.previousElementSibling as HTMLDivElement;
          targetDot = curDot.previousElementSibling as HTMLButtonElement;
        }
      }
      else{
        nextSlide = currentSlide?.previousElementSibling as HTMLDivElement;
        targetDot = curDot.previousElementSibling as HTMLButtonElement;
        if(nextSlide == null){
          direction = 0;
          nextSlide = currentSlide?.nextElementSibling as HTMLDivElement;
          targetDot = curDot.nextElementSibling as HTMLButtonElement;
        }
      }
     
      const targetIndex = slides.findIndex(slide => slide === nextSlide);
      moveToSlide(currentSlide, nextSlide);

      updateDots(curDot, targetDot);

      hideShowArrows(targetIndex, prevButton, nextButton, slides);
      console.log("setTimeout direction: " + direction);
  }, 8000);
  
    
  
    const setSlidePosition = (slide:any, index:any) => {
      slide.style.left = slideWidth * index + 'px'; 
    }
  
     slides.forEach(setSlidePosition);
  
     const moveToSlide = (currentSlide: HTMLDivElement, targetSlide: HTMLDivElement) =>{
      (document.querySelector('.carousel__track') as HTMLDivElement).style.transform = 'translateX(-' + targetSlide?.style.left + ')';
      currentSlide.classList.remove('current_slide');
      targetSlide.classList.add('current_slide');

     
  
     }
  
    prevButton?.addEventListener('click', e =>{
      console.log('PrevClick');
    const currentSlide = document.querySelector('.current_slide') as HTMLDivElement;
    const prevSlide = currentSlide?.previousElementSibling as HTMLDivElement;
    const curDot = dotsNav.querySelector('.current_slide') as HTMLButtonElement;
    const targetDot = curDot.previousElementSibling as HTMLButtonElement;
    const targetIndex = slides.findIndex(slide => slide === prevSlide);
    updateDots(curDot, targetDot);
    moveToSlide(currentSlide, prevSlide);
    hideShowArrows(targetIndex, prevButton, nextButton, slides);
    })
  
    nextButton?.addEventListener('click', e => {
      console.log('PrevClick');
      const currentSlide = document.querySelector('.current_slide') as HTMLDivElement;
      const nextSlide = currentSlide?.nextElementSibling as HTMLDivElement;
      const curDot = dotsNav.querySelector('.current_slide') as HTMLButtonElement;
      const targetDot = curDot.nextElementSibling as HTMLButtonElement;
      const targetIndex = slides.findIndex(slide => slide === nextSlide);
      updateDots(curDot, targetDot);
      moveToSlide(currentSlide, nextSlide);
      hideShowArrows(targetIndex, prevButton, nextButton, slides);
    })
  
    dotsNav?.addEventListener('click', e=>{
      console.log('dotClick');
      const targetDot = e.target as HTMLElement;
      let btn = targetDot.closest('button') as HTMLButtonElement;
  
      const track = document.querySelector('.carousel__track') as HTMLDivElement;
      const slides = Array.from(track?.children);
      const dotsNav = document.querySelector('.carousel_nav')as HTMLDivElement;
      const dots = Array.from(dotsNav?.children);
      const currentSlide = document.querySelector('.current_slide') as HTMLDivElement;
      const curDot = dotsNav.querySelector('.current_slide') as HTMLButtonElement;
      const targetIndex = dots.findIndex(dot => dot === btn);
      const targetSlide = slides[targetIndex] as HTMLDivElement;
  
      moveToSlide(currentSlide, targetSlide);
  
      updateDots(curDot, btn);
  
      hideShowArrows(targetIndex, prevButton, nextButton, slides);
  
    })
  
    const updateDots = (currentDot:HTMLButtonElement, targetDot: HTMLButtonElement) => {
      currentDot?.classList.remove('current_slide');
      targetDot?.classList.add('current_slide');
    }
  
    const hideShowArrows = (targetIndex:number, prevButton : HTMLButtonElement, nextButton: HTMLButtonElement, slides: Element[]) =>{
      if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
      }
      else if (targetIndex === slides.length-1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
      }
      else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
      }
    }
  
  }
  
  }
  