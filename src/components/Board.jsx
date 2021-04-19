import React, { useEffect, useState } from 'react';

import Inc from './increment'
import Dec from './decrement'



function Board(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
        document.title=`count:${count}`
    });

    return (
        <div>
            {count}
            <Inc onClick={()=>{setCount(count+1);}}/>
            <Dec onClick={()=>{setCount(count-1);}}/>
        </div>
    );
}

export default Board;