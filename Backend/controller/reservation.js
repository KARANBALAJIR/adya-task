const express = require('express');
const router = express.Router();
const Reservation = require('../model/reservation');

// Create Reservation
const createReservation = async (req, res) => {
    try {
        const { user_id, restaurant_id, table_id, start_date_time, end_date_time, guests, special_requests } = req.body;
        const reservation = await Reservation.create({ user_id, restaurant_id, table_id, start_date_time, end_date_time, guests, special_requests });
        res.status(201).json({ message: "Reservation created successfully", reservation });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Get All Reservations
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.findAll();
        res.status(200).json({ reservations });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Get Reservation by ID
const getReservationById = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const reservation = await Reservation.findByPk(reservationId);
        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json({ reservation });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Update Reservation
const updateReservation = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const { user_id, restaurant_id, table_id, start_date_time, end_date_time, guests, special_requests } = req.body;
        const reservation = await Reservation.findByPk(reservationId);
        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        reservation.user_id = user_id;
        reservation.restaurant_id = restaurant_id;
        reservation.table_id = table_id;
        reservation.start_date_time = start_date_time;
        reservation.end_date_time = end_date_time;
        reservation.guests = guests;
        reservation.special_requests = special_requests;
        await reservation.save();
        res.status(200).json({ message: "Reservation updated successfully", reservation });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Delete Reservation
const deleteReservation = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const reservation = await Reservation.findByPk(reservationId);
        if (!reservation) {
            return res.status(404).json({ message: "Reservation not found" });
        }
        await reservation.destroy();
        res.status(200).json({ message: "Reservation deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

// Define Routes
router.post('/', createReservation);
router.get('/', getAllReservations);
router.get('/:id', getReservationById);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

module.exports = router;
