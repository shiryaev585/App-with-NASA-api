import { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getApod } from "./actions/index";

function App(props) {
  const [date, setDate] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <div className="header__wrapper">
            <h1>Astronomy Picture of the Day</h1>
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={() => props.getApod(date)}>get picture</button>
          </div>
        </header>

        {props.loading && <div>loading...</div>}
        {props.apod && (
          <div className="nasaPictureWrapper">
            <img src={props.apod.url} />
            <p className="desc">{props.apod.explanation}</p>
          </div>
        )}
        {props.error !== "" && <p>{props.error}</p>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    apod: state.apod,
    error: state.error,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { getApod })(App);
