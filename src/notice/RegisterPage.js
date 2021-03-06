import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {checkPasswordCheck, checkPasswordLength, checkUserId, validateUser} from "../utils/validateUser";
import {post} from "../utils/fetchutil";

const RegisterPage = () => {

    const [user, setUser] = useState({
        userId: '',
        password: '',
        checkPassword: ''
    });
    const [idMsg, setIdMsg] = useState((null));
    const [passwordMsg, setPasswordMsg] = useState((null));
    const [passwordCheckMsg, setPasswordCheckMsg] = useState((null));

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateUser(user.userId, user.password)) {
            post("/api/user", user)
                .then(response => {
                    if (response.status === 200) {
                        navigate("/", {replace: true})
                    } else if (response.status === 400) {
                        alert("아이디 혹은 비밀번호의 길이가 잘못되었습니다.")
                    } else if (response.status >= 500) {
                        alert("일시적인 서버 오류가 발생했습니다. 잠시 후 시도해 주십시오.");
                    }
                })
        }
    }

    const onBlur = (e) => {
        checkUserId(user.userId, setIdMsg)
        checkPasswordLength(user.password, setPasswordMsg)
        checkPasswordCheck(user.password, user.checkPassword, setPasswordCheckMsg)
    }

    const onChange = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <Container style={{width: "33%", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
            <div className="py-5 text-center">
                <h2>회원 가입</h2>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control id="userId" name="userId" placeholder="아이디" onBlur={onBlur} onChange={onChange}/>
                    <Form.Text className="text-danger">
                        {idMsg}
                    </Form.Text>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control id="password" name="password" type="password"
                                  placeholder="비밀 번호"
                                  onBlur={onBlur}
                                  onChange={onChange}/>
                    <Form.Text className="text-danger">
                        {passwordMsg}
                    </Form.Text>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control id="checkPassword" name="checkPassword" type="password"
                                  placeholder="비밀 번호 확인"
                                  onBlur={onBlur}
                                  onChange={onChange}/>
                    <Form.Text className="text-danger">
                        {passwordCheckMsg}
                    </Form.Text>
                </Form.Group>

                <br/>

                <Row>
                    <Col>
                        <Button className="w-100" type="submit">가입하기</Button>
                    </Col>
                    <Col>
                        <Link to="/">
                            <Button className="w-100" variant="secondary" type="">취소</Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default RegisterPage;
