import express from 'express';
import { addVenue, displayVenues } from '../Controllers/venueController.js';

const router = express.Router();

router.get('/api/data',displayVenues);
router.post('/addVenue',addVenue);

export default router;