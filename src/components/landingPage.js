import {useEffect} from 'react'
import companyLogo from '../assets/swedbank-img-logo.svg'
import loanIllustrator from '../assets/loan-window.svg'
import {useHistory} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/style.scss'

const LandingPage = () => {
    const history = useHistory()

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 100,
            easing: 'linear'
        })
    }, [])
    
    return(
        <div className="landing-page-container">
            <img className="company-logo-2" src={companyLogo} />
            <div className="landing-text-container" data-aos='zoom-in' data-aos-once={true} data-aos-easing="ease-in-out" data-aos-duration="1200">
                <p className="about-page">Presented to you is the <strong>Person Loan</strong> application form</p>
                {/* <h2 className="loan-advert">Get Found, Build Trust & Convert More Prospects Into Clients.</h2> */}
                <h2 className="loan-advert">Apply For a Loan Seamlessly With Faster Processing Time.</h2>
                <a className="start-btn" onClick={()=> history.push("/loan-page")}>Get Started</a>
                <p className="page-intro">Swedbank offers loans, payments and savings to simplify everyday life for individuals and companies</p>
            </div>
            <img className="loan-illustrator" src={loanIllustrator} data-aos='fade-up-left' data-aos-once={true} data-aos-easing="ease-in-out" data-aos-duration="1200" />
        </div>
    )
}

export default {
    routeProps: {
        path: '/',
        component: LandingPage,
    },
    name: 'Welcome',
}