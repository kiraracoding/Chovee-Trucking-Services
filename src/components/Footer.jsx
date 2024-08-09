
import './Footer.scss';
import FooterLogo from '../assets/Images/FooterLogo.png';
import FooterPhone from '../assets/Icons/FooterPhone.svg';
import FooterEmail from '../assets/Icons/FooterEmail.svg';
import FooterAddress from '../assets/Icons/FooterAddress.svg';
import FooterFacebook from '../assets/Icons/FooterFacebook.svg';
import FooterInsta from '../assets/Icons/FooterInsta.svg';
import FooterTwitter from '../assets/Icons/FooterTwitter.svg';


function Footer () {

    return(
        <div className='footer-div'>
            <img className="footer-logo" src={FooterLogo}/>
            <div className='contact-div'>
                <h5 className='footerinfo-title'>CONTACT US :</h5>
                <div className='footerinfo-div'>
                    <img className='footer-icon' src={FooterPhone} />
                    <p className='footer-txt'>+639 1234 5678</p>
                </div>
                <div className='footerinfo-div'>
                    <img className='footer-icon' src={FooterEmail} />
                    <p className='footer-txt'>choveetrucking.service@gmail.com</p>
                </div>
                <div className='footerinfo-div'>
                    <img className='footer-icon' src={FooterAddress} />
                    <p className='footer-txt'>
                        BLOCK 33 A LOT 19 <br/>
                        PHASE 2 AREA 2 <br/>
                        DAGAT-DAGATAN, NAVOTAS CITY <br/>
                        METRO MANILA, PHILIPPINES
                    </p>
                </div>
            </div>
            <div className='visit-div'>
                <h5 id="visitinfo-title" className='footerinfo-title'>VISIT US :</h5>
                <div className='visitinfo-div'>
                    <h6 className='footer-subtitle'>OFFICE HOURS</h6>
                    <p className='footer-txt'>
                        MONDAY TO FRIDAY <br/>
                        8:00 AM TO 4:00 PM
                    </p>
                </div>
                <div className='visitinfo-div'>
                    <h6 className='footer-subtitle'>OPERATING HOURS</h6>
                    <p className='footer-txt'>AROUND THE CLOCK</p>
                </div>
            </div>
            <div className='follow-div'>
                <h5 className='footerinfo-title'>FOLLOW US :</h5>
                <div className='footerinfo-div'>
                    <img className='footer-icon' src={FooterFacebook}/>
                    <p className='footer-txt'>Chovee Trucking Services</p>
                </div>
                <div className='footerinfo-div'>
                    <img className='footer-icon' src={FooterInsta}/>
                    <p className='footer-txt'>choveetrucking.services</p>
                </div>
                <div className='footerinfo-div'>
                    <img className='footer-icon' src={FooterTwitter}/>
                    <p className='footer-txt'>@choveetrucking</p>
                </div>
            </div>
        </div>
    );
}

export default Footer