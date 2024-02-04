const getAllCountriesQuery = "SELECT * FROM countries ORDER BY country_id ASC";
const getCountryByIdQuery = "SELECT * FROM countries WHERE country_id = $1";
const addCountryQuery = "INSERT INTO countries (country_id, country_name, region_id) VALUES ($1, $2, $3)";


export {
    getAllCountriesQuery,
    getCountryByIdQuery,
    addCountryQuery,
};