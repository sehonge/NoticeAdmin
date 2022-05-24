import snakeToCamel from "./jsonutil";

const commonHeader = {
    'X-Requested-With':'XMLHttpRequest'
};

export const get = (url, parameters) => {
    let query = '';

    if (parameters !== null) {
        query = '?' + Object.keys(parameters)
            .filter(key => parameters[key].length !== 0)
            .map(key => encodeURIComponent(snakeToCamel(key)) + '=' + encodeURIComponent(parameters[key]))
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

export const post = (url, body) => {
    return fetch(url, {
        method: "POST",
        headers: {
            ...commonHeader,
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(body)
    })
        .then(result => result.json())
        .catch(e => console.log(e))
}

export const put = (url, body) => {
    return fetch(url, {
        method: "PUT",
        headers: {
            ...commonHeader,
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(body)
    })
        .then(result => result.json())
        .catch(e => console.log(e))
}
