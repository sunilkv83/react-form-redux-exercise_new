import React, {useState, useEffect,useRef} from 'react';

const Timer = (props) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [stop, setStop] = useState(false);

  let timerRef = useRef();
  
  useEffect(() => {
    setStop(false);
    timerRef.current = setTimeout(() => {
      const date = new Date()
      setTime(date.toLocaleTimeString());
    }, 1000);

    return () => {
      clearTimeout(timerRef.current);
    }
  }, [time]);

  const handleClick = () => {
    if (!stop) {
      clearTimeout(timerRef.current);
    } else {
      timerRef.current = setTimeout(() => {
        const date = new Date()
        setTime(date.toLocaleTimeString());
      }, 1000);
    }
    setStop((prev) => !prev);
  };

  return (
    <div>
      <div>
      {time}
      &nbsp;&nbsp;
      <button onClick={handleClick}>{stop ? "Start" : "Stop"}</button>

      </div>
    </div>
  )
}

export default Timer;