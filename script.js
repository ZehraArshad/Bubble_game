//making global variables
var Timer = 60; 
var hit;
var score =0;


// making functions
function make_Bubbles(){
var clutter = "";

for(var i =1; i<=90; i++){
    var num_in_bubble= Math.floor(Math.random()*10) //*10 because it might
    // be a 0.9 or 0.03
    clutter += `<div class="bubble">${num_in_bubble}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;

}

function make_Timer(){
    var time_int =setInterval(function(){
        if(Timer>0){
        Timer--;
        document.querySelector("#Timer").innerHTML= Timer;
        }
        else{
            clearInterval(time_int);
            document.querySelector("#pbtm").innerHTML="";
        }
        
    },1000);
    
}
function generate_HIT(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML= hit;
}

function increase_Score(){
    score +=10;
    document.querySelector("#score").textContent=score;
}


document.querySelector("#pbtm").addEventListener('click',function(det_bubbles){
    var clicked_bubble=Number(det_bubbles.target.textContent);
    if(clicked_bubble==hit){
        increase_Score();
        generate_HIT();
        make_Bubbles();
        console.log(score);
    }

});

make_Bubbles();
make_Timer();
generate_HIT();
