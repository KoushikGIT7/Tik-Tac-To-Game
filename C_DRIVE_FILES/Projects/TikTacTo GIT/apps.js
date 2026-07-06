let button=document.querySelectorAll(".bt");
let winmsg=document.querySelector("#winmsg");
let reset=document.querySelector("#rst");
let newgm=document.querySelector("#ngm");
let winsound=new Audio("preview-[AudioTrimmer.com] (1).mp3");//win match sound
let cs=new Audio("sound-1-167181.mp3");//click sound
let Ds=new Audio("wrong-answer-126515.mp3");//draw sound
let buttonO=true;
let isprin=false;
let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let click=0;
button.forEach((button)=>{
              button.addEventListener("click",()=>{
                cs.play();
                click++;
                     if(buttonO==true){
                        button.innerText="O";
                        buttonO=false;
                     }
                     else{
                          button.innerText="X";
                          buttonO=true;
                     }
                     button.disabled=true;
                    
                  Winner();
                  draw();
                
                
              })
    
           
})


let ngm=()=>{
    cs.play();
    click=0;
    isprin=false;
    for(btn of button){
        btn.disabled=false;
      btn.innerText="";

        winmsg.innerText="";
      }
  }

newgm.addEventListener("click",ngm);
reset.addEventListener("click",ngm);


function Winner(){
for(pattern of winpatterns){
   let posval1= button[pattern[0]].innerText;
    let posval2=button[pattern[1]].innerText;
    let posval3=button[pattern[2]].innerText;
    if(posval1!="" && posval2!=""&&posval3!=""){
                if(posval1==posval2 && posval2==posval3){
                    isprin=true;
                    winmsg.innerText=`Congrats Winner Is ${posval1}`;
                    ps();
                    
                    disable();
                }
 }
      }
}




function ps(){
  winsound.currentTime=0;
  winsound.play();
  winsound.volume=1.0;
}


function draw(){
if(click==9 && !isprin){
  Ds.play();
  winmsg.innerText="Draw Match";
    
}


}

function disable(){
    for(btn of button){
        btn.disabled=true;
 }
}



 