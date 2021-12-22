import { useState, useRef } from 'react'
import companyLogo from '../assets/swedbank-img-logo.svg'
import PhoneInput from 'react-phone-input-2'
import {useHistory} from 'react-router-dom'
import constant from '../provider/constant'
import 'react-phone-input-2/lib/style.css'
import '../styles/style.scss'

const SmallLoan = () => {
    const history = useHistory()

    const [phone, setPhone] = useState(null)
    const [showComment, setShowComment] = useState(false)
    const [step, setStep] = useState(1)
    const [payload, setPayload] = useState(constant.INITIAL_STATE)

    const commentContainer = useRef(null)
    const commentText = useRef(null)
    const step1 = useRef(null)
    const step2 = useRef(null)
    const step3 = useRef(null)
    const errorMessage = useRef(null)

    function handleComment(){
        if(commentContainer.current.style.opacity != "1"){
            commentContainer.current.style.opacity = '1'
            commentContainer.current.style.height = "22rem"
            setShowComment(true)
        }
        else{
            commentContainer.current.style.opacity = '0'
            commentContainer.current.style.height = "0rem"
            setShowComment(false)
        }
    }

    function handleSteps(type, val){

        errorMessage.current.className = "form-info-wrapper error-msg-wrapper no-display"

        if(step === 1){
            if(payload.loanAmount && payload.loanTerm && payload.repaymentType && payload.monthlySalary){
                step1.current.className="step-circle completed-status"
            }
            else{
                step1.current.className="step-circle"
                if(type === "next"){
                   return errorMessage.current.className = "form-info-wrapper error-msg-wrapper"
                }
            }
        }
        else if(step === 2){
            if(payload.firstName && payload.lastName && payload.maritalStatus && payload.personalCode && 
                payload.education && payload.postHeld && phone){
                step2.current.className="step-circle completed-status"
            }
            else{
                step2.current.className="step-circle"
                if(type === "next"){
                    return errorMessage.current.className = "form-info-wrapper error-msg-wrapper"
                }
            }
        }

        if(step + 1 === 3){
            step3.current.className="step-circle ready-status"
        }
        else{
            step3.current.className="step-circle"
        }


        if(type === "direct"){
            setStep(val)
        }
        else{
            setStep(step + val)
        }
    }

    function handleInput(e){
        setPayload({...payload, [e.target.name]: e.target.value})
        console.log({payload})
    }

    function validateInputRange(){
        if(payload.loanAmount < constant.MIN_LOAN_AMOUNT || payload.loanAmount > constant.MAX_LOAN_AMOUNT){
            setPayload({...payload, loanAmount: constant.MIN_LOAN_AMOUNT})
        }
        
        if(payload.loanTerm < constant.MIN_LOAN_TERM || payload.loanTerm > constant.MAX_LOAN_TERM){
            setPayload({...payload, loanTerm: constant.MIN_LOAN_TERM})
        }
    }

    function handleRangeInput(type, data){
        if(type === "loanAmount"){
            data = (payload.loanAmount + data) < constant.MIN_LOAN_AMOUNT ? constant.MIN_LOAN_AMOUNT : (payload.loanAmount+data) > constant.MAX_LOAN_AMOUNT ? constant.MAX_LOAN_AMOUNT : data + payload.loanAmount
        }
        else if(type === "loanTerm"){
            data = (payload.loanTerm+data) < constant.MIN_LOAN_TERM ? constant.MIN_LOAN_TERM : (payload.loanTerm+data) > constant.MAX_LOAN_TERM ? constant.MAX_LOAN_TERM : data + payload.loanTerm
        }

        setPayload({...payload, [type]: data})
    }

    function handleSubmit(){
        if(payload.loanAmount && payload.loanTerm && payload.repaymentType && payload.monthlySalary
            && payload.firstName && payload.lastName && payload.maritalStatus && payload.personalCode && 
            payload.education && payload.postHeld && phone){
                alert("Your loan request has been submitted successfully")
                history.push("/")
            }
        else{
           return errorMessage.current.className = "form-info-wrapper error-msg-wrapper"
        }
    }

    return(
        <div className="container">
            <div className="top-bar-container">
                <img className="company-logo" src={companyLogo} />
            </div>
            <div className="loan-container">
                <h3 className="page-title">Small loan application</h3>
                <div className="form-container">
                    <div className="form-header">
                        <div className="form-info-wrapper">
                            <p className="form-info-text">Submission of an application is not considered to be your 
                                obligation to sign a credit agreement. After you receive a 
                                proposal from the bank, we recommend considering it before 
                                taking a decision to conclude a credit agreement.
                            </p>
                            <div className="form-info-icon-wrapper">
                                <div className="info-icon-circle">i</div>
                            </div>
                        </div>
                        <div className="form-steps-wrapper">
                            <div className="step-linker"></div>
                            <div className="step-container">
                                <div className="step-circle" ref={step1}>1</div>
                                <p className="step-text" onClick={() => handleSteps("direct", 1)}>Application</p>
                            </div>
                            <div className="step-container">
                                <div className="step-circle" ref={step2}>2</div>
                                <p className="step-text" onClick={() => handleSteps("direct", 2)}>Personal data</p>
                            </div>
                            <div className="step-container">
                                <div className="step-circle" ref={step3}>3</div>
                                <p className="step-text" onClick={() => handleSteps("direct", 3)}>Submit application</p>
                            </div>
                        </div>
                    </div>
                    <form className="form-body">
                        <div className="form-info-wrapper error-msg-wrapper no-display" ref={errorMessage}>
                            <p className="form-info-text">
                                The mandatory information is missing or incorrect! Kindly provide all required details.
                            </p>
                            <div className="form-info-icon-wrapper error-icon-theme">
                                <div className="info-icon-circle error-icon-text"><i className="fa fa-times"></i></div>
                            </div>
                        </div>

                       { step === 1 ? 
                            <div className="application-form">
                                <div className="form-centered">
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Loan amount (&euro;) <span style={{color: '#F35A1B'}}>*</span></label>
                                        <div className="range-input-phone">
                                            <div className="input-handles input-value-left" onClick={() => handleRangeInput("loanAmount", -50)}> - </div>
                                            <input className="input-value" value={payload.loanAmount} name="loanAmount" onChange={handleInput} onBlur={validateInputRange} />
                                            <div className="input-handles input-value-right" onClick={() => handleRangeInput("loanAmount", 50)}> + </div>
                                        </div>
                                        <div className="max-min-label-wrapper">
                                            <p className="max-min-label">{constant.MIN_LOAN_AMOUNT} &euro;</p>
                                            <p className="max-min-label">{constant.MAX_LOAN_AMOUNT} &euro;</p>
                                        </div>
                                    </div>
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Loan term (months) <span style={{color: '#F35A1B'}}>*</span></label>
                                        <div className="range-input-phone">
                                            <div className="input-handles input-value-left" onClick={() => handleRangeInput("loanTerm", -1)}> - </div>
                                            <input className="input-value" value={payload.loanTerm} name="loanTerm" onChange={handleInput} onBlur={validateInputRange} />
                                            <div className="input-handles input-value-right" onClick={() => handleRangeInput("loanTerm", + 1)}> + </div>
                                        </div>
                                        <div className="max-min-label-wrapper">
                                            <p className="max-min-label">{constant.MIN_LOAN_TERM} month</p>
                                            <p className="max-min-label">{constant.MAX_LOAN_TERM} months</p>
                                        </div>
                                    </div>
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Prefered repayment date <span style={{color: '#F35A1B'}}>*</span></label>
                                        <div className="custom-dropdown input-field">
                                                <select className="select-field" name="repaymentType" onChange={handleInput}>
                                                    <option value=""></option>
                                                    <option value="7">7</option>
                                                    <option value="10">10</option>
                                                    <option value="12">12</option>
                                                    <option value="15">15</option>
                                                </select>
                                                <span className="dropdown-text">{payload.repaymentType}</span>
                                                <span className="dropdown-icon"><i class="fa fa-angle-down"></i></span>
                                            </div>
                                    </div>
                                </div>
                                <div className="section-container">
                                    <h3 className="section-title">Income and obligations data</h3>
                                    <div className="form-centered">
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Monthly salary after tax (&euro;) <span style={{color: '#F35A1B'}}>*</span></label>
                                        <input className="input-field resize-input" type="tel" name="monthlySalary" value={payload.monthlySalary} onChange={handleInput} />
                                    </div>
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Do you have obligations outside Swedbank?<span style={{color: '#F35A1B'}}>*</span></label>
                                        <div className="radio">
                                            <div class="form-radio-group">
                                                <input type="radio" class="form-radio-input" value="Admin" id="admin" name="obligation" onChange={handleInput} />
                                                <label for="admin" class="form-radio-label">
                                                    <span class="form-radio-button"></span>
                                                </label>
                                                <p className="radio-label">No</p>
                                            </div>

                                            <div class="form-radio-group">
                                                <input type="radio" class="form-radio-input" value="Staff" id="staff" name="obligation" onChange={handleInput} />
                                                <label for="staff" class="form-radio-label">
                                                    <span class="form-radio-button"></span>
                                                </label>
                                                <p className="radio-label">Yes</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div> : null 
                        }

                       {step === 2 ? 
                            <div className="application-form">
                                <div className="section-container">
                                    <h3 className="section-title">Borrower data</h3>
                                    <div className="form-centered">
                                        <div className="range-input-wrapper">
                                            <label className="input-label">First name <span style={{color: '#F35A1B'}}>*</span></label>
                                            <input className="input-field no-background resize-input" value={payload.firstName} name="firstName" onChange={handleInput} />
                                        </div>
                                        <div className="range-input-wrapper">
                                            <label className="input-label">Last name <span style={{color: '#F35A1B'}}>*</span></label>
                                            <input className="input-field no-background resize-input" value={payload.lastName} name="lastName" onChange={handleInput} />
                                        </div>
                                        <div className="range-input-wrapper">
                                            <label className="input-label">Personal code <span style={{color: '#F35A1B'}}>*</span></label>
                                            <input className="input-field no-background resize-input" value={payload.personalCode} name="personalCode" onChange={handleInput} />
                                        </div>
                                        <div className="range-input-wrapper">
                                            <label className="input-label">Marital Status <span style={{color: '#F35A1B'}}>*</span></label>
                                            <div className="custom-dropdown input-field">
                                                <select className="select-field" name="maritalStatus" onChange={handleInput}>
                                                    <option value=""></option>
                                                    <option value="single">Single</option>
                                                    <option value="married">Married</option>
                                                    <option value="common law marriage">Common law marriage</option>
                                                    <option value="divorced">Divorced</option>
                                                    <option value="widow/widower">Widow/Widower</option>
                                                </select>
                                                <span className="dropdown-text">{payload.maritalStatus}</span>
                                                <span className="dropdown-icon"><i class="fa fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-container">
                                    <h3 className="section-title">Extended data</h3>
                                    <div className="form-centered">
                                        <div className="range-input-wrapper">
                                            <label className="input-label">Education<span style={{color: '#F35A1B'}}>*</span></label>
                                            <div className="custom-dropdown input-field">
                                                <select className="select-field" name="education" onChange={handleInput}>
                                                    <option value=""></option>
                                                    <option value="primary">Primary</option>
                                                    <option value="secondary">Secondary</option>
                                                    <option value="vocational">Vocational</option>
                                                    <option value="higher">Higher</option>
                                                </select>
                                                <span className="dropdown-text">{payload.education}</span>
                                                <span className="dropdown-icon"><i class="fa fa-angle-down"></i></span>
                                                {/* <span className="dropdown-icon">&#9660;</span> */}
                                                
                                            </div>
                                        </div>
                                        <div className="range-input-wrapper">
                                            <label className="input-label">Post held <span style={{color: '#F35A1B'}}>*</span></label>
                                            <div className="custom-dropdown input-field">
                                                <select className="select-field" name="postHeld" onChange={handleInput} >
                                                    <option value=""></option>
                                                    <option value="worker">Worker</option>
                                                    <option value="specialist/office worker">Specialist/Office worker</option>
                                                    <option value="superior specialist">Superior specialist</option>
                                                    <option value="middle manager">Middle manager</option>
                                                    <option value="executive">Executive</option>
                                                    <option value="owner">Owner</option>
                                                    <option value="student">Student</option>
                                                    <option value="pensioneer">Pensioneer</option>
                                                    <option value="unemployed">Unemployed</option>
                                                    <option value="private enterprenuer">Private enterpreneur</option>
                                                </select>
                                                <span className="dropdown-text">{payload.postHeld}</span>
                                                <span className="dropdown-icon"><i class="fa fa-angle-down"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-container">
                                    <h3 className="section-title">Contact data</h3>
                                    <div className="form-centered">
                                        <div className="range-input-wrapper">
                                            <label className="input-label space-label">Phone <span style={{color: '#F35A1B'}}>*</span></label>
                                            <PhoneInput
                                                country={'us'}
                                                value={phone}
                                                onChange={setPhone}
                                                name = 'phone'
                                                containerClass={{
                                                    marginTop: "1.5rem"
                                                }}
                                                inputStyle={
                                                {
                                                    width: window.matchMedia('(max-width: 400px)').matches ? "62%" : window.matchMedia('(max-width: 750px)').matches ? "52%" : "39%",
                                                    height: '4.5rem',
                                                    border: "1px solid #BCD8DA",
                                                    borderRadius: "0.35rem"
                                                }
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <p className="form-notice">Other important information or circumstances 
                                    which might affect your financial behavior and creditworthiness (i.e. monthly 
                                    expenses of family, probability of income decrease, place of permanent residence 
                                    is not Lithuania or income currency is not EUR, etc.).
                                </p>
                                <div className="comment-toggle-wrapper">
                                    <span className="toggle-line"></span>
                                    <a className="toggle-btn" onClick={handleComment}>
                                    {showComment ?  
                                            <i class="fa fa-angle-up" style={{paddingRight: "1rem", color: "#F35A1B", fontSize: "2rem", fontWeight: "bold"}} aria-hidden="true"></i> :
                                            <i class="fa fa-angle-down" style={{paddingRight: "1rem", color: "#F35A1B", fontSize: "2rem", fontWeight: "bold"}} aria-hidden="true"></i>
                                        }
                                        Comments
                                    </a>
                                </div>
                                
                                <div className="form-centered">
                                    <div className="range-input-wrapper centered-mid" ref={commentContainer}>
                                        <label className="input-label">Additional Information</label>
                                        <textarea className="comment-box" name="comment" value={payload.comment} ref={commentText} onChange={handleInput}></textarea>
                                    </div>
                                </div>
                            </div> : null 
                        }

                        { step === 3 ? 
                            <div className="application-form">
                                <div className="section-container" style={{marginBottom: "2rem"}}>
                                    <h3 className="section-title remove-margin">Summary</h3>
                                    <div className="summary-row">
                                        <p className="summary-description">Full name</p>
                                        <p className="summary-value">{`${payload.firstName} ${payload.lastName}`}</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Loan amount</p>
                                        <p className="summary-value">{payload.loanAmount} &euro;</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Loan Term</p>
                                        <p className="summary-value">{payload.loanTerm} months</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Monthly salary after tax</p>
                                        <p className="summary-value">{payload.monthlySalary} &euro;</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Prefered repayment date</p>
                                        <p className="summary-value">{payload.repaymentType}</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Personal code</p>
                                        <p className="summary-value">{payload.personalCode}</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Marital status</p>
                                        <p className="summary-value">{payload.maritalStatus}</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Education</p>
                                        <p className="summary-value">{payload.education}</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Post held</p>
                                        <p className="summary-value">{payload.postHeld}</p>
                                    </div>
                                    <div className="summary-row">
                                        <p className="summary-description">Phone number</p>
                                        <p className="summary-value">{phone}</p>
                                    </div>
                                </div>
                            </div> : null
                        }
                    </form>
                    <div className="form-footer">
                        { step != 1 ? <a className="nav-btn back-btn" onClick={() => handleSteps("back", -1)}>&#171; Back</a> : 
                        <a className="nav-btn back-btn hide-display">&#171; Back</a>
                        }
                        { step != 3 ? <a className="nav-btn next-btn" onClick={() => handleSteps("next", 1)}>Forward &#187;</a> : 
                            <a className="nav-btn next-btn" onClick={handleSubmit}>Submit application &#187;</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default {
    routeProps: {
        path: '/loan-page',
        component: SmallLoan,
    },
    name: 'LoanPage',
}