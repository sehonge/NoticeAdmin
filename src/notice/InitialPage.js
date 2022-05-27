import {Container, Form, Nav, NavItem, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import {get} from "../utils/fetchutil";
import {useNavigate} from "react-router-dom";
import {validateUser} from "../utils/validateUser";

const InitialPage = ({setIsLogin}) => {

    const [user, setUser] = useState({
        userId: '',
        password: ''
    })

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateUser(user.userId, user.password)) {
            get("/api/user/login", user)
                .then(response => {
                    if (response.status === 200) {
                        sessionStorage.setItem("userId", user.userId);
                        setIsLogin(true);
                    } else if (response.status === 400) {
                        console.log(response);
                        alert("아이디 혹은 비밀번호의 길이가 잘못되었습니다.")
                    } else if (response.status === 404) {
                        console.log(response);
                        alert("아이디 혹은 비밀번호가 틀렸습니다.")
                    } else {
                        console.log(response);
                        alert("일시적인 서버 오류가 발생했습니다.");
                    }
                })
        }
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
                <h2>공지사항 어드민</h2>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Control id="userId" name="userId" placeholder="아이디" value={user.id} onChange={onChange}/>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Control id="password" name="password" value={user.password} type="password"
                                  placeholder="비밀 번호"
                                  onChange={onChange}/>
                </Form.Group>

                <br/>

                <Row>
                    <Button className="w-100" type="submit">로그인</Button>
                </Row>
            </Form>

            <br/>
            <Container>
                <Nav className="justify-content-center">
                    <NavItem>
                        <Nav.Link href="/register">회원 가입</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="/changePassword">비밀번호 변경</Nav.Link>
                    </NavItem>
                </Nav>
            </Container>
        </Container>
    )
}

export default InitialPage;
