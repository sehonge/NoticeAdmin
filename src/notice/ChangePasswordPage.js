import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {duplicateCheck} from "../utils/validateUser"
import {put} from "../utils/fetchutil";


const ChangePasswordPage = () => {

    const [user, setUser] = useState({
        userId: '',
        password: '',
    });
    const [idMsg, setIdMsg] = useState(null);

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        put("/api/user", user)
            .then(response => {
                if (response.status === 200) {
                    navigate("/", {replace: true})
                } else if (response.status === 404) {
                    alert("존재하지 않는 유저입니다.")
                } else if (response.status >= 500) {
                    alert("일시적인 서버 오류가 발생했습니다. 잠시 후 시도해 주십시오.");
                }
            })
    }

    const onBlur = async (e) => {
        const parameter = {
            userId: user.userId
        }
        let response = await duplicateCheck(parameter);

        if (response === true) {
            setIdMsg("")
        } else {
            setIdMsg("존재하지 않는 아이디 입니다.");
        }
    }

    const onChange = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <Container style={{width: "33%", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
            <div className="py-5 text-center">
                <h2>비밀번호 변경</h2>
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
                                  onChange={onChange}/>
                </Form.Group>

                <br/>

                <Row>
                    <Col>
                        <Button className="w-100" type="submit">변경하기</Button>
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

export default ChangePasswordPage;
