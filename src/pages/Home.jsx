import './Home.scss';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import HeroTruck from '../assets/Images/HeroTruck.png';
import Objective1 from '../assets/Images/Objective1.jpg';
import Objective2 from '../assets/Images/Objective2.jpg';
import Objective3 from '../assets/Images/Objective3.png';
import Objective4 from '../assets/Images/Objective4.jpg';
import IconImg1 from '../assets/Icons/IconImg1.png';
import IconImg2 from '../assets/Icons/IconImg2.png';
import IconImg3 from '../assets/Icons/IconImg3.png';
import IconImg4 from '../assets/Icons/IconImg4.png';
import {useNavigate} from 'react-router-dom';


function Home() {

    const navigate = useNavigate();

    const handleGetQuote = () => {
        navigate('/contact', {state: {scrollTo: 'quote-section'} });
    };

    const handleLearnMore = () => {
        navigate('/about', {state: {scrollTo: 'objective-section'} });
    };

    return(
        <div className='homepage-div'>
            <NavBar/>
            <div className='hero-div'>
                <div className='hero-bg'>
                    <div className='hero-slogan'>
                        <h1 className='hero-headtxt'>PROFICIENCY  <br className='head-break'/> ON THE MOVE</h1>
                        <p className='hero-subtxt'>
                            EXPERIENCE SEAMLESS AND RELIABLE LOGISTICS WITH CHOVEE TRUCKING SERVICES,
                            YOUR TRUSTED PARTNER IN TRANSPORTATION. 
                            <br/>
                            <br/>
                            OUR DEDICATED FLEET AND SKILLED DRIVERS ENSURE YOUR CARGO MOVES SAFELY
                            AND EFFICIENTLY, EVERYTIME. WHETHER IT'S LOCAL OR LONG-HAUL, 
                            WE DELIVER WITH PRECISION AND CARE
                        </p>
                        <button className='hero-btn' onClick={handleGetQuote}>GET A QUOTE</button>
                    </div>
                    <img className='hero-truck' src={HeroTruck}></img>
                </div>
            </div>
            <div className='service-summary-page'>
                <div className='service-summary-div'>
                    <div className='service-summary-info'>
                        <h1 className='service-title'>CHOVEE TRUCKING SERVICES</h1>
                        <p className='service-text1'>
                            WE PROVIDE COMPREHENSIVE SOLUTIONS FOR ALL YOUR LOGISTIC NEEDS, 
                            FROM LOCAL DELIVERIES TO LONG-HAUL TRANSPORTATION.
                        </p>
                        <p className='service-text2'> 
                            OUR TEAM HANDLES EVERYTHING WITH PROFESSIONALISM AND REALITY.
                            WITH A MODERN FLEET AND EXPERIENCED STAFF,
                            WE ENSURE TIMELY AND SAFE DELIVERY OF YOUR GOODS.
                        </p>
                        <button className='service-button' onClick={handleLearnMore}>LEARN MORE</button>
                    </div>
                    <div className='service-summary-samples'>
                        <div className='service-set1'>
                            <div className='obj-card' id='obj-card1'>
                                <img src={Objective1} className='obj-img' />
                                <h3 className='obj-title'>SAFETY</h3>
                                <p className='obj-txt'>
                                    OUR PRIORITY IS TO CREATE A SAFE WORKING ENVIRONMENT
                                    FOR BOTH OUR CLIENTS AND EMPLOYEES.
                                </p>
                            </div>
                            <div className='obj-card'>
                                <img src={Objective2} className='obj-img'/>
                                <h3 className='obj-title'>SUPPORT</h3>
                                <p className='obj-txt'>
                                    OUR AIM IS TO SUPPORT THE GROWTH OF OUR CUSTOMERS' BUSINESSES
                                    AND ADDRESS INCREASING TRANSPORTATION DEMANDS WITHIN THE COMMUNITY.
                                </p>
                            </div>
                        </div>
                        <div className='service-set2'>
                            <div className='obj-card' id='obj-card2'>
                                <img src={Objective3} className='obj-img'/>
                                <h3 className='obj-title'>INNOVATION</h3>
                                <p className='obj-txt'>
                                    WE ARE DEDICATED TO CONTRIBUTING TO THE FREIGHT AND LOGISTICS 
                                    INDUSTRY BY INNOVATING NEW IDEAS AND DEVELOPING SOLUTIONS
                                    TO EXISTING LOGISTICAL CHALLENGES
                                </p>
                            </div>
                            <div className='obj-card'>
                                <img src={Objective4} className='obj-img'/>
                                <h3 className='obj-title'>EXCELLENCE</h3>
                                <p className='obj-txt'>
                                    TO CONTINUOUSLY ENHANCE OUR COMPANY AND STRATEGIES,
                                    WE ARE COMMITTED TO PROVIDING THE HIGHEST QUALITY CUSTOMER SERVICE.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='icon-div'>
                <div className='icon-titlediv'>
                    <h1 className='iconpage-title'>WHY CHOOSE CHOVEE?</h1>
                </div>
                <div className='icon-box'>
                    <div className='icon-card' id='icon-card1'>
                        <img className='icon-img' src={IconImg1}/>
                        <h4 className='icon-title'>PUNCTUALITY</h4>
                        <p className='icon-txt'>
                            OUR TIMELY SERVICE ENSURES THAT YOUR SHIPMENTS ARRIVE AS SCHEDULED, EVERY TIME.
                            WE PRIORITIZE ON-TIME DELIVERY, PROVIDING RELIABILITY YOU CAN COUNT ON.
                        </p>
                    </div>
                    <div className='icon-card' id='icon-card2'>
                        <img className='icon-img' src={IconImg2}/>
                        <h4 className='icon-title'>FLEXIBILITY</h4>
                        <p className='icon-txt'>
                            WE OFFER CONVENIENT DELIVERY AND PICK-UP OPTIONS TAILORED TO MEET YOUR SCHEDULE.
                            OUR FLEXIBLE SERVICES MAKE IT EASY TO MANAGE YOU CARGO, NO MATTER THE TIME OR LOCATION.
                        </p>
                    </div>
                    <div className='icon-card' id='icon-card3'>
                        <img className='icon-img' src={IconImg3}/>
                        <h4 className='icon-title'>SECURITY</h4>
                        <p className='icon-txt'>
                            WE PRIORITIZE THE SAFETY OF YOUR CARGO, ENSURING IT ARRIVES IN PERFECT CONDITION.
                            OUR EXPERT TEAM USES THE LATEST SAFETY PROTOCOLS AND EQUIPMENT TO PROTECT YOUR GOODS
                            THROUGHOUT THE JOURNEY
                        </p>
                    </div>
                    <div className='icon-card' id='icon-card4'>
                        <img className='icon-img' src={IconImg4}/>
                        <h4 className='icon-title'>DEDICATION</h4>
                        <p className='icon-txt'>
                            WE DEEPLY VALUE OUR CLIENTS, COMMITTING TO UNDERSTAND AND MEET THEIR UNIQUE NEEDS.
                            BUILDING STRONG RELATIONSHIPS AND PROVIDING EXCEPTIONAL SERVICE IS AT THE HEART OF
                            EVERYTHING WE DO.
                        </p>
                    </div>
                </div>
            </div>
            <div className='review-page'>
                <div className='reviewpage-info'>
                    <h1 className='reviewpage-title'>WHAT OUR CLIENTS SAY</h1>
                    <p className='reviewpage-txt'>FEEDBACK AND REVIEWS ARE CRUCIAL TO OUR GROWTH, PROVIDING VALUABLE INSIGHTS INTO HOW WE CAN IMPROVE. <br class='review-br'/>
                        WE CAREFULLY CONSIDER EVERY CLIENT'S VOICE TO ENSURE WE MEET AND EXCEED EXPRECTATIONS. <br class='review-br'/>
                        YOUR INPUT SHAPES OUR SERVICE, AND WE ARE GRATEFUL FOR YOUR CONTRIBUTIONS TO OUR CONTINUOUS IMPROVEMENT. 
                    </p>
                </div>
                <div className='reviewcard-box'>
                    <div className='review-card'>
                        <p className='review-txt'>
                            "OUTSTANDING SERVICE WITH ATTENTIVE CUSTOMER CARE.
                            EVERY DELIVERY WAS ON TIME AND IN PERFECT CONDITION."
                        </p>
                        <h4 className='review-name'>ANA KATRINA MENDOZA</h4>
                    </div>
                    <div className='review-card'>
                        <p className='review-txt'>
                            "EXCELLENT EXPERIENCE FROM START TO FINISH.
                            THE TEAM WAS PROFESSIONAL AND ALWAYS KEPT ME INFORMED."
                        </p>
                        <h4 className='review-name'>RAFAEL LUIS TORRES</h4>
                    </div>
                    <div className='review-card'>
                        <p className='review-txt'>
                            "HIGHLY RECOMMENDED FOR RELIABLE AND EFFICIENT SERVICE.
                            THEY TRULY VALUE CUSTOMER FEEDBACK AND STRIVE FOR EXCELLENCE."
                        </p>
                        <h4 className='review-name'>DANIEL FRANCISCO GARCIA</h4>
                    </div>
                </div>
            </div>
            <div className='slogan-bg'>
                <h1 className='slogan-txt'>TRAVEL MILES WITH US <br className='slogan-br'/> TOWARD YOUR BUSINESS'S <br className='slogan-br'/> EFFICIENCY AND SUCCESS</h1>
            </div>
            <Footer/>
        </div>
    );
}

export default Home