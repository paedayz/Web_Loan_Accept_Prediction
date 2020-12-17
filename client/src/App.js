import "./App.css";
import axios from 'axios'
import React , { useState } from 'react'
import styled from 'styled-components'

let axiosDefaults = require("axios/lib/defaults");
axiosDefaults.baseURL = "http://127.0.0.1:5000/";

// styled component
const ErrorsText = styled.div`
  color : red;
`

function App() {
  const [fname, setFName] = useState(null)
  const [lname, setLName] = useState(null)
  const [Gender, setGender] = useState(null)
  const [Married, setMarried] = useState(null)
  const [Dependents, setDependents] = useState(null)
  const [Education, setEducation] = useState(null)
  const [Self_Employed, setSelf_Employed] = useState(null)
  const [ApplicantIncome, setApplicantIncome] = useState(null)
  const [CoapplicantIncome, setCoapplicantIncome] = useState(null)
  const [LoanAmount, setLoanAmount] = useState(null)
  const [Loan_Amount_Term, setLoan_Amount_Term] = useState(null)
  const [Credit_History, setCredit_History] = useState(null)
  const [Property_Area, setProperty_Area] = useState(null)
  const [Loan_Status, setLoan_Status] = useState(null)
  const [errors, setErrors] = useState(null)
  const [sendStatus, setSendStatus] = useState(false)

  let data = {
    Gender : Gender,
    Married : Married,
    Dependents : Dependents,
    Education : Education,
    Self_Employed : Self_Employed,
    ApplicantIncome : ApplicantIncome,
    CoapplicantIncome : CoapplicantIncome,
    LoanAmount : LoanAmount,
    Loan_Amount_Term : Loan_Amount_Term,
    Credit_History : Credit_History,
    Property_Area : Property_Area
  }

  const handleValidation = () => {
    if(!Gender || !Married || !Dependents || !Education || !Self_Employed || 
       !ApplicantIncome || !CoapplicantIncome || !LoanAmount || !Loan_Amount_Term ||
       !Credit_History || !Property_Area) {
         setErrors("Some Data Is Missing !")
         return false
       }
    return true
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    if(handleValidation())
    {
      setErrors(null)
      setSendStatus(true)
      axios.post('/predict', data)
      .then((res) => {
        console.log(res.data)
        setLoan_Status(res.data)
      })
      .catch((err) => {
        console.log('no not get')
      })
    }
    
  }

  // STATE COMPONENT
  let Form = (
    <div>
      <form>

        <label>First Name</label>
        <input
          type="text"
          id="fname"
          value={fname}
          onChange={e => setFName(e.target.value)}
          placeholder="First name.."
        /><br/>
        
        <label>Last Name</label>
        <input
          type="text"
          id="lname"
          value={lname}
          onChange={e => setLName(e.target.value)}
          placeholder="Last name.."
        /><br/>
        
        <label>Gender</label>
        <select 
          id="Gender"
          value={Gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value={null}>none</option>
          <option value={1}>Male</option>
          <option value={0}>Female</option>
        </select><br/>
        
        <label>Married</label>
        <select
          id="Married"
          value={Married}
          onChange={e => setMarried(e.target.value)}
        >
          <option value={null}>none</option>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select><br/>
        
        <label>Dependents</label>
        <input
          type="number"
          id="Dependents"
          value={Dependents}
          onChange={e => setDependents(e.target.value)}
          placeholder="Dependents"
        /><br/>
        
        <label>Education</label>
        <select
          id="Education"
          value={Education}
          onChange={e => setEducation(e.target.value)}
        >
          <option value={null}>none</option>
          <option value={1}>Graduate</option>
          <option value={0}>Not Graduate</option>
        </select><br/>
        
        <label>Self_Employed</label>
        <select
          id="Self_Employed"
          value={Self_Employed}
          onChange={e => setSelf_Employed(e.target.value)}
        >
          <option value={null}>none</option>
          <option value={1}>Yes</option>
          <option value={0}>No</option>
        </select><br/>
        
        <label>ApplicantIncome</label>
        <input
          type="number"
          id="ApplicantIncome"
          value={ApplicantIncome}
          onChange={e => setApplicantIncome(e.target.value)}
          placeholder="ApplicantIncome"
        /><br/>
        
        <label>CoapplicantIncome</label>
        <input
          type="number"
          id="CoapplicantIncome"
          value={CoapplicantIncome}
          onChange={e => setCoapplicantIncome(e.target.value)}
          placeholder="CoapplicantIncome"
        /><br/>
        
        <label>LoanAmount</label>
        <input
          type="number"
          id="LoanAmount"
          value={LoanAmount}
          onChange={e => setLoanAmount(e.target.value)}
          placeholder="LoanAmount"
        /><br/>
        
        <label>Loan_Amount_Term</label>
        <input
          type="number"
          id="Loan_Amount_Term"
          value={Loan_Amount_Term}
          onChange={e => setLoan_Amount_Term(e.target.value)}
          placeholder="Loan_Amount_Term"
        /><br/>
        
        <label>Credit_History</label>
        <input
          type="number"
          id="Credit_History"
          value={Credit_History}
          onChange={e => setCredit_History(e.target.value)}
          placeholder="Credit_History"
        /><br/>
        
        <label>Property_Area</label>
        <select
          id="Property_Area"
          value={Property_Area}
          onChange={e => setProperty_Area(e.target.value)}
        >
          <option value={null}>none</option>
          <option value={0}>Rural</option>
          <option value={2}>Urban</option>
          <option value={1}>Semiurban</option>
        </select><br/>

        <input onClick={handleSubmit} type="submit" value="Submit" />

        {errors && 
          <ErrorsText>{errors}</ErrorsText>
        }
      </form>
    </div>
  )

  let Result = (<div>{Loan_Status}</div>)

  return (
    <div className="container text-center">
      <p>Loan accept prediction</p>
      {sendStatus==false ? Form : Result}
    </div>
  );
}

export default App;
