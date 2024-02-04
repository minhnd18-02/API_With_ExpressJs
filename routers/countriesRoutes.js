import express from "express";
import { getCountries, getCountryById, createCountry} from "../controller/countriesController.js";

const router = express.Router();

router.get("/getAll", getCountries);
router.get("/getById/:id", getCountryById);
router.post("/", createCountry);

export { router };
