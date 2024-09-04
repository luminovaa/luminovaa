// src/services/warehouseService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const warehouseService = {
  getAllWarehouses: async () => {
    return prisma.dm_warehouses.findMany();
  },
  getWarehouseById: async (id) => {
    return prisma.dm_warehouses.findUnique({ where: { id: parseInt(id) } });
  },
  createWarehouse: async (warehouseData) => {
    return prisma.dm_warehouses.create({ data: warehouseData });
  },
  updateWarehouse: async (id, warehouseData) => {
    return prisma.dm_warehouses.update({ where: { id: parseInt(id) }, data: warehouseData });
  },
  deleteWarehouse: async (id) => {
    return prisma.dm_warehouses.delete({ where: { id: parseInt(id) } });
  },
};

module.exports = warehouseService;

// src/controllers/warehouseController.js
const warehouseService = require('../services/warehouseService');

const warehouseController = {
  getAllWarehouses: async (req, res) => {
    try {
      const warehouses = await warehouseService.getAllWarehouses();
      res.json(warehouses);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching warehouses' });
    }
  },
  getWarehouseById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const warehouse = await warehouseService.getWarehouseById(id);
      if (warehouse) {
        res.json(warehouse);
      } else {
        res.status(404).json({ error: 'Warehouse not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching warehouse' });
    }
  },
  createWarehouse: async (req, res) => {
    try {
      const newWarehouse = await warehouseService.createWarehouse(req.body);
      res.status(201).json(newWarehouse);
    } catch (error) {
      res.status(500).json({ error: 'Error creating warehouse' });
    }
  },
  updateWarehouse: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedWarehouse = await warehouseService.updateWarehouse(id, req.body);
      res.json(updatedWarehouse);
    } catch (error) {
      res.status(500).json({ error: 'Error updating warehouse' });
    }
  },
  deleteWarehouse: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await warehouseService.deleteWarehouse(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting warehouse' });
    }
  },
};

module.exports = warehouseController;

// src/routes/warehouseRoutes.js
const express = require('express');
const warehouseController = require('../controllers/warehouseController');

const router = express.Router();

router.get('/', warehouseController.getAllWarehouses);
router.get('/:id', warehouseController.getWarehouseById);
router.post('/', warehouseController.createWarehouse);
router.put('/:id', warehouseController.updateWarehouse);
router.delete('/:id', warehouseController.deleteWarehouse);

module.exports = router;

// Update src/app.js to include the new routes
// Add this line with the other route imports
const warehouseRoutes = require('./routes/warehouseRoutes');

// Add this line where you're using the routes
app.use('/api/warehouses', warehouseRoutes);
