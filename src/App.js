import { useState, useEffect } from "react";
import "./styles.css";
import array from "./data";

export default function App() {
  const [showbackgrounds, setShowbackgrounds] = useState(false);
  const [bgToAnimate, setIndex] = useState(0);
  const [calc, setCalc] = useState(0);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (showbackgrounds) {
      setTimeout(() => {
        if (bgToAnimate < array.length - 1) {
          setIndex(bgToAnimate + 1);
          setCalc(bgToAnimate);
          // setTimeout(() => {
          setFirst(false);
          // }, 500);
        } else {
          setCalc(array.length - 1);
          setIndex(0);
        }
      }, 2500);
    } else {
      setFirst(true);
    }
  }, [bgToAnimate, showbackgrounds]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        onMouseEnter={() => {
          setShowbackgrounds(true);
        }}
        onMouseLeave={() => {
          setShowbackgrounds(false);
        }}
      >
        {/*      
     {!showbgs ? (<><h2>Start editing to see some magic happen!</h2>)</> :   } */}
        {!showbackgrounds ? (
          <img src={array[0].src} alt="banner" />
        ) : (
          <>
            <>
              <img
                style={{
                  // position: "fixed",
                  // zIndex: 1,
                  width: "150px",
                  height: "150px",
                  // top: 0,
                  left: "50px"
                }}
                // className="bgEntrance"
                src={array[calc].src}
                alt="banner"
              />
              <img
                style={{
                  // position: "fixed",
                  // zIndex: 2,
                  width: "150px",
                  height: "150px"
                  // top: 0
                }}
                id="demo"
                // className="bgEntrance"
                src={array[bgToAnimate].src}
                alt="banner"
              />
            </>
          </>
        )}
      </div>
    </div>
  );
}
// if first time and index === 0
// show only first img
// else  if index === 0 and not first time
// show the first and the last
// else
// show the index and the index - 1
