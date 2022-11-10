import React from 'react'
import { useState, useEffect } from 'react';

<h1>Clock</h1>

const Clock = () => {
    const [date, setDate] = useState(new Date());

   
    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
          clearInterval(timerID);
        };
      });
      function tick() {
        setDate(new Date());
      }
  return (
    <div><h1>Clock</h1>c{date.toLocaleTimeString()}</div>
  )
};

export default Clock
