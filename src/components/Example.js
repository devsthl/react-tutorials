import React, { useState } from 'react'


function Example() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <button
                onClick={() => setcount(count + 1)}
            >Click to count</button>
            <p>Resuls is: {count}</p>
        </div>
    )
}
export default Example;