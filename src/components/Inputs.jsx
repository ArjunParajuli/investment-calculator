import React from 'react'

const Inputs = ({inputData, handleChange}) => {

  return (
    <div id="inputs">
        <div className="two-inputs">
            <div className="each-input">
                <label>Initial Investments</label>
                <input type="text" value={inputData.initialInvestment} onChange={(event)=>{
                    handleChange('initialInvestment', event.target.value)
                }} />
            </div>
            <div className="each-input">
                <label>Annual Investments</label>
                <input type="text" value={inputData.annualInvestment} onChange={(event)=>{
                    handleChange('annualInvestment', event.target.value)
                }} />
            </div>
        </div>

        <div className="two-inputs">
            <div className="each-input">
                <label>Expected Returns</label>
                <input type="text" value={inputData.expectedReturn} onChange={(event)=>{
                    handleChange('expectedReturn', event.target.value)
                }}  />
            </div>
            <div className="each-input">
                <label>Duration</label>
                <input type="text" value={inputData.duration} onChange={(event)=>{
                    handleChange('duration', event.target.value)
                }} />
            </div>
        </div>
    </div>
  )
}

export default Inputs