const titleLimitLen = 100;
const contentLimitLen = 250;

export const validateNotice = (title, content, start_at, end_at) => {
    return validateTitle(title) && validateContent(content) && validateTime(start_at, end_at);
}

const validateTime = (start_at, end_at) => {
    if (start_at.length === 0) {
        alert("게시 시작 시간을 입력해주세요.");
        return false;
    }

    if (end_at.length === 0) {
        alert("게시 종료 시간을 입력해주세요.");
        return false;
    }

    if (start_at > end_at) {
        alert("게시 종료시간을 게시 시작시간보다 미래로 설정해주세요.");
        return false;
    }

    return true;
}

const validateTitle = (title) => {
    return (checkZero(title, "제목을 입력해주세요.") === false) &&
        (checkTitleMax(title, "제목의 길이가 " + titleLimitLen + "자를 초과합니다.") === false);
}

const validateContent = (content) => {
    return (checkZero(content, "내용을 입력해주세요.") === false) &&
        (checkTitleMax(content, "내용의 길이가 " + contentLimitLen + "자를 초과합니다.") === false);
}

const checkZero = (target, msg) => {
    if (target.length === 0) {
        alert(msg);
        return true;
    }
    else {
        return false;
    }
}

const checkTitleMax = (target, msg) => {
    if (target.length >= titleLimitLen) {
        alert(msg);
        return true;
    } else {
        return false;
    }
}

const checkContentMax = (target, msg) => {
    if (target.length >= contentLimitLen) {
        alert(msg);
        return true;
    } else {
        return false;
    }
}
