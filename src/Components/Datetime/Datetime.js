import React, { useState, useEffect } from "react";

function Datetime() {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      setClockState(
        date.toLocaleString("th-TH", {
          year: "numeric",
          month: "long",
          day: "numeric",
          weekday: "long",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
      );
    }, 1000);
  }, []);

  return <div style={{fontSize:"1rem"}}>{clockState}</div>;
}

export default Datetime;
