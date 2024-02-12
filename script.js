var bar2 = document.querySelector('#bar2')
var h2 = document.querySelector("#bar2 h2")
var img = document.querySelector("#img0")


// hover effect of Bar2 and Home with changing image in loop
function hoverEffectChangeImg(){
    var i =0
    bar2.addEventListener('mouseenter',()=>{
        console.log(i);
        bar2.style.backgroundColor = "white"
        h2.style.color =' #6600ff'
        if (i==0){
            img.src= "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            i+=1
        }
        else if(i==2){
            img.src= "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
            i+=1
        }

     })
     bar2.addEventListener('mouseleave',()=>{
        console.log(i);
        bar2.style.backgroundColor = "#6600ff"
        h2.style.color ='white'
        if(i==1){
            img.src= "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D"
            i+=1
        }
        else if(i==3){
            img.src= "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww"
            i=0;
        }
     })
}
hoverEffectChangeImg();