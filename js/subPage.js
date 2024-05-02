$(function(){
    $('.filter_nav>form').hide();
    $('#filters').on('click',function(){
        $('.filter_nav>form').slideToggle();
        $('.select_link_op').hide();
    });
   $('.select_link').click(function(){
        $('.select_link_op').toggle();
        $('.tfrm_op').hide();
   });
   $('#chooseColor').click(function(){
        $('.color_palette').toggle();
        $('.select_link_op').hide();
   });
   $('.tfrm').click(function(){
        $('.tfrm_op').toggle();
        $('.select_link_op').hide();
   });
//    $('.select_link_op>li').click(function(){
//         $('.select_link').text(function(index){
//             return $('.select_link_op>li').eq(index);
//         });
//    });
   $('.option_box>li').click(function(){
        $('.option_box>li').removeClass('activeOn');
        $(this).addClass('activeOn');
   });
   $('.content_nav>li').click(function(){
        $('.content_nav>li').removeClass('activeOn')
        $(this).addClass('activeOn');
        $('.tfrm_op').hide();
        $('.select_link_op').hide();
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
//출처:https://ctrlcccv.github.io/code/2023-07-28-scroll-fixed/
//    let fixedTop=$('#toTop');
//    let ft=$('footer');
//    let body=$('body');
//    let topMargin=100;
//    if(!fixedTop.length) return;
//    let initialTop=fixedTop.offset().top;
//    let scrollTop=$(window).scrollTop();
//    let ftheight=ft.outerHeight(true);
//    let bodyheight=body.outerHeight(true);
//    let availableHeight=bodyheight-ftheight-fixedTop.outerHeight(true)-initialTop-topMargin;
//    if(scrollTop>initialTop-topMargin){
//         if(availableHeight+initialTop-topMargin>scrollTop){
//             fixedTop.css({
//                 'position':'fixed',
//                 'top':topMargin +'px'
//             });
//         }else{
//             fixedTop.css({
//                 'position':'absolute',
//                 'top':availableHeight +'px'
//             });
//         }
        
//    }
/*    if(window.offsetTop>500){
        $('#toTop').css({
            'position':'fixed'
        });
   }else{
        $('#toTop').css({
            'position':'absolute'
        });
   } */
//    if(window.scrollY>1900){
//         $('.toTop').removeClass('toTop_absolute');
//         $('.toTop').addClass('toTop_fixed');
//    }else{
//         $('.toTop').removeClass('toTop_fixed');
//         $('.toTop').addClass('toTop_absolute');
//    }
    //출처:https://blog.naver.com/eunjin10914/220864556082
    // $(window).scroll(function(){
    //     var scrollheight= $(document).scrollTop(); //실시간으로 스크롤높이 추적
    //     if(scrollheight > 0){
    //         $('.toTop').removeClass('toTop_absolute');
    //         $('.toTop').addClass('toTop_fixed');
    //     }else if(scrollheight == 0){
    //         $('.toTop').removeClass('toTop_fixed');
    //     }
    // });
   
   $('.toTop').click(function(){
        $('body,html').animate({
            scrollTop:0
        },600);
    });
    
});