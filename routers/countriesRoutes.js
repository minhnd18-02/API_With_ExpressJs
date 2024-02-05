import express from "express";
import {
  getCountries,
  getCountryById,
  createCountry,
  deleteCountry,
  updateCountry,
} from "../controller/countriesController.js";

const router = express.Router();

router.get("/getAll", getCountries);
router.get("/getById/:id", getCountryById);
router.post("/", createCountry);
router.delete("/deleteById/:id", deleteCountry);
router.put("/update/:id", updateCountry);

export { router };
