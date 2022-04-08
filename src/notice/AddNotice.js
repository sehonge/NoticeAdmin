import {Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {post} from "../utils/fetchutil";

const AddNotice = () => {


    const initial_notice = {
        is_activated: "true",
        create_by: "pong"
    }
    //TODO("cookie 사용해서 create_by에 cookie에 저장된 user_name 대입")
    let navigate = useNavigate();

    const [notice, setNotice] = useState(initial_notice);

    const onChange = (e) => {
        const {value, name} = e.target;
        setNotice({
            ...notice,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(notice);
        post('/api/notice', notice)
            .then(navigate("/", {replace : true}))
            .catch(e => console.log(e))
    }

    return (
        <Container style={{width:"50%"}}>
            <div className="py-5 text-center">
                <h2>공지사항 추가</h2>
            </div>

            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">제목</Form.Label>
                    <Col sm="10">
                        <Form.Control id="title" name="title" onChange={onChange} placeholder="100자 이하의 제목을 입력해주세요."></Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">작성자</Form.Label>
                    <Col sm="10">
                        <Form.Control id="create_by" name="create_by" plaintext readOnly value="pong" onChange={onChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">내용</Form.Label>
                    <Col sm="10">
                        <Form.Control id="content" name="content" as="textarea" rows={4} placeholder="250자 이하의 내용을 입력해주세요." onChange={onChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">게시일</Form.Label>
                    <Col>
                        <input id="start_at" name="start_at" type="datetime-local" onChange={onChange}/>
                    </Col>
                    <Col>
                        <input id="end_at" name="end_at" type="datetime-local" onChange={onChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">활성화 여부</Form.Label>
                    <Col sm="10">
                        <Form.Select id="is_activated" name="is_activated" defaultValue="true" aria-label="활성화 여부" onChange={onChange}>
                            <option value="true">활성화</option>
                            <option value="false">비활성화</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Row>
                    <Col>
                        <Button className="w-100" type="submit">등록</Button>
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

export default AddNotice;
