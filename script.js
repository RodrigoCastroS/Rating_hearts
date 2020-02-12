const stars = document.querySelector(".stars");
const star = document.querySelectorAll(".star");


for (let i = 0; i < star.length; i++) {


    star[i].addEventListener("click", function(){

          star[i].parentsUntil("section").classList.add("active");
        
        
    })

   
    
}

// star[2].addEventListener("click", function(){

//     star[2].classList.toggle("active");
    
// });

