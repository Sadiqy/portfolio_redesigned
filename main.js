$(document).ready(function(){
    $('.nojs').hide(); 
  
    $(function() {
      console.log("js is working");
      $('#typedJS').typed({
        strings: [
        "Hello there",
        "I'm Sadiq",
        "Check me out below.",
        "Why not?",
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1400,
        loop: true,
      });
    }); 
  
  });