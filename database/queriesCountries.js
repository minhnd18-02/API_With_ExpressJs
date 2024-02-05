const getAllCountriesQuery = "SELECT * FROM countries ORDER BY country_id ASC";
const getCountryByIdQuery = "SELECT * FROM countries WHERE country_id = $1";
const addCountryQuery = "INSERT INTO countries (country_id, country_name, region_id) VALUES ($1, $2, $3)";
const deleteCountryQuery = "DELETE FROM countries WHERE country_id = $1";
const updateCountryQuery = "UPDATE countries SET country_name = $1, region_id = $2  WHERE country_id = $3"; 
const checkIdExistsQuery = "SELECT s FROM countries s WHERE country_id = $1";

export {
    getAllCountriesQuery,
    getCountryByIdQuery,
    addCountryQuery,
    deleteCountryQuery,
    updateCountryQuery,
    checkIdExistsQuery
};