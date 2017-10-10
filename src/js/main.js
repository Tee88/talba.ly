$(document).ready(function(){
    
    $('body').waypoint(function(direction){
        $('.logo').addClass('animated fadeIn');
        $('.soon').addClass('animated fadeIn');
    },{
        offset: '70%'
    });

    //different offsets for different brakepoints
    if(window.matchMedia('(max-width: 991px)').matches){
        $('.iphone-img').waypoint(function(direction){
            $('.iphone-img').addClass('animated fadeInLeft');
            $('.info').addClass('animated fadeIn');
            $('.iphone-screen').addClass('animated fadeIn');
        },{
            offset:'50%'
        });

        }else{
    
        $('.iphone-img').waypoint(function(direction){
            $('.iphone-img').addClass('animated fadeInLeft');
            $('.info').addClass('animated fadeIn');
            $('.iphone-screen').addClass('animated fadeIn');
        },{
            offset:'70%'
        });
    }
    


});