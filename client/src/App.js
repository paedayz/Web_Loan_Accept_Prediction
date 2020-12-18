import "./App.css";
import axios from 'axios'
import React , { useState } from 'react'
import styled from 'styled-components'
import ClipLoader from "react-spinners/ClipLoader";
import Confetti from 'react-confetti'
import RingLoader from "react-spinners/RingLoader";


let axiosDefaults = require("axios/lib/defaults");
axiosDefaults.baseURL = "http://127.0.0.1:5000/";

// styled component
const ErrorsText = styled.div`
  color : red;
  position: absolute;
  top: 82%;
  left: 45%;
  font-weight : bold;
`

const Loader = styled.div`
  position: absolute;
  left: 43%;
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
  const [sendStatus, setSendStatus] = useState(true)
  const [loading, setLoading] = useState(true)

  if(loading === true && sendStatus === true) {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }

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

  const handleBack = () => {
    setSendStatus(false)
    setGender(null)
    setMarried(null)
    setDependents(null)
    setEducation(null)
    setSelf_Employed(null)
    setApplicantIncome(null)
    setCoapplicantIncome(null)
    setLoanAmount(null)
    setLoan_Amount_Term(null)
    setCredit_History(null)
    setProperty_Area(null)
    setLoan_Status(null)
    setErrors(null)
    setLoading(true)
    setSendStatus(false)
  }

  
  
  


  // STATE COMPONENT
  let Form = (
    
    <div class="black">
      <div class="container">
      
      <div class="card">
        
        <form class="row">
          <div class="column-5">
          </div>
          <div class="column-1">
              <label class="s">First_Name</label><br/>
              <label class="s">Gender</label><br/>
              <label class="s">Dependents</label><br/>
              <label class="s">Self_Employed</label><br/>
              <label class="s">Coapplicant_Income</label><br/>
              <label class="s">Loan_Amount_Term</label><br/>
              <label class="s">Credit_History</label><br/>
          </div>
          <div class="column-2">
              <label>:</label>
              <input
                type="text"
                id="fname"
                value={fname}
                onChange={e => setFName(e.target.value)}
                placeholder="First name.."
              /><br/>
            <div class = "gg">
            <label>:</label>
              <select 
                
                id="Gender"
                value={Gender}
                onChange={e => setGender(e.target.value)}
              >
                <option value={null}>none</option>
                <option value={1}>Male</option>
                <option value={0}>Female</option>
              </select><br/>
            </div>
            <label>:</label>
            <input
              type="number"
              id="Dependents"
              value={Dependents}
              onChange={e => setDependents(e.target.value)}
              placeholder="Dependents"
            /><br/>
            <div class = "hh">
              <label>:</label>
              <select
                id="Self_Employed"
                value={Self_Employed}
                onChange={e => setSelf_Employed(e.target.value)}
              >
                <option value={null}>none</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select><br/>
            </div>
            <label>:</label>
            <input
              type="number"
              id="CoapplicantIncome"
              value={CoapplicantIncome}
              onChange={e => setCoapplicantIncome(e.target.value)}
              placeholder="CoapplicantIncome"
            /><br/>
            <label>:</label>
            <input
              type="number"
              id="Loan_Amount_Term"
              value={Loan_Amount_Term}
              onChange={e => setLoan_Amount_Term(e.target.value)}
              placeholder="Loan_Amount_Term"
            /><br/>
            <label>:</label>
            <input
              type="number"
              id="Credit_History"
              value={Credit_History}
              onChange={e => setCredit_History(e.target.value)}
              placeholder="Credit_History"
            /><br/>
          </div>
          <div class="column-3">
              <label class="m">Last_Name</label><br/>
              <label class="m">Married</label><br/>
              <label class="m">Education</label><br/>
              <label class="m">Applicant_Income</label><br/>
              <label class="m">Loan_Amount</label><br/>
              <label class="m">Property_Area</label>
          </div>
          <div class="column-4">
              <label>:</label>
              <input
                type="text"
                id="lname"
                value={lname}
                onChange={e => setLName(e.target.value)}
                placeholder="Last name.."
              /><br/>
            <div class = "kk">
              <label>:</label>
              <select
                id="Married"
                value={Married}
                onChange={e => setMarried(e.target.value)}
              >
                <option value={null}>none</option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select><br/>
            </div>
            <div class = "cc">
              <label>:</label>
              <select
                id="Education"
                value={Education}
                onChange={e => setEducation(e.target.value)}
              >
                <option value={null}>none</option>
                <option value={1}>Graduate</option>
                <option value={0}>Not Graduate</option>
              </select><br/>
            </div>
            <label>:</label>
            <input
              type="number"
              id="ApplicantIncome"
              value={ApplicantIncome}
              onChange={e => setApplicantIncome(e.target.value)}
              placeholder="ApplicantIncome"
            /><br/>
            <label>:</label>
            <input
              type="number"
              id="LoanAmount"
              value={LoanAmount}
              onChange={e => setLoanAmount(e.target.value)}
              placeholder="LoanAmount"
            /><br/>
            <div class = "ee">
              <label>:</label>
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
            </div>

          </div>
          
            
        </form>
        
      </div>
      </div>
      <div><br/><br/><br/></div>
        <div >
            <input id="b1" onClick={handleSubmit} type="submit" value="Submit" />

            {errors && 
              <ErrorsText>{errors}</ErrorsText>
            }
          </div>
    </div>
  )
  

  let Result = (
    <div>
      {loading===false ? 
      <div>
        <div id="d8">{Loan_Status === 1 ? 
          (<div>Congratulations! {fname} {lname} <br/> You Can Loan <Confetti width="2000%" height="600%"/></div>) : 
          (<div>Sorry {fname} {lname} <br/>You Can't Loan</div>)}
        </div>
        <button id="b2" onClick={handleBack}>Go Back</button>
      </div>
      :
        <Loader>
          <RingLoader
            size={200}
            color={"#90EE90"}
            loading={true}
          />
        </Loader>
      }
    </div>
      
  
  )

  return (
    
    
    <div className="container text-center" class="loading_wave">
      <p>Loan accept prediction</p>
      {sendStatus===false ? Form : Result}
    </div>
  );
}

export default App;