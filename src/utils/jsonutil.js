const snakeToCamel = (str) => {
    return str.replace(/[_-](\w|$)/g, (first, second) => second.toUpperCase())
}

export default snakeToCamel;
