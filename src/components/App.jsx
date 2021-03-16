import React from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [time, setTime] = React.useState(now);
  setInterval(updateTime, 1000);

  function updateTime(){
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime)
  }

  return (
    <div className="container">
      <h1 style={{fontSize:"20px"}}>{time}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
