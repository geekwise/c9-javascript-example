var attach_css = function(css_file_location){
    
    var css_link_element = document.createElement('link');
    css_link_element.setAttribute('type','text/css');
    css_link_element.setAttribute('rel','stylesheet');
    css_link_element.setAttribute('href',css_file_location);
    
    document.head.appendChild(css_link_element);
    
}

var close_menu_timeout = function(){
 
    window.setTimeout(close_menu(ul_id),1000);
    
}


var close_menu = function(element_id){
    element_id.className = 'off';
}



var toggle_class = function(element_id,off_state,on_state){
    element_id.classList.toggle(off_state);
    element_id.classList.toggle(on_state);
}



var create_element = function(element_parent,element_name,element_id,text_content){
    
    var element = document.createElement(element_name);
    element.setAttribute('id',element_id);
    element.textContent = text_content
    
    if(element_parent == 'body'){
        document.body.appendChild(element);
    }else{
        element_parent.appendChild(element);
    }
    
    
}

document.addEventListener('DOMContentLoaded',function(event){

        attach_css('css/main.css');
    
        create_element('body','ul','ul_id','NAV');
        
        ul_id.className = 'off';
        
        ul_id.addEventListener('click',function(event){
           
              toggle_class(this,'off','on');  
            
        });
        
        ul_id.addEventListener('mouseover',function(event){
            
            this.className = 'on';
            
        })
        
        
        
        
        //for loop setup for number counting from 1 to 100
        for(var i=0; i<10; i++){
           
           var list_element = document.createElement('li');
           list_element.setAttribute('id','list_id_'+i);
           list_element.textContent = 'item #'+i;
           ul_id.appendChild(list_element);
           
           list_element.addEventListener('mouseover',function(event){
               console.log(this);
               
                window.clearTimeout(close_menu_timeout());    
                
               
               
           });
           
           
           list_element.addEventListener('mouseout',function(event){
               
                close_menu_timeout();
               
           });
           
           
           
           
        };

        
        
        
    
});


