class Carousel {
    constructor(carouselLink){       
       
	   this.element = carouselLink;
       
	   this.leftButton = this.element.querySelector('.left-button');
       
	   this.rightButton = this.element.querySelector('.right-button');
       
	   this.images = this.element.querySelectorAll('.carousel img');
        
       this.index = 0 ;    

       this.images[this.index].style.display = 'inline-block';
       
       this.leftButton.addEventListener('click', () => {
           this.leftButtonToggle();
       });

       this.rightButton.addEventListener('click', () => {
          this.rightButtonToggle();
       })

       
    
        }
    leftButtonToggle(){
    
    this.images[this.index].style.display = 'none';
   
    if(this.index  === 0){
        this.index = this.images.length - 1;
        this.images[this.index].style.display = 'block';
    }
    else{
        this.index = this.index -= 1;
        this.images[this.index].style.display ='block';
    }
    } // end leftButtonToggle

    rightButtonToggle() {
        
        this.images[this.index].style.display = 'none';
     

        if(this.index === this.images.length - 1){
            this.index = 0;
            this.images[this.index].style.display = 'block';
        }
        else {
           this.index = this.index += 1;
            this.images[this.index].style.display ='block';
        }
   
   
    } // end rightButtonToggle

    leftButtonToggleForver() {

        


    } // end leftButtonToggleforever

    rightButtonToggleForver() {


    } // end leftButtonToggleforever

}

let carousel = document.querySelectorAll('.carousel');

// console.log(carousel);
carousel = Array.from(carousel).map((carouselLink) => new Carousel(carouselLink));