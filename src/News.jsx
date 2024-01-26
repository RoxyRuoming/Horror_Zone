import React from 'react';
import Accordion from './components/Accordion';
import gas from './images/gas.png';
import tunnel from './images/tunnel.png';
import './css/News.css';

function News() {
  const panels = [
    {
      title: "Gas station - 04/19/2023",
      content: {
        image: gas,
        text: "At a gas station on a deserted road, a woman stopped to refuel her car. As she waited for the tank to fill up, she noticed a strange man staring at her. Feeling uneasy, she quickly paid and left. Later that night, while driving down the same road, she realized she was low on gas again and pulled into another gas station. To her horror, the same man was there, waiting for her. She quickly locked her car doors and sped away, but not before catching a glimpse of the man's license plate. When she reported the incident to the police, they informed her that the license plate belonged to a man who had died years ago."
      }
    },
    {
      title: "Scary tunnel - 04/20/2023 ",
      content: {
        image: tunnel,
        text: "A family driving through a forest at night approached a tunnel. As they entered the tunnel, they noticed a child standing in the middle of the road. The driver slammed on the brakes and swerved to avoid hitting the child, but when they looked back, the child had vanished. They quickly drove out of the tunnel, but as they did, they saw the child standing at the other end of the tunnel, staring at them with glowing eyes. They never drove through that tunnel again."
      }
    }
  ];

  return (
    <div className="news">
      <h2><strong> Horrible news in real life </strong></h2>
      <Accordion panels={panels} />
    </div>
  );
}

export default News;
