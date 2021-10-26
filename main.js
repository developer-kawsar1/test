

var len= document.querySelectorAll('.box').length;
for(var i=0; i<len; i++){
 document.querySelectorAll(".box")[i].addEventListener('click',function(){
    const my=this.innerHTML;    
    const color=this.style.color="black"
    
    setTimeout(() => {
            this.innerHTML=my;
             this.style.color=color;
        
            
            
        }, 1000);
        this.innerHTML="কপি হয়েছে";
        this.style.color="red"
        

    })

}