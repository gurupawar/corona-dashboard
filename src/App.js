import React from "react";
import { Cards, StatePicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Navbar from "./Components/Navbar/Navbar";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    // console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    console.log(fetchedData);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <StatePicker handleCountryChange={this.handleCountryChange} />
          <Cards data={data} country={country} />
        </div>
      </>
    );
  }
}

export default App;
