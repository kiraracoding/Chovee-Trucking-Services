
import './About.scss';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import ServicesHeroVid from '../assets/Videos/ServicesHeroVid.mp4';
import AboutLogo from '../assets/Images/AboutLogo.png';
import OperatorImg from '../assets/Images/OperatorImg.jpg';
import Objective1 from '../assets/Images/Objective1.jpg';
import Objective2 from '../assets/Images/Objective2.jpg';
import Objective3 from '../assets/Images/Objective3.png';
import Objective4 from '../assets/Images/Objective4.jpg';
import Objective5 from '../assets/Images/Objective5.jpg';
import Objective6 from '../assets/Images/Objective6.jpg';

function About () {
    

    return(
        <>
        <NavBar />
        <div className='aboutpage-div'>
            <div className='services-hero-bg'>
                <div className='video-div'>
                    <video className='background-video' autoPlay loop muted>
                        <source src={ServicesHeroVid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='about-slogandiv'>
                    <h1 className='services-hero-slogan'>
                        WE DELIVER <br/>
                        RELIABILITY, <br/>
                        EFFICIENCY, <br/>
                        CONVENIENCE, <br/>
                        & PROFESSIONALISM
                    </h1>
                </div>
            </div>
            <div className='about-div'>
                <div className='aboutinfo-gendiv'>
                    <div className='aboutinfo-div'>
                        <img className='about-logo' src={AboutLogo}/>
                        <p className='about-txt'>
                            CHOVEE TRUCKING SERVICES IS A LOGISTIC FREIGHT COMPANY IN THE PHILIPPINES, 
                            EMERGING FROM ITS HUMBLE BEGINNINGS TO PROVIDING THE BEST QUALITY LOGISTIC 
                            SERVICES TO ITS CUSTOMERS <br/>
                            <br/>
                            A COMPANY COMPOSED OF SKILLED EMPLOYEES DEDICATED TO GROW INDIVIDUALLY AND 
                            COLLECTIVELY IN THE FIELD OF FREIGHT AND LOGISTICS TO HELP FURTHER SUPPLY
                            THE DEMANDS OF THE PEOPLE OF A CONTINUOUSLY GROWING ECONOMY. <br/>
                            <br/>
                            AS OUR COMPANY'S TAGLINE SUGGESTS, "PROFICIENCY ON THE MOVE".
                            WE ENSURE COMPOTENT AND EFFICIENT SERVICES IN TERMS OF CONVENIENCE, 
                            SPEED, AND PUNCTUALITY; WHILE STRIVING TO KEEP THE COSTS LOW 
                            WITHOUT AFFECTING THE QUALITY OF SERVICE.
                        </p>
                    </div>
                    <div className='about-operatordiv'>
                        <img className='operator-img' src={OperatorImg} />
                        <h3 className='operator-name'>JULIUS G. MERANDILLA</h3>
                        <h5 className='operator-position'>CHIEF HEAD OPERATOR</h5>
                    </div>
                </div>
            </div>
            <div className='objective-page'>
                <div className='objective-div'>
                    <h1 className='objective-page-title'>OUR OBJECTIVES</h1>
                    <div className='objective-card'>
                        <img className='objective-img' src={Objective1} />
                        <div className='objective-txtdiv'>
                            <h3 className='objective-title'>SAFETY</h3>
                            <p className='objective-txt'>
                                OUR PRIORITY IS TO CREATE A SAFE WORKING ENVIRONMENT 
                                FOR BOTH OUR CLIENTS AND EMPLOYEES <br/> <br/>
                                WE ARE COMMITTED TO IMPLEMENTING STRINGENT SAFETY PROTOCOLS AND 
                                ENSURING A SECURE WORKPLACE FOR EVERYONE INVOLVED. MAINTAINING A
                                SAFE ENVIRONMENT IS FUNDAMENTAL TO OUR OPERATIONS AND SUCCESS.
                            </p>
                        </div>
                    </div>
                    <div className='objective-card'>
                        <img className='objective-img' src={Objective2} />
                        <div className='objective-txtdiv'>
                            <h3 className='objective-title'>SUPPORT</h3>
                            <p className='objective-txt'>
                                OUR AIM IS TO SUPPORT THE GROWTH OF OUR CUSTOMERS' BUSINESSES AND 
                                ADDRESS INCREASING TRANSPORTATION DEMANDS WITHIN THE COMMUNITY. <br/> <br/>
                                WE FOCUS ON PROVIDING TAILORED SOLUTIONS THAT ALIGN WITH THE SPECIFIC NEEDS 
                                OF OUR CLIENTS. THIS COMMITMENT HELPS DRIVE BUSINESS SUCCESS AND MEETS EMERGING 
                                MARKET REQUIREMENTS
                            </p>
                        </div>
                    </div>
                    <div className='objective-card'>
                        <img className='objective-img' src={Objective3} />
                        <div className='objective-txtdiv'>
                            <h3 className='objective-title'>INNOVATION</h3>
                            <p className='objective-txt'>
                                WE ARE DEDICATED TO CONTRIBUTING TO THE FREIGHT AND LOGISTICS INDUSTRY BY 
                                INNOVATING NEW IDEAS AND DEVELOPING SOLUTIONS TO EXISTING LOGISTICAL CHALLENGES. <br/> <br/>
                                OUR GOAL IS TO IMPROVE THE CURRENT FREIGHT SYSTEM IN THE PHILIPPINES THROUGH INNOVATION.
                                THIS CONTRIBUTION WILL ENHANCE THE OVERALL EFFICIENCY AND EFFECTIVENESS OF LOGISTICS IN THE REGION.
                            </p>
                        </div>
                    </div>
                    <div className='objective-card'>
                        <img className='objective-img' src={Objective4} />
                        <div className='objective-txtdiv'>
                            <h3 className='objective-title'>EXCELLENCE</h3>
                            <p className='objective-txt'>
                                WE ARE COMMITTED TO PROVIDING THE HIGHEST QUALITY CUSTOMER SERVICE. <br/><br/>
                                OUR FOCUS IS ON CONTINOUSLY REFINING OUR APPROACH TO MEET AND EXCEED CLIENT EXPECTATIONS.
                                THIS DEDICATION ENSURES WE MAINTAIN EXCELLENCE IN EVERY ASPECT OF OUR OPERATIONS.
                            </p>
                        </div>
                    </div>
                    <div className='objective-card'>
                        <img className='objective-img' src={Objective5} />
                        <div className='objective-txtdiv'>
                            <h3 className='objective-title'>RELATIONSHIPS</h3>
                            <p className='objective-txt'>
                                OUR OBJECTIVE IS TO ESTABLISH STRONG AND POSITIVE BUSINESS RELATIONSHIPS WITH OUR CLIENTS. 
                                WE STRIVE TO BUILD TRUST THROUGH CONSISTENTLY EXCEPTIONAL SERVICE AND COMMUNICATION. <br/> <br/>
                                NURTURING THESE RELATIONSHIPS IS ESSENTIAL TO OUR LONG-TERM SUCCESS AND CLIENT SATISFACTION.
                            </p>
                        </div>
                    </div>
                    <div className='objective-card'>
                        <img className='objective-img' src={Objective6} />
                        <div className='objective-txtdiv'>
                            <h3 className='objective-title'>GROWTH</h3>
                            <p className='objective-txt'>
                                TO EXPAND OUR SERVICES, WE INVEST IN ADDITIONAL FLEET VEHICLES, INCREASE OUR TRANSPORTING CAPACITIES,
                                AND OFFER A GREATER VARIETY OF CUSTOMIZED SOLUTIONS. <br/> <br/>
                                OUR EXPANSION STRATEGY ALSO INCLUDES OPENING NEW LOCATIONS AND HIRING MORE STAFF TO MEET 
                                GROWING DEMANDS EFFECTIVELY. THESE INITIATIVES WILL ALLOW US TO ACCOMODATE AN INCREASING
                                NUMBER OF CLIENT REQUIREMENTS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}
export default About