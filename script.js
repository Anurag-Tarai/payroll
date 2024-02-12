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
            img.src= "https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxhc2h8ZW58MHx8MHx8fDA%3D"
            i+=1
        }
        else if(i==2){
            img.src= "https://images.unsplash.com/photo-1482005253821-5d6a2c685879?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            i+=1
        }

     })
     bar2.addEventListener('mouseleave',()=>{
        console.log(i);
        bar2.style.backgroundColor = "#6600ff"
        h2.style.color ='white'
        if(i==1){
            img.src= "https://images.unsplash.com/photo-1574417836112-fda6a03dae97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsYXNofGVufDB8fDB8fHww"
            i+=1
        }
        else if(i==3){
            img.src= "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
            i=0;
        }
     })
}
hoverEffectChangeImg();