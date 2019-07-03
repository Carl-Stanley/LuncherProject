// Donation mini app by Carlos Mitchell
// change values for donations 
class MoneyMaker {
    constructor(tabElement){
     
       this.tabElement = tabElement;
      
       this.tabData =  this.tabElement.dataset.tab;
        
      
       this.theCards = document.querySelectorAll(`.cards[data-tab="${this.tabData}"]`);
        
      
       this.theCards = Array.from(this.theCards).map(card => new ValueCard(card));
      
  
       this.tabElement.addEventListener('click', this.selectTab.bind(this)); //<--- FANCY!

    }



  
    selectTab(){
       
  
      const tabs = document.querySelectorAll('.tab');
      
      
      
         tabs.forEach( link =>{
           link.classList.remove('active-tab')
         });
  
      
  
       const theCards = document.querySelectorAll('.cards');
       
  
  
       theCards.forEach(links => links.style.display ='none');
      
     
  
       this.tabElement.classList.add('active-tab');
    
      
  
      this.theCards.forEach(card => card.selectCard());
    }
  }



  
  class ValueCard {
    constructor(cardElement){
      
  
      this.cardElement = cardElement;
      
    }

    selectCard(){
      
      
       this.cardElement.style.display = 'flex';
    }
  
  }
  
 
  let tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(link => new MoneyMaker(link));




   //trancition to payment info 
   let donationsValues = document.querySelector(".cards-container");
  //console.log(donationsValues);
    let buttonDonation = document.querySelector(".donateBtn");
  // console.log(buttonDonation);
    let choice =document.querySelector(".tabs");

    let thankYou = document.querySelector(".thankYou");
    console.log(thankYou);


     buttonDonation.addEventListener('click', () => {
     donationsValues.style.display ='none';
     buttonDonation.style.display ='none';
     choice.style.display ='none';
     thankYou.style.display ='flex';
  });


  

