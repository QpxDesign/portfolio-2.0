import React, { useState, useEffect } from "react";

interface CycleProps {
    values: string[];
    interval: number;
    prefix: string;
    suffix: string;
    textcolor: string;
}

export default function Cycle(props: CycleProps) {
  const [value, setValue] = useState(0);
  const [opacity, setOpacity] = useState(0);
  if (value < props.values.length) {
    setTimeout(() => {
      setValue(value + 1);
    }, props.interval);
  } else {
    setValue(0);
  }
  useEffect(() => {
    setOpacity(0);
  }, [value]);
  //count up opacity until it reaches 1 every 10ms
  useEffect(() => {
    setTimeout(() => {
      if (opacity < 1 && opacity + 0.01 < 1) {
        // fade in
        setOpacity(opacity + 0.01);
      }
    }, 10);
  }, [value, opacity]);
  return (
    <div>
      <h1
        style={{ padding: 0, margin: 0, opacity: opacity, color: props.textcolor}}
        className="cycle-text"
      >
        {props.prefix}
        {props.values[value]}
        {props.suffix}
      </h1>
    </div>
  );
}