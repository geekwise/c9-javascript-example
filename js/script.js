var h1;
var colors = [
    
    'red',
    'blue',
    'gold',
    'grey',
    'lightSeaGreen',
    'coral'
    
    ];

var createTag = function(){
    
        h1 = document.createElement('h1');
        h1.textContent = 'my h1 tag';
        document.body.appendChild(h1);
}

var randomPixel = function(){
    
    var number = Math.round(
            
            Math.random()*500
           
        )+1;
        
    return number + 'px';    
}

var randomColor = function(){
    
    var randomNumber = Math.round(
        
            Math.random() * colors.length
        
        ) - 1;
    
    return colors[randomNumber];
    
};

document.addEventListener('DOMContentLoaded',function(event){
    
    createTag();
    
    h1.addEventListener('mouseover',function(event){
       
       this.style.backgroundColor = randomColor();
       this.style.transition = '1s';
       this.style.height = randomPixel();
       
            
    });
    
    
});