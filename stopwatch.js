let startBtnEl=document.getElementById("startBtn");
let stopBtnEl=document.getElementById("stopBtn");
let minutesEl=document.getElementById("minutes");
let secondsEl=document.getElementById("seconds");
let millisecondsEl=document.getElementById("milliseconds");
let hoursEl=document.getElementById("hours");
let resetBtnEl=document.getElementById("resetBtn");
let addBtnEl=document.getElementById("addBtn");
let subBtnEl=document.getElementById("subBtn");
let timeCounterEl=document.getElementById("timeCounter");
let resultDisplayEl=document.getElementById("resultDisplay");
let pausemilli=0;
let pausesec=0;
let pausemin=59;
let pausehour=23;


startBtnEl.onclick=function(){
    
    let count=pausemilli;
    let seconds=pausesec;
    let minutes=pausemin;
    let hours=pausehour;
    if(pausemin<10){
            minutesEl.textContent="0"+pausemin;
    }
    else{
        minutesEl.textContent=pausemin;
    }
    if(pausehour<10){
        hoursEl.textContent="0"+pausehour;
    }
    else{
        hoursEl.textContent=pausehour;
    }


    let uniqueId=setInterval(()=>{
        if(count<100){
            millisecondsEl.textContent="0"+count;
        }
      
        else if(count<1000){
            millisecondsEl.textContent=count;
        }
        else{
            count=0;
            seconds+=1;
            if(seconds<10){
            secondsEl.textContent="0"+seconds;
             }
             else if(seconds<60){
            secondsEl.textContent=seconds;
            }
            else{
                seconds=0;
                minutes+=1;
                if(minutes<10){
                    minutesEl.textContent="0"+minutes;
                     }
                     else if(minutes<60){
                    minutesEl.textContent=minutes;
                    }
                    else{
                        minutesEl.textContent="00";
                        minutes=0;
                        hours+=1;
                        if(hours<10){
                            hoursEl.textContent="0"+hours;
                        }
                        else if(hours<24){
                            hoursEl.textContent=hours;
                        }
                        else{
                            resultDisplayEl.textContent="YOUR DAY IS COMPLETED...!";
                            timeCounterEl.classList.add("hide");    
                        }
                    }

            }



        }
        count+=100;
    },100);
  resetBtnEl.onclick=function(){
    clearInterval(uniqueId); 
    millisecondsEl.textContent="000";
    secondsEl.textContent="00";
    minutesEl.textContent="00";
    hoursEl.textContent="00";
    pauseCount=0;
    pausesec=0;
    pausemin=0;
    pausehour=0;
    resultDisplayEl.textContent="";
    timeCounterEl.classList.remove("hide"); 
   } ;

   stopBtnEl.onclick=function(){
    clearInterval(uniqueId); 
    pausemilli=count;
    pausesec=seconds;
    pausemin=minutes;
    pausehour=hours;
   
   } ;
   addBtnEl.onclick=function(){
    if(seconds<50){
        secondsEl.textContent=parseInt(secondsEl.textContent)+10;
        seconds+=10;
        pausesec=seconds;
    }
    else{
        if(minutes<10){
            minutesEl.textContent= parseInt(minutesEl.textContent)+1;
            secondsEl.textContent="00";
            minutesEl.textContent="0"+minutesEl.textContent;
            seconds=0;
            pausesec=seconds;
            minutes+=1;
            pausemin=minutes;
        }
        else if(minutes<59){
            minutesEl.textContent=parseInt(minutesEl.textContent)+1;
            secondsEl.textContent="00";
            seconds=0;
            pausesec=seconds;
            minutes+=1;
            pausemin=minutes;
        }
        else{
            minutesEl.textContent="00";
            secondsEl.textContent="00";
            seconds=0;
            pausesec=seconds;
            minutes=0;
            pausemin=minutes;
            if(hours<10){
                hoursEl.textContent= parseInt(hoursEl.textContent)+1;
                hoursEl.textContent="0"+hoursEl.textContent;

                hours+=1;
                pausehour=hours;
            }
            else if(hours<23){
                hoursEl.textContent=parseInt(hoursEl.textContent)+1;
                hours+=1;
                pausehour=hours;
            }
            else{
                hours+=1;
                pausehour=hours;
                resultDisplayEl.textContent="YOUR DAY IS COMPLETED...!";
                timeCounterEl.classList.add("hide");    
            }

        }
    }
        


   };
   subBtnEl.onclick=function(){
    if(seconds>10){
        secondsEl.textContent=parseInt(secondsEl.textContent)-10;
        seconds-=10;
        pausesec=seconds;
    }
    else{
        secondsEl.textContent="00";
        seconds=0;
        pausesec=seconds;
    }
        

   };

};

let timer = document.getElementById("mnk")
timer.style.color="red";
console.log(timer.textContent)
setInterval(()=>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let sec = date.getSeconds();
    if(sec<10){
        sec="0"+sec;
    }
    if(minutes<10){
            minutes="0" + minutes;
    }
    if(hours<10){
        hours="0"+hours;
    }
    let formattedDate= `${hours}:${minutes}:${sec}`
    console.log(date);
    timer.textContent = formattedDate;
},1000);
