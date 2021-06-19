import React, { useState, useEffect } from "react";
import styles from "./StatePicker.module.css";
import { apiCountry } from "../../api";

const StatePicker = ({ handleCountryChange }) => {
  const [fetchedStates, setFetchedStates] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedStates(await apiCountry());
    };
    fetchApi();
  }, [setFetchedStates]);

  return (
    <div>
      <select
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option className={styles.select}>Global</option>
        {fetchedStates.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatePicker;
