import { useEffect, useState } from "react";

function Clock() {
    const todayDate = new Date();
    



    const [time, setTime] = useState(todayDate.toLocaleTimeString('pt-PT'));

    useEffect( () => {
        const tick = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('pt-PT'));
        },1000)

        return () => clearInterval(tick);
    })


    return time;
}

export default Clock;