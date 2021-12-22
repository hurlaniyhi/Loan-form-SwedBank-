export default {
    MIN_LOAN_AMOUNT: 500,
    MAX_LOAN_AMOUNT: 10000,
    MIN_LOAN_TERM: 2,
    MAX_LOAN_TERM: 12,
    INITIAL_STATE: {
        loanAmount: 500, loanTerm: 2, repaymentType: "", monthlySalary: "", obligation: "",
        firstName: "", lastName: "", personalCode: "", maritalStatus: "", education: "", postHeld: "",
        phone: "", comment: ""
    },
    REPAYMENT_DATE_LIST: ["", "7", "10", "12", "15"],
    MARITAL_STATUS_LIST: ["", "Single", "Married", "Common law marriage", "Divorced", "Widow/Widower"],
    EDUCATION_LIST: ["", "Primary", "Secondary", "Vocational", "Higher"],
    POST_HELD_LIST: ["", "Worker", "Specialist/Office worker", "Superior specialist", "Middle manager", "Executive", "Owner", "Student", "Pensioneer", "Unemployed", "Private enterpreneur"]
}