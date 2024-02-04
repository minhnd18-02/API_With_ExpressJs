import { pool } from "../database/dbConnection.js";
import { getAllCountriesQuery, getCountryByIdQuery, addCountryQuery } from "../database/queriesCountries.js";

const getCountries = (request, response) => {
  pool.query(
    getAllCountriesQuery,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getCountryById = (request, response) => {
  const id = request.params.id;

  pool.query(
    getCountryByIdQuery,
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createCountry = (request, response) => {
  const { country_id, country_name, region_id } = request.body;

  pool.query(
    addCountryQuery,
    [country_id, country_name, region_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Country added Successfully`);
    }
  );
};

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     "UPDATE users SET name = $1, email = $2 WHERE id = $3",
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`User deleted with ID: ${id}`);
//   });
// };

export {
    getCountries,
    getCountryById,
    createCountry,
}
