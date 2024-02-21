document.querySelector(".docs").addEventListener("mouseover", function(e){
    e.currentTarget.querySelector(".header-dropdown").style.display = "flex";
  })
  
  document.querySelector(".docs").addEventListener("mouseleave", function(e){
    e.currentTarget.querySelector(".header-dropdown").style.display = "none";
  })
  
  document.querySelector(".teams").addEventListener("mouseover", function(e){
    e.currentTarget.querySelector(".header-dropdown").style.display = "flex";
  })
  
  document.querySelector(".teams").addEventListener("mouseleave", function(e){
    e.currentTarget.querySelector(".header-dropdown").style.display = "none";
  })
  
  document.querySelector(".resources").addEventListener("mouseover", function(e){
    e.currentTarget.querySelector(".header-dropdown").style.display = "flex";
  })
  
  document.querySelector(".resources").addEventListener("mouseleave", function(e){
    e.currentTarget.querySelector(".header-dropdown").style.display = "none";
  })