//(function(){

    $(document).ready(function(){
        $('.gnb > li').hover(
          function(){
            $('.gnb_sub_menu').css('top', '0');
          },
          function(){
            $('.gnb_sub_menu').css('top', '-400px');
          }
        );

        $('.gnb_sub_menu').hover(
          function(){
            $(this).css('top', '0');
          },
          function(){
            $(this).css('top', '-400px');
          }
        );

        $('.header_btn').on('click', function() {
          var target = $('.gnb_sub_menu');
          var currentPosition = target.position().top;
  
          if (currentPosition === 0) {
              target.css('top','-400px' );
          } else {
              target.css('top', '0');
          }
      });

        
      });


//});


