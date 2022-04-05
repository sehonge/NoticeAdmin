
const commonHeader = {
    'X-Requested-With':'XMLHttpRequest'
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
            'Accept':'application/json',
            ...commonHeader
        }
    })
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(e => console.log(e))
};
