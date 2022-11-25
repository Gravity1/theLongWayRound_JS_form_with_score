import * as React from 'react';
import './style.css';

export default function App() {
  const [totalScore, setTotalScore] = React.useState(0);
  var counter = [];

  function updater() {
    setTotalScore(0);
    var radioValues = document.querySelectorAll('input[type=radio]');

    // for (const input of radioValues) {
    //   if (document.getElementById(input.id).checked) {
    //     var value = parseInt(input.value);
    //     counter.push(value);
    //   }
    // }
    // console.log(counter);
    // return;
    // setTotalScore((a) => a + value);

    radioValues.forEach((inputIndex) => {
      if (document.getElementById(inputIndex.id).checked) {
        var value = parseInt(inputIndex.value);
        setTotalScore((a) => a + value);

        console.log(inputIndex);
      }
    });
  }

  return (
    <div>
      <div className="totalScoreDiv">
        Total Score:
        <span>{totalScore}</span>
      </div>
      <form>
        <ol>
          <li>
            <p>How many countries is your company in? </p>
          </li>
          <div className="options">
            <ol>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="1"
                    value={2}
                    id="1.1"
                  ></input>
                  1 country
                </label>
              </li>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="1"
                    value={4}
                    id="1.2"
                  ></input>
                  5 countries
                </label>
              </li>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="1"
                    value={8}
                    id="1.3"
                  ></input>
                  7 countries
                </label>
              </li>
            </ol>
          </div>
          <li>
            <p>How many employees do you have?</p>
          </li>
          <div className="options">
            <ol>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="2"
                    value={2}
                    id="2.1"
                  ></input>
                  Just me
                </label>
              </li>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="2"
                    value={4}
                    id="2.2"
                  ></input>
                  Less than 5
                </label>
              </li>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="2"
                    value={8}
                    id="2.3"
                  ></input>
                  12-24
                </label>
              </li>
            </ol>
          </div>
          <li>
            <p>Do you have a data centre? </p>
          </li>
          <div className="options">
            <ol>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="3"
                    value={10}
                    id="3.1"
                  ></input>
                  Yes
                </label>
              </li>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="3"
                    value={0}
                    id="3.2"
                  ></input>
                  No
                </label>
              </li>
              <li>
                <label>
                  <input
                    // onClick={(e) => updater(e.target.value, { totalScore })}
                    onClick={() => updater()}
                    type="radio"
                    name="3"
                    value={3}
                    id="3.3"
                  ></input>
                  Not commissioned but complete
                </label>
              </li>
            </ol>
          </div>
        </ol>
      </form>
    </div>
  );
}
