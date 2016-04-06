var photo_container;






var add_images = function(){
    
    for(var i=0; i < image_urls.length; i++){
      
        var image = document.createElement('img');
        image.setAttribute('src',image_urls[i]);
        image.setAttribute('id','image_'+i);
        
        image.style.width = 'calc(100%/' + image_urls.length + ')';
        image.addEventListener('mouseover',function(event){
           
            
                this.style.opacity = Math.random();
                
                this.style.transition = '.4s';
                if(this.style.opacity < 0.5){
                    
                        this.style.opacity = '0.5';
                        
                }
            
            
        });
        
        
        document.body.appendChild(image);
        
    };
    

};


document.addEventListener('DOMContentLoaded',function(event){
    

        add_images();
        
});
    
 


