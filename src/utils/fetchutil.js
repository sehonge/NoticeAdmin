
const commonHeader = {
    "X-Requested-With" : "XMLHttpRequest"
};

export const get = (url, parameters) => {
    let query = '';
    if (parameters !== null) {
        query = '?' + Object.keys(parameters)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(parameters[key]))
            .join('&');
    }

    return fetch(url + query, {
        method: "GET",
        headers: {
            ...commonHeader
        }
    })
        .then(result => result.json())
        .catch(e => console.log(e))
};
