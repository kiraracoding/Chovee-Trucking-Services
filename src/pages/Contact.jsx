
import './Contact.scss';
import NavBar from '../components/NavBar.jsx';
import ContactImg from '../assets/Images/ContactImg.png';
import FormImg from '../assets/Images/FormImg.jpg';
import Footer from '../components/Footer.jsx';
import { useEffect, useRef } from 'react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


function Contact () {

    const location = useLocation();
    const quoteSectionRef = useRef(null);

    useEffect(() => {
        if (location.state?.scrollTo === 'quote-section' && quoteSectionRef.current) {
            const sectionTop = quoteSectionRef.current.offsetTop;

            const additionalOffset = 100;

            window.scrollTo({
                top: sectionTop - additionalOffset,
                behavior: 'smooth',
            });
        }
    }, [location]);

    const [errorMessage, setErrorMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(true);
        setTimeout(() => {
            setErrorMessage(false);
        }, 4000);
    };

    return(
        <>
        <NavBar />
        <div className='contactpage-div'>
            <div className='contact-left-div'>
                <h1 className='contact-page-title'>CONTACT US</h1>
                <div className='contact-operator-div'>
                    <h2 className='contact-operator-name'>JULIUS MERANDILLA</h2>
                    <h4 className='contact-operator-info'>CHIEF HEAD OPERATOR</h4>
                    <h4 className='contact-operator-info'>CHOVEE TRUCKING SERVICES</h4>
                    <p className='contact-infotxt'>JULIUSMERANDILLA@GMAIL.COM</p>
                </div>
                <div className='contact-address-div'>
                    <h4 className='contact-address-title'>OFFICE ADDRESS: </h4>
                    <p className='contact-infotxt'>BLOCK 33 A LOT 19 PHASE 2 AREA 2 <br className='contact-br'/>
                       DAGAT-DAGATAN, NAVOTAS CITY <br className='contact-br'/>
                       METRO MANILA, PHILIPPINES
                    </p>
                </div>
                <div className='contact-time-div'>
                    <h4 className='contact-time-title'>OFFICE HOURS: </h4>
                    <p className='contact-infotxt'>MONDAY TO FRIDAY <br className='contact-br'/>
                       8:00 AM TO 4:00 PM
                    </p>
                </div>
            </div>
            <div className='contact-right-div'>
                <div>
                    <p className='contact-infotxt right-div'><strong>PHONE NUMBER :</strong> +123 4567</p>
                    <p className='contact-infotxt right-div'><strong>FAX NUMBER :</strong> +123456</p>
                    <p className='contact-infotxt right-div'><strong>MOBILE NUMBER :</strong>+63912345678</p>
                    <p className='contact-infotxt right-div'><strong>EMAIL :</strong>CHOVEETRUCK.SERVICES@GMAIL.COM</p>
                </div>
                <img className='contact-hero-img' src={ContactImg}/>
            </div>
        </div>
        <div className='form-page' ref={quoteSectionRef}>
                <img className='form-img' src={FormImg} />
                <div className='form-page-div'>
                    <div className='form-heading'>
                        <h2 className='form-title'>GET A SERVICE QUOTE</h2>
                        <p className='form-instructions'>PLEASE COMPLETE THE FORM BELOW, WE WILL SEND THE REQUESTED QUOTE AND CONTACT YOU VIA EMAIL</p>
                    </div>
                    <form className='form-div' onSubmit={handleSubmit}>
                        <div className='form-top'>
                            <div className='form-left'>
                                <div className='form-group'>
                                    <label className='form-label'>FULL NAME:</label>
                                    <input className='form-input' placeholder="Juan Dela Cruz" required></input>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>MOBILE NUMBER:</label>
                                    <input className='form-input' placeholder='0917 123 4567'></input>
                                </div>
                                <div className='form-group'>
                                <label className='form-label'>TRUCK TYPE:</label>
                                <select className='form-input adjust'>
                                    <option value="" disabled selected>Select Truck</option>
                                    <option>Container Truck</option>
                                    <option>Wingvan</option>
                                    <option>Closed Van</option>
                                </select>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>DATE</label>
                                    <input className='form-input date' type="datetime-local"></input>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>PICK-UP POINT:</label>
                                    <select className='form-input adjust'>
                                    <option value="" disabled selected>Select Pick-up Point</option>
                                        <option>ALBAY</option>
                                        <option>BATAAN</option>
                                        <option>BATANGAS</option>
                                        <option>BENGUET</option>
                                        <option>BULACAN</option>
                                        <option>CAGAYAN</option>
                                        <option>CAMARINES NORTE</option>
                                        <option>CAMARINES SUR</option>
                                        <option>CAVITE</option>
                                        <option>ILOCOS NORTE</option>
                                        <option>ILOCOS SUR</option>
                                        <option>ISABELA</option>
                                        <option>LAGUNA</option>
                                        <option>LA UNION</option>
                                        <option>METRO MANILA</option>
                                        <option>NUEVA ECIJA</option>
                                        <option>NUEVA VIZCAYA</option>
                                        <option>PAMPANGA</option>
                                        <option>PANGASINAN</option>
                                        <option>QUEZON</option>
                                        <option>RIZAL</option>
                                        <option>SORSOGON</option>
                                        <option>TARLAC</option>
                                        <option>ZAMBALES</option>
                                    </select>
                                </div>
                            </div>
                            <div className='form-right'>
                                <div className='form-group'>
                                    <label className='form-label'>COMPANY NAME:</label>
                                    <input className='form-input' placeholder="Your Company's Name"></input>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>EMAIL ADDRESS:</label>
                                    <input className='form-input' placeholder='juandelacruz@example.com'></input>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>TYPE OF CARGO:</label>
                                    <input className='form-input' placeholder='YOUR CARGO TYPE'></input>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>CARGO WEIGHT IN KG:</label>
                                    <input className='form-input' type='number' placeholder='0'></input>
                                </div>
                                <div className='form-group'>
                                    <label className='form-label'>DELIVERY POINT:</label>
                                    <select className='form-input adjust'>
                                        <option value="" disabled selected>Select Delivery Point</option>
                                        <option>ALBAY</option>
                                        <option>BATAAN</option>
                                        <option>BATANGAS</option>
                                        <option>BENGUET</option>
                                        <option>BULACAN</option>
                                        <option>CAGAYAN</option>
                                        <option>CAMARINES NORTE</option>
                                        <option>CAMARINES SUR</option>
                                        <option>CAVITE</option>
                                        <option>ILOCOS NORTE</option>
                                        <option>ILOCOS SUR</option>
                                        <option>ISABELA</option>
                                        <option>LAGUNA</option>
                                        <option>LA UNION</option>
                                        <option>METRO MANILA</option>
                                        <option>NUEVA ECIJA</option>
                                        <option>NUEVA VIZCAYA</option>
                                        <option>PAMPANGA</option>
                                        <option>PANGASINAN</option>
                                        <option>QUEZON</option>
                                        <option>RIZAL</option>
                                        <option>SORSOGON</option>
                                        <option>TARLAC</option>
                                        <option>ZAMBALES</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className='submit-btn'>SUBMIT</button>
                    </form>
                    {errorMessage && (
                        <div className="error-popup">
                            An error has occurred on our end. Please try again later.
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Contact