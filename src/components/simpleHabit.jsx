import React, { useCallback, useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);
    const spanRef = useRef();

    const handleIncrement = useCallback(() => {
      setCount(count + 1);
    });
    //count setCount를 리턴해줌 useState는 

    useEffect(() =>{
      console.log(`mounted & updated! : ${count}`)
    }, [count])
    // count값이 변경될때만 useEffect 이 호출됨
    return (
        <li className="habit">
          <span ref={spanRef} className="habit-name">Reading</span>
          <span className="habit-count">{count}</span>
          <button
            className="habit-button habit-increase"
            onClick={handleIncrement}
          >
            <i className="fas fa-plus-square"></i>
          </button>
        </li>
      );
}

export default SimpleHabit;