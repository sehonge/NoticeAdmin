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

    if (response.status === 200) {
        return false;
    } else if (response.status === 400) {
        return true;
    } else if (response.status >= 500) {
        alert("일시적인 서버 오류가 발생했습니다. 잠시 후 시도해 주십시오.");
        throw Error("서버 오류 발생");
    }
}

const checkUserId = (userId, setMsg) => {
    if (userId.length < 6 || userId.length > 15) {
        setMsg("아이디의 길이는 6자 이상이고 15자 이하여야 합니다.");
    } else {
        const parameter = {
            userId: userId
        }
        duplicateCheck(parameter)
            .then(result => {
                if (result === true) {
                    setMsg("이미 회원가입한 아이디 입니다.");
                } else {
                    setMsg("");
                }
            });
    }
}

const checkPasswordLength = (password, setPasswordMsg) => {
    if (password.length < 8 || password.length > 20) {
        setPasswordMsg("비밀번호의 길이는 8자 이상이고 20자 이하여야 합니다.");
    } else {
        setPasswordMsg("");
    }
}

const checkPasswordCheck = (password, passwordCheck, setPasswordCheckMsg) => {
    if (password !== passwordCheck) {
        setPasswordCheckMsg("비밀번호가 일치하지 않습니다.");
    } else {
        setPasswordCheckMsg("");
    }
}

export {
    validateUser, checkUserId, checkPasswordCheck, checkPasswordLength
}
