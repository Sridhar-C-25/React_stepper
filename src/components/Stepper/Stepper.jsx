import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
const Stepper = () => {
  const steps = ["Customer Info", "Shipping Info", "Confirm Order", "Payment"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between flex-col sm:p-10 md:flex-row ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
        className="btn"
        onClick={() => {
          if (currentStep === steps.length) {
            setCurrentStep(1);
            setComplete(false); // Optionally reset completion state
          } else {
            setCurrentStep((prev) => prev + 1);
          }
        }}
      >
        {currentStep === steps.length ? "Order again" : "Next"}
      </button>
      
      )}
    </>
  );
};

export default Stepper;
