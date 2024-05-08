const express = require('express');
const router = express.Router();
const Restaurant = require('../model/restaurant');

// Create Restaurant
const createRestaurant = async (req, res) => {
    try {
        const { name, address, phone, email } = req.body;
        const restaurant = await Restaurant.create({ name, address, phone, email });
        res.status(201).json({ message: "Restaurant created successfully", restaurant });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Get All Restaurants
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.status(200).json({ restaurants });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Get Restaurant by ID
const getRestaurantById = async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.status(200).json({ restaurant });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Update Restaurant
const updateRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const { name, address, phone, email } = req.body;
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        restaurant.name = name;
        restaurant.address = address;
        restaurant.phone = phone;
        restaurant.email = email;
        await restaurant.save();
        res.status(200).json({ message: "Restaurant updated successfully", restaurant });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Delete Restaurant
const deleteRestaurant = async (req, res) => {
    try {
        const restaurantId = req.params.id;
        const restaurant = await Restaurant.findByPk(restaurantId);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        await restaurant.destroy();
        res.status(200).json({ message: "Restaurant deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Define Routes
router.post('/', createRestaurant);
router.get('/', getAllRestaurants);
router.get('/:id', getRestaurantById);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

module.exports = router;
