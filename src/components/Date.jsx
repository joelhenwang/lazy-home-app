import { useEffect, useState } from "react";

function Today() {

    const [date, setDate] = useState("")

    useEffect(() => {
        const todayDate = new Date();
        const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        setDate(todayDate.toLocaleDateString('pt-PT',options));
    },[])

    return date;
}

export default Today;