import './Map.scss'
import React, {useState} from 'react';
import MapImg from '../assets/Images/MapImg.png';
import PointIcon from '../assets/Icons/PointIcon.png';

const cityNames = [
    'SORSOGON', 'ALBAY', 'CAMARINES SUR', 'CAMARINES NORTE', 'QUEZON', 'BATANGAS', 
    'CAVITE', 'LAGUNA', 'MANILA', 'RIZAL', 'BULACAN', 'BATAAN', 'PAMPANGA', 'TARLAC', 
    'ZAMBALES', 'NUEVA ECIJA', 'PANGASINAN', 'BENGUET', 'NUEVA VIZCAYA', 'LA UNION', 
    'ISABELA', 'ILOCOS SUR', 'ILOCOS NORTE', 'CAGAYAN'
  ];

const Map = () => {
    
    const [visiblePoints, setVisiblePoints] = useState(Array(24).fill(false));

    const regions = [
        { name: 'METRO MANILA (NCR)', points: [9] },
        { name: 'CENTRAL LUZON (REGION III)', points: [11, 12, 13, 14, 15, 16] },
        { name: 'CALABARZON (REGION IV-A)', points: [5, 6, 7, 8, 10] },
        { name: 'ILOCOS REGION (REGION I)', points: [17, 20, 22, 23] },
        { name: 'CORDILLERA ADMINISTRATIVE REGION (CAR)', points: [18] },
        { name: 'CAGAYAN VALLEY (REGION II)', points: [19, 21, 24] },
        { name: 'BICOL REGION', points: [1, 2, 3, 4] },
    ];

    const toggleVisibility = (regionIndex) => {
        const newVisiblePoints = Array(24).fill(false);
        regions[regionIndex].points.forEach(pointIndex => {
          newVisiblePoints[pointIndex - 1] = true; // Adjust for zero-based index
        });
        setVisiblePoints(newVisiblePoints);
      };
    

    return (
        <div className='map-page'>
        <div className='map-txtdiv'>
            <h1 className='map-pagetitle'>SERVICE AREAS</h1>
            <ul className='map-regions'>
                {regions.map((region, index) => (
                <li key={index} onClick={() => toggleVisibility(index)}>{region.name}</li>
                ))}
            </ul>
        </div>
        <div className='map-container'>
        <img className="map-img" src={MapImg} alt="Map" />
        {cityNames.map((city, index) => (
          <img
            key={index}
            className={`point-icon point-${index + 1} ${visiblePoints[index] ? 'visible' : ''}`}
            src={PointIcon}
            alt={`Point ${index + 1}`}
          />
        ))}
        {cityNames.map((city, index) => (
          <p
            key={index}
            className={`point-name point-${index + 1} ${visiblePoints[index] ? 'visible' : ''}`}
          >
            {city}
          </p>
        ))}
        </div>
    </div>
    );
}

export default Map



