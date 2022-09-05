import { Router } from "express";
import { getCity, addCity } from "../weather_Controller/weather_controller.js";

const router = Router();

router.get('/', getCity);
router.post('/', addCity);

export default router;