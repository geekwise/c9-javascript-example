var ul_element;
var li_element;
var body_element = document.body;
var mouseover_status;
var timeout;

var set_class_name = function(element_name,class_name){
    element_name.className = class_name;
}


var attach_css = function(css_file_location){
  
  css_link_element = document.createElement('link');
  css_link_element.setAttribute('type','text/css');
  css_link_element.setAttribute('rel','stylesheet');
  css_link_element.setAttribute('href',css_file_location);
  
  document.head.appendChild(css_link_element);
    
};

var toggle_class = function(element,class_on_state,class_off_state){
    element.classList.toggle(class_on_state);
    element.classList.toggle(class_off_state);
}


var create_element = function(element_name){
    return document.createElement(element_name);
};

var attach_element = function(element_child){
    this.appendChild(element_child);
}


document.addEventListener('DOMContentLoaded',function(event){
    
    
    attach_css('css/main.css');
    
    
    ul_element = create_element('ul');
    ul_element.textContent = 'ul';
    ul_element.className = 'off';
    
    ul_element.addEventListener('click',function(){
        
        toggle_class(this,'off','on');
        
        
    });
    
    ul_element.addEventListener('mouseover',function(event){
        this.className = 'on';
    })

    


    
    
    document.body.appendChild(ul_element);
    
    for(var i=0; i < 10; i++){
        
        var li = create_element('li');
       
        li.textContent = i;
        li.addEventListener('mouseout',function(event){
                
           timeout = window.setTimeout(set_class_name(ul_element,'off'),2500);

        });
 
 
        li.addEventListener('mouseover',function(event){
                window.clearTimeout(timeout);
                set_class_name(ul_element,'on');
        })
        
        
        ul_element.appendChild(li);

    }
    
    
   
    
});