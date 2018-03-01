
class ParameterBag  {
    getParameter(key) {
        const parameters = {
            OPEN_WEATHER_MAP_API_KEY: 'xxx'
        }
        return parameters[key];
    }
}
export default ParameterBag;
