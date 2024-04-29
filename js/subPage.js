$(function(){
    let heightToggle=false;
    $('#filters').click(function(){
        heightToggle=!heightToggle;
        if(heightToggle){
            $('.filter_nav>form').css('height','84px').css('transition','0.5s');
        }else{
            $('.filter_nav>form').css('height','0px');
        }
   });

   $('.select_link').click(function(){
        $('.select_link_op').toggle();
   });
   //아래쪽은 나중에 손대는 걸로
   $('.tfrm').click(function(){
        $('.tfrm_op').toggle();
   });
});