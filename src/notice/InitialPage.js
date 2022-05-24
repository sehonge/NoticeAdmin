import {Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";

const InitialPage = () => {

    const [user, setUser] = useState({
        id: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();


    }

    const onChange = (e) => {
        const {value, name} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <Container style={{width: "33%", alignItems:"center", justifyContent:"center", marginTop:"50px"}}>
            <div className="py-5 text-center">
                <h2>공지사항 어드민</h2>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Control id="id" name="id" placeholder="아이디" value={user.id} onChange={onChange}/>
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

            <Container>

            </Container>
        </Container>
    )
}

export default InitialPage;
