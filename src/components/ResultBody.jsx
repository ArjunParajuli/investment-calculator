import React from "react";
import { formatter } from "../util/investment";

const ResultBody = ({ eachData, resultsData }) => {
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  const totalInterest =
  eachData.valueEndOfYear -
  eachData.annualInvestment * eachData.year -
    initialInvestment;
  const totalAmountInvested = eachData.valueEndOfYear - totalInterest;

  return (
    <tr className="table-row">
      <td>{eachData.year}</td>
      <td>{formatter.format(eachData.valueEndOfYear)}</td>
      <td>{formatter.format(eachData.interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  );
};

export default ResultBody;
