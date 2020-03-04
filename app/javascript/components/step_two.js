const tinderMovie =  document.getElementById('tinder-movie')
console.log(tinderMovie)

if(tinderMovie) {

  $("document").ready(function() {
    setTimeout(function() {
      $(".btn_next").trigger('click');
    },1);
  });

  $(document).ready(function() {
      var itemsLenght = $('.cards_container .item').length;
      var current = 1;
      $('.total_slides').text(itemsLenght);
      window.addEventListener("keyup",function(){
        if (event.keyCode == '37'){
          if(current > 1){
              current = current - 1;
              showSlide(current);
          }else{
              current = itemsLenght;
              showSlide(current);
          }
        }
      });

      window.addEventListener("keyup",function(){
        if (event.keyCode == '39'){

          if(current !== itemsLenght){
              current = current + 1;
              showSlide(current);
          }else{
              current = 1;
              showSlide(current);
          }
        }
      });

      function showSlide(slideNumber){
       $('.cards_container .item').removeClass('active');
       $('div[data-id="'+ slideNumber +'"]').addClass('active');

       $('.current_slide').text(slideNumber)

      }

  });


  //

  $(document).ready(function() {
      var itemsLenght = $('.cards_container .item').length;
      var current = 1;
      $('.total_slides').text(itemsLenght);
      $('.cardSlider .btn_prev').on("click",function(){
          if(current > 1){
              current = current - 1;
              showSlide(current);
          }else{
              current = itemsLenght;
              showSlide(current);
          }
      });

      $('.cardSlider .btn_next').on("click",function(){

          if(current !== itemsLenght){
              current = current + 1;
              showSlide(current);
          }else{
              current = 1;
              showSlide(current);
          }
      });

      function showSlide(slideNumber){
       $('.cards_container .item').removeClass('active');
       $('div[data-id="'+ slideNumber +'"]').addClass('active');

       $('.current_slide').text(slideNumber)

      }

  });

}
