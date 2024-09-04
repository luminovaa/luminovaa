// src/services/warehouseProductService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const warehouseProductService = {
  getAllWarehouseProducts: async () => {
    return prisma.dm_warehouse_products.findMany();
  },
  getWarehouseProductById: async (id) => {
    return prisma.dm_warehouse_products.findUnique({ where: { id: parseInt(id) } });
  },
  createWarehouseProduct: async (warehouseProductData) => {
    return prisma.dm_warehouse_products.create({ data: warehouseProductData });
  },
  updateWarehouseProduct: async (id, warehouseProductData) => {
    return prisma.dm_warehouse_products.update({ where: { id: parseInt(id) }, data: warehouseProductData });
  },
  deleteWarehouseProduct: async (id) => {
    return prisma.dm_warehouse_products.delete({ where: { id: parseInt(id) } });
  },
};

module.exports = warehouseProductService;

// src/controllers/warehouseProductController.js
const warehouseProductService = require('../services/warehouseProductService');

const warehouseProductController = {
  getAllWarehouseProducts: async (req, res) => {
    try {
      const warehouseProducts = await warehouseProductService.getAllWarehouseProducts();
      res.json(warehouseProducts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching warehouse products' });
    }
  },
  getWarehouseProductById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const warehouseProduct = await warehouseProductService.getWarehouseProductById(id);
      if (warehouseProduct) {
        res.json(warehouseProduct);
      } else {
        res.status(404).json({ error: 'Warehouse product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching warehouse product' });
    }
  },
  createWarehouseProduct: async (req, res) => {
    try {
      const newWarehouseProduct = await warehouseProductService.createWarehouseProduct(req.body);
      res.status(201).json(newWarehouseProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error creating warehouse product' });
    }
  },
  updateWarehouseProduct: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedWarehouseProduct = await warehouseProductService.updateWarehouseProduct(id, req.body);
      res.json(updatedWarehouseProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error updating warehouse product' });
    }
  },
  deleteWarehouseProduct: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await warehouseProductService.deleteWarehouseProduct(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting warehouse product' });
    }
  },
};

module.exports = warehouseProductController;

// src/routes/warehouseProductRoutes.js
const express = require('express');
const warehouseProductController = require('../controllers/warehouseProductController');

const router = express.Router();

router.get('/', warehouseProductController.getAllWarehouseProducts);
router.get('/:id', warehouseProductController.getWarehouseProductById);
router.post('/', warehouseProductController.createWarehouseProduct);
router.put('/:id', warehouseProductController.updateWarehouseProduct);
router.delete('/:id', warehouseProductController.deleteWarehouseProduct);

module.exports = router;

// src/services/warehouseProductVariantService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const warehouseProductVariantService = {
  getAllWarehouseProductVariants: async () => {
    return prisma.dm_warehouse_product_variants.findMany();
  },
  getWarehouseProductVariantById: async (id) => {
    return prisma.dm_warehouse_product_variants.findUnique({ where: { id: parseInt(id) } });
  },
  createWarehouseProductVariant: async (warehouseProductVariantData) => {
    return prisma.dm_warehouse_product_variants.create({ data: warehouseProductVariantData });
  },
  updateWarehouseProductVariant: async (id, warehouseProductVariantData) => {
    return prisma.dm_warehouse_product_variants.update({ where: { id: parseInt(id) }, data: warehouseProductVariantData });
  },
  deleteWarehouseProductVariant: async (id) => {
    return prisma.dm_warehouse_product_variants.delete({ where: { id: parseInt(id) } });
  },
};

module.exports = warehouseProductVariantService;

// src/controllers/warehouseProductVariantController.js
const warehouseProductVariantService = require('../services/warehouseProductVariantService');

const warehouseProductVariantController = {
  getAllWarehouseProductVariants: async (req, res) => {
    try {
      const warehouseProductVariants = await warehouseProductVariantService.getAllWarehouseProductVariants();
      res.json(warehouseProductVariants);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching warehouse product variants' });
    }
  },
  getWarehouseProductVariantById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const warehouseProductVariant = await warehouseProductVariantService.getWarehouseProductVariantById(id);
      if (warehouseProductVariant) {
        res.json(warehouseProductVariant);
      } else {
        res.status(404).json({ error: 'Warehouse product variant not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching warehouse product variant' });
    }
  },
  createWarehouseProductVariant: async (req, res) => {
    try {
      const newWarehouseProductVariant = await warehouseProductVariantService.createWarehouseProductVariant(req.body);
      res.status(201).json(newWarehouseProductVariant);
    } catch (error) {
      res.status(500).json({ error: 'Error creating warehouse product variant' });
    }
  },
  updateWarehouseProductVariant: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedWarehouseProductVariant = await warehouseProductVariantService.updateWarehouseProductVariant(id, req.body);
      res.json(updatedWarehouseProductVariant);
    } catch (error) {
      res.status(500).json({ error: 'Error updating warehouse product variant' });
    }
  },
  deleteWarehouseProductVariant: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await warehouseProductVariantService.deleteWarehouseProductVariant(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting warehouse product variant' });
    }
  },
};

module.exports = warehouseProductVariantController;

// src/routes/warehouseProductVariantRoutes.js
const express = require('express');
const warehouseProductVariantController = require('../controllers/warehouseProductVariantController');

const router = express.Router();

router.get('/', warehouseProductVariantController.getAllWarehouseProductVariants);
router.get('/:id', warehouseProductVariantController.getWarehouseProductVariantById);
router.post('/', warehouseProductVariantController.createWarehouseProductVariant);
router.put('/:id', warehouseProductVariantController.updateWarehouseProductVariant);
router.delete('/:id', warehouseProductVariantController.deleteWarehouseProductVariant);

module.exports = router;

// Update src/app.js to include the new routes
// Add these lines with the other route imports
const warehouseProductRoutes = require('./routes/warehouseProductRoutes');
const warehouseProductVariantRoutes = require('./routes/warehouseProductVariantRoutes');

// Add these lines where you're using the routes
app.use('/api/warehouse-products', warehouseProductRoutes);
app.use('/api/warehouse-product-variants', warehouseProductVariantRoutes);
