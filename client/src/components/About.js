import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Home';
import Rating from 'react-rating-stars-component';

import restaurant1 from '../images/restaurant1.jpg'; 
import restaurant2 from '../images/restaurant2.jpg'; 
import restaurant3 from '../images/restaurant3.jpg'; 
import restaurant4 from '../images/restaurant4.jpg'; 
import restaurant5 from '../images/restaurant5.jpg'; 
import restaurant6 from '../images/restaurant6.jpg'; 
import restaurant7 from '../images/restaurant7.jpg'; 
import restaurant8 from '../images/restaurant8.jpg'; 
import restaurant9 from '../images/restaurant9.jpg'; 
import restaurant10 from '../images/restaurant10.jpg'; 
import food1 from '../images/food1.jpg';
import food5 from '../images/food5.jpg';
import food6 from '../images/food6.jpg';
import food10 from '../images/food10.jpg';


const BestOffers = () => {
  const offers = [
    { title: 'Chicken Biriyani', discount: '15%', image: food1, rating: 4.5 },
    { title: 'Fried Rice', discount: '20%', image: food5, rating: 3.8 },
    { title: 'Mutton Biriyani', discount: '25%', image: food6, rating: 4.2 },
    { title: 'Veg Biryani', discount: '30%', image: food10, rating: 4.7 },
  ];

const additionalCards = [
    { title: 'Spice Fusion Bistro', image: restaurant1, rating: 4.5 },
    { title: 'Harvest Table Kitchen', image: restaurant2, rating: 3.8 },
    { title: 'Oceanic Blue Grill ', image: restaurant3, rating: 4.2 },
    { title: 'Fireside Tavern & Grill', image: restaurant4, rating: 4.7 },
    { title: 'Savory Haven Cafe', image: restaurant5, rating: 4.0 },
    { title: 'Urban Eats Bistro', image: restaurant6, rating: 4.3 },
    { title: 'Golden Spoon Diner', image: restaurant7, rating: 4.6 },
    { title: 'Blissful Bites Brasserie', image: restaurant8, rating: 3.9 },
    { title: 'Zenith Heights Eatery', image: restaurant9, rating: 4.8 },
    { title: 'Rustic Roots Restaurant',image:restaurant10, rating: 4.1 }
];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <div className="container mx-auto py-8 mt-0">
        <h1 className="text-2xl font-semibold mb-4 ml-6 mt-16">Best Offers</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-md">
              <img src={offer.image} alt={offer.title} className="mb-4 rounded" />
              <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-2">Discount: {offer.discount}</p>
              <Rating
                value={offer.rating}
                count={5}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              <div className="bg-purple-500 text-white px-4 py-2 rounded">
                Flat 25% Offer Instant Discount
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-semibold my-8 ml-6">Featured Restaurants</h1>
        <Slider {...settings}>
          {additionalCards.map((card, index) => (
            <Link key={index} to="/Booking">
              <div className="bg-white p-6 rounded-md w-full sm:w-auto shadow-lg mb-8">
                <img src={card.image} alt={card.title} className="mb-4 rounded" style={{ width: '100%', height: '200px' }} />
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <Rating
                  value={card.rating}
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  edit={false}
                />
                <p className="text-gray-600">Available in: {card.location}</p>
              </div>
            </Link>
          ))}
        </Slider>
        <h1 className="text-2xl font-semibold my-8 ml-6">Available in these places</h1>
        <p className="mb-8 ml-6">
          <span className="mr-16">Chennai</span>
          <span className="mr-16">Coimbatore</span>
          <span className="mr-16">Madurai</span>
          <span className="mr-16">Tiruchirappalli</span>
          <span className="mr-16">Salem</span>
          <span className="mr-16">Tiruppur</span>
          <span className="mr-16">Erode</span>
          <span className="mr-16">Tirunelveli</span>
          <span className="mr-16">Vellore</span>
          <span className="mr-16">Thanjavur</span>
        </p>
        <p className='mb-8 ml-6'>
          <span className="mr-16">Dindigul</span>
          <span className="mr-16">Kanchipuram</span>
          <span className="mr-16">Tiruvannamalai</span>
          <span className="mr-16">Karur</span>
          <span className="mr-16">Namakkal</span>
          <span className="mr-16">Sivaganga</span>
          <span className="mr-16">Nagapattinam</span>
          <span className="mr-16">Ramanathapuram</span>
          <span>Virudhunagar</span>
        </p>
        <div className="grid grid-cols-5 gap-24 ml-6">
    <div className="col-span-1">
        <h1 className="text-xl font-semibold">Discover</h1>
        <p className="mt-2 mr-16">Trending Restaurant</p>
    </div>
    <div className="col-span-1">
        <h1 className="text-xl font-semibold">About</h1>
        <p className="mt-2 mr-16">About Us</p>
        <p className="mt-2 mr-16">Blog</p>
        <p className="mt-2 mr-16">Terms & Conditions</p>
        <p className="mt-2 mr-16">Privacy & Policy</p>
    </div>
    <div className="col-span-1">
        <h1 className="text-xl font-semibold">Top Cuisines</h1>
        <p className="mt-2 mr-16">Chinese</p>
        <p className="mt-2 mr-16">Italian</p>
        <p className="mt-2 mr-16">North Indian</p>
        <p className="mt-2 mr-16">Kerala</p>
        <p className="mt-2 mr-16">Mexican</p>
        <p className="mt-2 mr-16">Multi-Cusine</p>
        <p className="mt-2 mr-16">South-Indian</p>
    </div>
    <div className="col-span-1">
        <h1 className="text-xl font-semibold">Top Facilities</h1>
        <p className="mt-2 mr-16">Fine Dinning</p>
        <p className="mt-2 mr-16">5 Star</p>
        <p className="mt-2 mr-16">Sea Food</p>
    </div>
    <div className="col-span-1">
        <h1 className="text-xl font-semibold">Top Locations</h1>
        <p className="mt-2">Velachery</p>
        <p className="mt-2">Nungambakkam</p>
        <p className="mt-2">Nungambakkam</p>
        <p className="mt-2">Anna Nagar</p>
        <p className="mt-2">Adyar</p>
        <p className="mt-2">Beasant Nagar</p>
        <p className="mt-2">Mahabalipuram</p>
    </div>
</div>


      </div>
    </div>
  );
};

export default BestOffers;
