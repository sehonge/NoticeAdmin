const validateUser = (id, password) => {
    return validate(password, 8, 20) && validate(id, 6, 15);
}

const validate = (target, minLen, maxLen) => {
    if (target.length < minLen) {
        alert("길이가 " + minLen + "이상이어야 합니다.");
        return false;
    } else if (target.length > maxLen) {
        alert("길이가 " + maxLen + "이하여야 합니다.");
        return false;
    } else {
        return true;
    }
}

export {
    validateUser
}
