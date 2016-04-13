var github_emojis;

var http_request = new XMLHttpRequest;
http_request.open('GET','https://api.github.com/emojis',false);

http_request.onreadystatechange = function(event){	
	if(this.readyState === this.DONE && this.status === 200){
	
		 github_emojis = JSON.parse(this.response);
		
	}
};

var get_random_emoji = function(){
    
    var total_number_of_emojis = Object.keys(github_emojis).length;
    var random_number = Math.round(Math.random()*total_number_of_emojis);
    
    var emoji_name = Object.keys(github_emojis)[random_number];
    emoji_name = emoji_name.toString();
    
    var emoji_url = github_emojis[emoji_name];
    return emoji_url;
}




var get_emoji_urls = function(amount_to_get){
    
        var total_number_of_emojis = Object.keys(github_emojis).length;
        for(var i=0; i < amount_to_get; i++){
            
            var emoji_name = Object.keys(github_emojis)[i];
            var emoji_url = github_emojis[emoji_name];
            
            emoji_name = emoji_name.toString();
            
         
            var image = document.createElement('img');
            image.addEventListener('click',function(event){
                
               this.setAttribute('src',get_random_emoji()); 
                
            });
            
            
            
            var image_name = document.createElement('span');
            image_name.textContent = emoji_name;
            
            
            
            
            
            
            image.setAttribute('src',emoji_url);

            document.body.appendChild(image);

        }
        
        
}




document.addEventListener('DOMContentLoaded',function(event){
    
   
    http_request.send(null);
    get_emoji_urls(10);
    
    
});

