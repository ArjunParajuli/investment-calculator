import React from 'react'
import ResultHead from './ResultHead'
import ResultBody from './ResultBody'
import { calculateInvestmentResults } from "../util/investment";

const Results = ({inputData}) => {
  const resultsData = calculateInvestmentResults(inputData);

  return (
    <div>
        <table>
          <thead>
            <ResultHead />
          </thead>
          <tbody>
              {
                resultsData.map((eachData)=>(
                  <ResultBody eachData={eachData} key={eachData.year} resultsData={resultsData} />
                ))
              }
          </tbody>
        </table>
    </div>
  )
}

export default Results