$(function(){

    //Menu mobile

    $('.menu-mobile').click(function(){
        $('.nav-mobile').slideToggle();
    });

    //Fechando menu mobile ao redimensionar

    $(window).resize(function(){ 
        $('.nav-mobile').css('display', 'none');
    });


    //Scroll Suave

    $('nav a').click(function(){

        $('.nav-mobile').css('display', 'none'); //Fechando display mobile, se tiver aberto

        var href = $(this).attr('href');
        var offsettop = $(href).offset().top;

        $('html,body').animate({'scrollTop': offsettop});
    });
    


});



