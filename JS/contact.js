//hover effect  by Carlos Mitchell

let hover = document.querySelectorAll(".card");
//console.log(hover);

hover.forEach((hover) => {
    hover.addEventListener("mouseover", function() {
      hover.style.backgroundColor = "#50D1BF";
   
    })
});

hover.forEach((hover) => {
    hover.addEventListener("mouseout", function() {
      hover.style.backgroundColor = "#FFFFFF";
    })
});

let hoverText = document.querySelectorAll(".card h4");

hoverText.forEach((hoverText) => {
    hoverText.addEventListener("mouseover", function() {
      hoverText.style.color = "#FFFFFF";
   
    })
});

hoverText.forEach((hoverText) => {
    hoverText.addEventListener("mouseout", function() {
      hoverText.style.color = "#444B55";
    })
});


