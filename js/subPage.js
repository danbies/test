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
   //포지션 fixed를 적용해야 가능
   //하지만 나는 컨텐츠 영역안에서만 움직이고 싶단 말이지
//    $('#con2').scroll(function(){
//         if($(this).scrollTop()>100){
//             $('#toTop').fadeIn();
//         }else{
//             $('#toTop').fadeOut();
//         }
//    });
   $('#toTop').click(function(){
        $('body,html').animate({
            scrollTop:0
        },600)
    });
});