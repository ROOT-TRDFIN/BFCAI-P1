import React from 'react'
import steps from "../processdata"
const process = () => {
  return (
    <div>
        <section className="process-container">
            <h2 className="title">Process We Follow</h2>
            <div className="process-steps">
                {steps.map((step) => (
                <div key={step.id} className="process-step">
                    <div
                    className="process-circle"
                    style={{ borderColor: step.color }}
                    >
                    <span className="process-icon" style={{ color: step.color }}>
                        {step.icon}
                    </span>
                    <span className="process-number">{step.id}</span>
                    </div>
                    <p className="process-text">{step.title}</p>
                </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default process
