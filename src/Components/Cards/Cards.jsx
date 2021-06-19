import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
// import Classes from "classname";

const Cards = ({
  data: { confirmed, lastUpdate, recovered, deaths },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <label className={styles.global_data}>{country}</label>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <h3>Infected</h3>
          <p className={styles.date}>{new Date(lastUpdate).toDateString()}</p>
          <CountUp
            className={styles.countUp}
            start={0}
            end={confirmed.value}
            duration={2}
            separator={","}
          />
        </div>
        <div className={styles.card}>
          <h3>Recovered</h3>
          <p className={styles.date}>{new Date(lastUpdate).toDateString()}</p>
          <CountUp
            className={styles.countUp}
            start={0}
            end={recovered.value}
            duration={2}
            separator={","}
          />
        </div>
        <div className={styles.card}>
          <h3>Deaths</h3>
          <p className={styles.date}>{new Date(lastUpdate).toDateString()}</p>
          <CountUp
            className={styles.countUp}
            start={0}
            end={deaths.value}
            duration={2}
            separator={","}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
