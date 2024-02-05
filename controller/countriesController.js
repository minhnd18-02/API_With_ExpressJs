import { pool } from "../database/dbConnection.js";
import {
  getAllCountriesQuery,
  getCountryByIdQuery,
  addCountryQuery,
  deleteCountryQuery,
  updateCountryQuery,
  checkIdExistsQuery,
} from "../database/queriesCountries.js";

const getCountries = (request, response) => {
  pool.query(getAllCountriesQuery, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCountryById = (request, response) => {
  const id = request.params.id;

  pool.query(getCountryByIdQuery, [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createCountry = async (request, response) => {
  const { country_id, country_name, region_id } = request.body;

  const checkResult = await pool.query(checkIdExistsQuery, [country_id]);
  if (checkResult.rows.length) {
    response.status(409).send(`Country with Id ${country_id} already exists`);
  } else {
    await pool.query(
      addCountryQuery,
      [country_id, country_name, region_id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Country added Successfully`);
      }
    );
  }
};

const updateCountry = async (request, response) => {
  const id = request.params.id;
  const { country_name, region_id } = request.body;

  const checkResult = await pool.query(checkIdExistsQuery, [id]);
  if (!checkResult.rows.length) {
    response.status(409).send(`Country with Id ${id} does not exists`);
  } else {
    await pool.query(
      updateCountryQuery,
      [country_name, region_id, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`Country modified with ID: ${id}`);
      }
    );
  }
};

const deleteCountry = async (request, response) => {
  const id = request.params.id;

  const checkResult = await pool.query(checkIdExistsQuery, [id]);
  if (!checkResult.rows.length) {
    response.status(409).send(`Country with Id ${id} does not exists`);
  } else {
    await pool.query(deleteCountryQuery, [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Country deleted successfully");
    });
  }
};

export {
  getCountries,
  getCountryById,
  createCountry,
  deleteCountry,
  updateCountry,
};
