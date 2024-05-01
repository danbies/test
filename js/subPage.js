$(function(){
    $('.filter_nav>form').hide();
    $('#filters').on('click',function(){
        $('.filter_nav>form').slideToggle();
    });
    $()
   $('.select_link').click(function(){
        $('.select_link_op').toggle();
   });
   $('#chooseColor').click(function(){
        $('.color_palette').toggle();
   });
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
        },600);
    });
});