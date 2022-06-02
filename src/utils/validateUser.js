import {get} from "./fetchutil";

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

const duplicateCheck = async (parameter) => {
    let response = await get("/api/user/register", parameter);
    await console.log(response);
    if (response.status === 200) {
        return false;
    } else if (response.status === 400) {
        console.log(1);
        return true;
    } else if (response.status >= 500) {
        alert("일시적인 서버 오류가 발생했습니다. 잠시 후 시도해 주십시오.");
        return true;
    }
}

const checkUserId = (userId) => {
    if (userId.length < 6 || userId.length > 15) {
        return "아이디의 길이는 6자 이상이고 15자 이하여야 합니다.";
    } else {
        const parameter = {
            userId: userId
        }
        let response = duplicateCheck(parameter);
        console.log(response);
        // if (response === true) {
        //     return "이미 회원가입된 아이디 입니다.";
        // } else {
        //     return "";
        // }
    }
}

const checkPasswordLength = (password) => {
    if (password.length < 8 || password.length > 20) {
        return "비밀번호의 길이는 8자 이상이고 20자 이하여야 합니다.";
    } else {
        return " ";
    }
}

const checkPasswordCheck = (password, passwordCheck) => {
    if (password !== passwordCheck) {
        return "비밀번호가 일치하지 않습니다."
    }
}

export {
    validateUser, checkUserId, checkPasswordCheck, checkPasswordLength
}
