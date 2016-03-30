var window_height;
var rgb_green_value;
var rgb_blue_value;
var landscape;

var check_mobile_layout = function(){
    
    if(window_height > window_width){
        
        landscape = false;
        alert(landscape);
    }
    else{
        landscape = true;
        alert(landscape);
    }
    
};




document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.style.backgroundColor = 'lightSeaGreen';


    window.addEventListener('onorientationchange',function(event){
        
        check_mobile_layout();
        
    })



    window.addEventListener('resize',function(event){
       
        window_height = window.innerHeight;
        window_width = window.innerWidth;    
            
        rgb_blue_value = Math.round( window_width * .17 ).toString();
        rgb_green_value = Math.round( window_height * .3 ).toString();
        
        console.log(rgb_green_value);
        
        document.body.style.backgroundColor = 'rgb(255,'+rgb_blue_value+','+
        rgb_green_value + ')';
      
         
        
    });

    
    console.log(event);
    
    
});