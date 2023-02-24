import './stepper.css';
import { useState } from 'react';
import { TiTick } from "react-icons/ti";

const Stepper = () => {

  const steps = ["Customer Info", "Shipping Info", "Payment"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="flex justify-between">
          {
            steps?.map(( step, index ) => (
              <div key = {index} className={`step-item ${currentStep === index + 1 && "active"} ${(complete || index + 1 < currentStep) && "complete"}`}>
                <div className="step">
                  { (index + 1 < currentStep || complete) ? <TiTick size={24}/> : index + 1}
                </div>
                <p className="text-gray-500">{step}</p>
              </div>
            ))
          }   
      </div>
      <button className={`btn ${complete && "complete"}`} onClick={() => {
        if(currentStep === steps.length ) setComplete(true);
        else setCurrentStep( previous => previous + 1);
      }}>{
        complete ? "Finish" : "Next"
      }</button>
    </>
    );

};

export default Stepper;