import './Fleet.scss';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import FleetBg1 from '../assets/Images/FleetBg1.png';
import FleetBg2 from '../assets/Images/FleetBg2.png';
import FleetBg3 from '../assets/Images/FleetBg3.png';
import Truck1 from '../assets/Images/Truck1.png';
import Truck2 from '../assets/Images/Truck2.png';
import Truck3 from '../assets/Images/Truck3.png';


function Fleet () {
    

    return(
        <>
        <NavBar />
        <div className='fleetpage-div'>
            <div className='truck-page'>
                <img className='fleet-bg' src={FleetBg3} />
                <img className='truck-img1' src={Truck1} />
                <div className='fleet-txtdiv'>
                    <h1 className='fleetpage-title'>CONTAINER TRUCKS</h1>
                    <p className='fleet-infotxt'>
                        LENGTH: 19FT / 5.80 M <br className='fleet-br'/>
                        HEIGHT: 12FT / 3.66 M <br className='fleet-br'/>
                        WIDTH: 8FT /  2.43 M <br className='fleet-br'/>
                        <br className='fleet-br'/> <br/>
                        CAPACITY GROSS WEIGHT: <br className='fleet-br'/>
                        18,000 KG
                    </p>
                    <button className='fleet-btn'>BOOK THIS VEHICLE</button>
                </div>
            </div>
            <div className='wingvan-page'>
                <img className='fleet-bg wingvan' src={FleetBg2} />
                <img className='truck-img2' src={Truck2} />
                <div className='fleet-txtdiv wingvan'>
                    <h1 className='fleetpage-title'>WINGVAN</h1>
                    <p className='fleet-infotxt'>
                        LENGTH: 15FT / 4.58 M <br className='fleet-br'/>
                        HEIGHT: 7FT / 2.13 M <br className='fleet-br'/>
                        WIDTH: 6.8FT / 2.07 M <br className='fleet-br'/>
                        <br className='fleet-br'/> <br/>
                        CAPACITY GROSS WEIGHT: <br className='fleet-br'/>
                        4,200 KG
                    </p>
                    <button className='fleet-btn'>BOOK THIS VEHICLE</button>
                </div>
            </div>
            <div className='closedvan-page'>
                <img className='fleet-bg' src={FleetBg1} />
                <img className='truck-img3' src={Truck3} />
                <div className='fleet-txtdiv closed-van'>
                    <h1 className='fleetpage-title'>CLOSED VAN</h1>
                    <p className='fleet-infotxt'>
                        LENGTH: 14FT / 4.27 M <br className='fleet-br'/>
                        HEIGHT: 7.5FT / 2.29 M <br className='fleet-br'/>
                        WIDTH: 6.8FT /  2.07 M <br className='fleet-br'/>
                        <br className='fleet-br'/> <br/>
                        CAPACITY GROSS WEIGHT: <br className='fleet-br'/>
                        3,800 KG
                    </p>
                    <button className='fleet-btn'>BOOK THIS VEHICLE</button>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    );
}
export default Fleet