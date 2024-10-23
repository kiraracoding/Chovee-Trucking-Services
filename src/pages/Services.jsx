import './Services.scss';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import ServicesImg from '../assets/Images/ServicesImg.jpg';
import Map from '../components/Map.jsx';
import { useNavigate } from 'react-router-dom';

function Services () {
    const navigate = useNavigate();

    const handleViewFleet = () => {
        navigate('/fleet');
    };

    return(
        <>
        <NavBar/>
        <div className='services-page'>
            <div className='services-div'>
                <div className='services-imgdiv'>
                    <img src={ServicesImg} className='services-img'/>
                </div>
                <div className='services-txtdiv'>
                    <h1 className='services-title'>SERVICES</h1>
                    <p className='services-txt'>
                        OUR SERVICES WOULD BE OFFERING VARIOUS RANGE OF  FLEET VEHICLES
                        THAT ARE CAPABLE OF LOCALLY TRANSPORTING LOW TO HIGH-VOLUME LOADS 
                        OF TRANSPORT TO CATER EVERY TYPE OF CARGO FOR EVERY CUSTOMER IN EVERY INDUSTRY.
                        <br/><br/>
                        OUR SERVICES WOULD INCLUDE LOADING IMPORT CARGOES FROM THE LOCAL PORT AND 
                        DELIVERING THEM STRAIGHT TO YOUR WAREHOUSE OR TRANSPORTING EXPORT CARGOES FROM 
                        YOUR WAREHOUSE TO THE LOCAL PORT.
                    </p>
                    <button className='services-btn' onClick={handleViewFleet}>VIEW ALL FLEET</button>
                </div>
            </div>
        </div>
        <img src={ServicesImg} className='services-img2'/>
        <Map/>
        <Footer/>
        </>
    );
}
export default Services