/**
 * Created by julia on 6/17/2017.
 */


export default class Utils {
    /**
     * Handler to deal with fetch status codes. Unfortunately if the fetch returns a status code not in 200,
     * by default the behavior is not to throw an error. So this function intercepts the response.
     * @param response
     * @returns {*}
     */
    static handleErrors = function (response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
}

