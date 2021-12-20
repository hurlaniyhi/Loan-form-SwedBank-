import { useState, useRef } from 'react'
import companyLogo from '../assets/swedbank-img-logo.svg'
import Slider from 'react-input-slider';
import '../styles/style.scss'

const SmallLoan = () => {
    const [amount, setAmount] = useState(500)
    const commentContainer = useRef(null)
    const commentText = useRef(null)

    function handleComment(){
        if(commentContainer.current.style.opacity != "1"){
            commentContainer.current.style.opacity = '1'
            commentContainer.current.style.height = "22rem"
        }
        else{
            commentContainer.current.style.opacity = '0'
            commentContainer.current.style.height = "0rem"
        }
        //commentContainer.current.style.height = "22rem"
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
                                <div className="step-circle">1</div>
                                <p className="step-text">Application Form</p>
                            </div>
                            <div className="step-container">
                                <div className="step-circle">2</div>
                                <p className="step-text">Application Form</p>
                            </div>
                            <div className="step-container">
                                <div className="step-circle">3</div>
                                <p className="step-text">Application Form</p>
                            </div>
                        </div>
                    </div>
                    <form className="form-body">
                        <div className="application-form no-display">
                            <div className="form-centered">
                                <div className="range-input-wrapper">
                                    <label className="input-label">Loan amount (&euro;) <span style={{color: '#F35A1B'}}>*</span></label>
                                    <div className="range-input-phone">
                                        <div className="input-handles input-value-left"> - </div>
                                        <input className="input-value" value="5000" />
                                        <div className="input-handles input-value-right"> + </div>
                                    </div>
                                    <div className="max-min-label-wrapper">
                                        <p className="max-min-label">500 &euro;</p>
                                        <p className="max-min-label">100000 &euro;</p>
                                    </div>
                                </div>
                                <div className="range-input-wrapper">
                                    <label className="input-label">Loan term (months) <span style={{color: '#F35A1B'}}>*</span></label>
                                    <div className="range-input-phone">
                                        <div className="input-handles input-value-left"> - </div>
                                        <input className="input-value" value="6" />
                                        <div className="input-handles input-value-right"> + </div>
                                    </div>
                                    <div className="max-min-label-wrapper">
                                        <p className="max-min-label">6 month</p>
                                        <p className="max-min-label">60 months</p>
                                    </div>
                                </div>
                                <div className="range-input-wrapper">
                                    <label className="input-label">Prefered repayment date <span style={{color: '#F35A1B'}}>*</span></label>
                                    <div className="custom-dropdown input-field">
                                            <select className="select-field">
                                                <option value=""></option>
                                                <option>7</option>
                                                <option>10</option>
                                                <option>12</option>
                                                <option>15</option>
                                            </select>
                                            <span className="dropdown-text">drop down value</span>
                                            <span className="dropdown-icon">&#9660;</span>
                                        </div>
                                </div>
                            </div>

                            <div className="section-container">
                                <h3 className="section-title">Income and obligations data</h3>
                                <div className="form-centered">
                                <div className="range-input-wrapper">
                                    <label className="input-label">Monthly salary after tax (&euro;) <span style={{color: '#F35A1B'}}>*</span></label>
                                    <input className="input-field resize-input" type="tel" />
                                </div>
                                <div className="range-input-wrapper">
                                    <label className="input-label">Do you have obligations outside Swedbank?<span style={{color: '#F35A1B'}}>*</span></label>
                                    <div className="radio">
                                        <div class="form-radio-group">
                                            <input type="radio" class="form-radio-input" value="Admin" id="admin" name="size"/>
                                            <label for="admin" class="form-radio-label">
                                                <span class="form-radio-button"></span>
                                            </label>
                                            <p className="radio-label">No</p>
                                        </div>

                                        <div class="form-radio-group">
                                            <input type="radio" class="form-radio-input" value="Staff" id="staff" name="size"/>
                                            <label for="staff" class="form-radio-label">
                                                <span class="form-radio-button"></span>
                                            </label>
                                            <p className="radio-label">Yes</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className="application-form">
                            <div className="section-container">
                                <h3 className="section-title">Borrower Data</h3>
                                <div className="form-centered">
                                    <div className="range-input-wrapper">
                                        <label className="input-label">First name <span style={{color: '#F35A1B'}}>*</span></label>
                                        <input className="input-field no-background resize-input" />
                                    </div>
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Last name <span style={{color: '#F35A1B'}}>*</span></label>
                                        <input className="input-field no-background resize-input" />
                                    </div>
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Personal code <span style={{color: '#F35A1B'}}>*</span></label>
                                        <input className="input-field no-background resize-input" />
                                    </div>
                                </div>
                            </div>
                            <div className="section-container">
                                <h3 className="section-title">Extended Data</h3>
                                <div className="form-centered">
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Education<span style={{color: '#F35A1B'}}>*</span></label>
                                        <div className="custom-dropdown input-field">
                                            <select className="select-field">
                                                <option value=""></option>
                                                <option>Primary</option>
                                                <option>Secondary</option>
                                                <option>Vocational</option>
                                                <option>Higher</option>
                                            </select>
                                            <span className="dropdown-text">drop down value</span>
                                            <span className="dropdown-icon">&#9660;</span>
                                        </div>
                                    </div>
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Post held <span style={{color: '#F35A1B'}}>*</span></label>
                                        <div className="custom-dropdown input-field">
                                            <select className="select-field">
                                                <option value=""></option>
                                                <option>Worker</option>
                                                <option>Specialist/Office worker</option>
                                                <option>Superior specialist</option>
                                                <option>Middle manager</option>
                                                <option>Executive</option>
                                                <option>Owner</option>
                                                <option>Student</option>
                                                <option>Pensioner</option>
                                                <option>Unemployed</option>
                                                <option>Private enterpreneur</option>
                                            </select>
                                            <span className="dropdown-text">drop down value</span>
                                            <span className="dropdown-icon">&#9660;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-container">
                                <h3 className="section-title">Personal Data</h3>
                                <div className="form-centered">
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Marital Status <span style={{color: '#F35A1B'}}>*</span></label>
                                        <div className="custom-dropdown input-field">
                                            <select className="select-field">
                                                <option value=""></option>
                                                <option>Single</option>
                                                <option>Married</option>
                                                <option>Common law marriage</option>
                                                <option>Divorced</option>
                                                <option>Widow/Widower</option>
                                            </select>
                                            <span className="dropdown-text">drop down value</span>
                                            <span className="dropdown-icon">&#9660;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-container">
                                <h3 className="section-title">Contact data</h3>
                                <div className="form-centered">
                                    <div className="range-input-wrapper">
                                        <label className="input-label">Phone <span style={{color: '#F35A1B'}}>*</span></label>
                                        <input className="input-field no-background resize-input" />
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
                                <a className="toggle-btn" onClick={handleComment}>&#9669; Comment</a>
                            </div>
                            
                            <div className="form-centered">
                                <div className="range-input-wrapper centered-mid" ref={commentContainer}>
                                    <label className="input-label">Additional Information</label>
                                    <textarea className="comment-box" ref={commentText}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="form-footer">
                        <a className="nav-btn back-btn">&#171; Back</a>
                        <a className="nav-btn next-btn">Next &#187;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallLoan