import React from 'react';
import './Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            
            <div className="home_row">
                <Product
                title="Social Psychology Paperback – 8 November 2019" 
                price={540}
                image="https://images-na.ssl-images-amazon.com/images/I/51GBvMz2auL._SX376_BO1,204,203,200_.jpg"
                 rating={5}
            
            /> 
            <Product
            title="Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette (Silent Movement, Black Frame)"
            price={599.00}
            image="https://images-na.ssl-images-amazon.com/images/I/81XEPquUw3L._SL1500_.jpg"
            rating={4}
            
            
            /></div>
            <div className="home_row"><Product 
             title="Fossil Grant Chronograph Analog Black Dial Men's Watch - FS4832"
             price={7,500}
             image="https://images-na.ssl-images-amazon.com/images/I/71GhdYtz8cL._UL1500_.jpg"
             rating={5}
            
            />
            <Product 
            
            title="All-new Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video "
            price={2,999.00}
            image="https://images-na.ssl-images-amazon.com/images/I/61ME1vElBKL._SL1000_.jpg"
            rating={3}
            />
            <Product 
             title="Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor"
             price={10,100}
             image="https://images-na.ssl-images-amazon.com/images/I/71yYaNztZ0L._SL1500_.jpg"
             rating={3}
            />
            </div>
            <div className="home_row"><Product 
             title="OnePlus Y Series 108 cm (43 inches) Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
             price={15,430}
             image="https://images-na.ssl-images-amazon.com/images/I/812wg%2BpfXAL._SL1500_.jpg"
             rating={3}
            /></div>
            </div>
            
        </div>
    )
}

export default Home
