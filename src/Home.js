import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            </div>
            <div className="home__row">
                <Product title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg' rating={5} />
                <Product title='TCL 32-inch 3-Series 720p Roku Smart TV - 32S335, 2021 Model ' price={145.99} image='https://images-na.ssl-images-amazon.com/images/I/81hxjH73qNL._AC_UL160_SR160,160_.jpg' rating={3} />
            </div>
            <div className="home__row">
                <Product title='All-new Echo Dot with clock (4th Gen) - Glacier White - bundle with LIFX Smart Bulb (Wi-Fi)' price={69.98} image='https://m.media-amazon.com/images/I/51Aiq9Rk6LL._AC_UY218_.jpg' />
                <Product title='Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery, Pink/Gold, One Size (S & L Bands Included) ' price={229} image='https://images-na.ssl-images-amazon.com/images/I/71wEvOoTCvL._AC_UL160_SR160,160_.jpg' />
                <Product title='OnePlus 8 Pro 5G iN2020 128GB 8GB RAM (GSM Only, No CDMA) - Glacial Green' price={699} image='https://m.media-amazon.com/images/I/81knqIxxBPL._AC_UY218_.jpg' />
            </div>
            <div className="home__row">
                <Product title='SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in + HW-T650 3.1ch Soundbar with 3D Surround Sound (2020) ' price={400} image='https://m.media-amazon.com/images/I/41HUkfTDYFL._AC_UY218_.jpg' />

            </div>

        </div>
    )
}

export default Home
