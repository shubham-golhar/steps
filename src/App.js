import { useState } from "react";
import Assignment1 from "./components/Assignment1";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 3;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1); if there is changes which is based on the current state in that case we use the callback function to update the state and vice versa
    }
  };
  return (
    <>
      <button className="close" onClick={(is) => setIsOpen(!is)}>
        close
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            Step {step} :{messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              // disabled={step > 1 ? true : false}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
              // disabled={step === 3 ? true : false}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* <Assignment1 /> */}
    </>
  );
}

export default App;
