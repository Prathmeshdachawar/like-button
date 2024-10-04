var cont= document.querySelector("#container")
var btn= document.querySelector("#container i")

cont.addEventListener("dblclick",function(){
           btn.style.transform= "translate(-50%,-50%) scale(1)";
           btn.style.opacity=0.8

           setTimeout(function(){
            btn.style.transform= "translate(-50%,-50%) scale(0)";
           },3000)
           
           setTimeout(function(){
            btn.style.opacity=0;
           },1000)
           
        
})
