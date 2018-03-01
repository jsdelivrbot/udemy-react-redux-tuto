
class ParameterBag  {
    getParameter(key) {
        const parameters = {
            YOUTUBE_API_KEY: 'xxx'
        }
        return parameters[key];
    }
}
export default ParameterBag;
