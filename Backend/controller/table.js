const express = require('express');
const router = express.Router();
const Table = require('../model/table');
const Reservation = require('../model/reservation');
const createTable = async (req, res) => {
    try {
        const { restaurant_id, number, capacity } = req.body;
        const table = await Table.create({ restaurant_id, number, capacity });
        res.status(201).json({ message: "Table created successfully", table });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const getAllTables = async (req, res) => {
    try {
        const tables = await Table.findAll();
        res.status(200).json({ tables });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const getTableById = async (req, res) => {
    try {
        const tableId = req.params.id;
        const table = await Table.findByPk(tableId);
        if (!table) {
            return res.status(404).json({ message: "Table not found" });
        }
        res.status(200).json({ table });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const updateTable = async (req, res) => {
    try {
        const tableId = req.params.id;
        const { restaurant_id, number, capacity } = req.body;
        const table = await Table.findByPk(tableId);
        if (!table) {
            return res.status(404).json({ message: "Table not found" });
        }
        table.restaurant_id = restaurant_id;
        table.number = number;
        table.capacity = capacity;
        await table.save();
        res.status(200).json({ message: "Table updated successfully", table });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const deleteTable = async (req, res) => {
    try {
        const tableId = req.params.id;
        const table = await Table.findByPk(tableId);
        if (!table) {
            return res.status(404).json({ message: "Table not found" });
        }
        await table.destroy();
        res.status(200).json({ message: "Table deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};
const checkAvaiablity = async(req,res)=>{
     try {

        const {table_id,startDate,endDate} = req.query;

        const oerlappoingReservations = await Reservation.findAll({
            where: {
                table_id,
                startDate: {
                    [Op.lt]: endDate
                },
                endDate: {
                    [Op.gt]: startDate
                }
            }
        });
        if (oerlappoingReservations.length > 0) {
            return res.status(200).json({ message: "Table is not available for the given time" });
        }
        res.status(200).json({ message: "Table is available for the given time" });
        
     } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }

}
router.post('/', createTable);
router.get('/', getAllTables);
router.get('/:id', getTableById);
router.put('/:id', updateTable);
router.delete('/:id', deleteTable);

module.exports = router;
