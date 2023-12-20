$(function(){
    var fadeInoutSlider=0;
    setInterval(function(){
        if(fadeInoutSlider<2){
            fadeInoutSlider++;
        }else{
            fadeInoutSlider=0;
        }
        $(".slide").eq(fadeInoutSlider).siblings().fadeOut();
        $(".slide").eq(fadeInoutSlider).fadeIn();
    },3000);
})
