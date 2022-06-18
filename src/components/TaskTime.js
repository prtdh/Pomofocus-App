import React, { useEffect, useState } from 'react'
import './TaskTime.css'
import audio from './Rooster.mp3';
import {Howl,Howler} from 'howler';
const sound=new Howl({
src:['./Rooster.mp3']
})
sound.play();
const TaskTime = () => {
    //starting 25 timer 1st time on loading the
    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(25);

    

    useEffect(()=>{
        const timercount=setInterval(()=>{
            setSeconds((seconds)=>{
                const remainingSeconds=seconds-1;
                return remainingSeconds;
            });
            if (seconds===0) {
                setMinutes((minutes)=>{
                    const remainingMinutes=minutes-1;
                    return remainingMinutes;
                });
                setSeconds(59);
            }
            
           console.log(timercount);
        },1000)

         if(seconds==0 && minutes==0){
            
        clearInterval(timercount);
    }

   
        return ()=>clearInterval(timercount);
    })

    //pomofocus function
    const pomofocus=()=>{
          if(window.confirm("you sure you wanna go this way?")==true && seconds!=0 && minutes!=0){
            setSeconds(0)
            setMinutes(25);
        }
        }
     //short break   
    const shortbreak=()=>{
if(window.confirm("you sure you wanna go this way?")==true && seconds!=0 && minutes!=0){
            setSeconds(0)
            setMinutes(5);
        }        }
    //long break
    const longbreak=()=>{
       if(window.confirm("you sure you wanna go this way?")==true && seconds!=0 && minutes!=0){
            setSeconds(0)
            setMinutes(15);
        }
      
        }

    const restart=()=>{
        setMinutes(0);
        setSeconds(0);
    }

   
    
   
    return (
    <>
    <div className="contain">

        <div className="pomotime">
             <div className="timers">
                 <button className='pomofocus' onClick={pomofocus}>PomoFocus</button>
                 <button className='shortbreak' onClick={shortbreak}>Short Break</button>
                 <button className='longtime' onClick={longbreak}>Long Break</button>
             </div>
            <h1 className='clock'>{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
                        <button className='start'>Start</button>
                        <button className='start'>Restart</button>

        </div>
    </div>

    
    </>
  )
}

export default TaskTime