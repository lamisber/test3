import React, { useState } from 'react';

const Count = () => {
    const [i, setI] = useState(0);
    function handleClick() {
        setI(i + 1);
    
        if (i === 5) {
            alert("Count reached 5!");
        }
        else if (i > 10) {
            alert("Count above 10!");
        }
    }
return (
    <div>
        <p>Count: {i}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
);
}
export default Count;
