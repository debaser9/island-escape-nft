import React, { useEffect, useState } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ dropDate }) => {

    useEffect(() => {
        console.log("Setting interval...");
        //setInterval is used to run this every second
        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const distance = dropDate - currentDate;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            setTimerString(`${days} days; ${hours} hours; ${minutes} minutes; ${seconds} seconds`);
    
            if (distance <= 0) {
                console.log("Clearing interval...");
                clearInterval(interval);
            }
        }, 1000);
    
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, []);
    
    const [timerString, setTimerString] = useState("");    
    
    return (
        <div className="timer-container">
            <p className="timer-header">NFT minting available in:</p>
            {timerString && <p className="timer-value">{`⏰ ${timerString}`}</p>}
        </div>
    );
    

};



export default CountdownTimer;