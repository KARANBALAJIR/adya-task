
import React, { useState } from 'react';
import Header from './Home'; 
import RestaurantTableForm from './RestaurantTableForm'; 
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import food4 from '../images/food4.jpg';
import food5 from '../images/food5.jpg';
import food6 from '../images/food6.jpg';
import food7 from '../images/food7.jpg';
import food8 from '../images/food8.jpg';
import food9 from '../images/food9.jpg';
import food10 from '../images/food10.jpg';

const Booking = () => {
  const cuisinesData = ['Italian', 'Mexican', 'Chinese', 'Indian', 'Japanese'];
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    if (selectedCuisines.includes(value)) {
      setSelectedCuisines(selectedCuisines.filter(cuisine => cuisine !== value));
    } else {
      setSelectedCuisines([...selectedCuisines, value]);
    }
  };

  const featuresData = ['Free Wi-Fi', 'Outdoor Seating', 'Vegetarian Options', 'Live Music'];

  const restaurantMenus = [
    { name: 'Spaghetti Carbonara', description: 'Pasta with bacon, eggs, and Parmesan cheese', price: 'Rs:759', image: food1 },
    { name: 'Tacos al Pastor', description: 'Marinated pork tacos with pineapple', price: 'Rs:1000', image: food2 },
    { name: 'Kung Pao Chicken', description: 'Stir-fried chicken with peanuts, vegetables, and chili peppers', price: 'Rs:1020', image: food3 },
    { name: 'Butter Chicken', description: 'Chicken curry cooked in a creamy tomato sauce', price: 'Rs:850', image: food4 },
    { name: 'Margherita Pizza', description: 'Classic pizza topped with tomato sauce, mozzarella, and basil', price: 'Rs:150', image: food5 },
    { name: 'Sushi Platter', description: 'Assorted sushi rolls with fresh fish and rice', price: 'Rs:400', image: food6 },
    { name: 'Pad Thai', description: 'Stir-fried rice noodles with shrimp, tofu, peanuts, and egg', price: 'Rs:40', image: food7 },
    { name: 'Burger and Fries', description: 'Juicy beef burger with crispy fries', price: 'Rs:408', image: food8 },
    { name: 'Miso Soup', description: 'Traditional Japanese soup with tofu, seaweed, and green onions', price: 'Rs:485', image: food9 },
    { name: 'Pasta Primavera', description: 'Vegetarian pasta with assorted fresh vegetables and marinara sauce', price: 'Rs:950', image: food10 },
  ]

  const [showForm, setShowForm] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className='overflow-x-hidden'>
      <Header />

      <div className="container mx-auto flex py-8 ml-6 justify-start">
        <div className="w-1/4 pr-8 bg-white rounded shadow-md">
          <div className="mb-4">
            <h2 className="text-lg font-semibold ml-4 mb-2 mt-16 ">Quick Filters</h2>
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 ml-4">Cuisines</h3>
              {cuisinesData.map(cuisine => (
                <div key={cuisine} className="flex items-center ml-4">
                  <input
                    type="checkbox"
                    id={cuisine}
                    value={cuisine}
                    checked={selectedCuisines.includes(cuisine)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  <label htmlFor={cuisine}>{cuisine}</label>
                </div>
              ))}
            </div>
            <div className="mb-4 ml-4">
              <h3 className="text-sm font-semibold mb-2">Tags</h3>
              <input type="text" placeholder="Search" className="border border-gray-300 rounded px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 ml-4">Features</h3>
              {featuresData.map(feature => (
                <div key={feature} className="flex items-center ml-4">
                  <input
                    type="checkbox"
                    id={feature}
                    value={feature}
                    className="mr-2"
                  />
                  <label htmlFor={feature}>{feature}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-3/4 ml-4 mt-8">
          <div className="container mx-auto py-8 mt-0"> 
            <h1 className="text-2xl font-semibold mb-4">Restaurant Menus</h1>
            <div className="grid grid-cols-2 gap-4">
              {restaurantMenus.map((menu, index) => (
                <div key={index} className="bg-white rounded shadow-md p-4 mb-4 relative" onClick={() => handleMenuClick(menu)}>
                  <img src={menu.image} alt={menu.name} className="w-32 h-32 object-cover mb-4" />
                  <h2 className="text-lg font-semibold mb-2">{menu.name}</h2>
                  <p className="text-gray-700 mb-2">{menu.description}</p>
                  <p className="text-gray-700 font-semibold">{menu.price}</p>
                  <button onClick={() => handleMenuClick(menu)} className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showForm && <RestaurantTableForm menu={selectedMenu} onClose={handleCloseForm} />}
    </div>
  );
};

export default Booking;
