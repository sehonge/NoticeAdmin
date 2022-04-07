import {Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const AddNotice = () => {


    return (
        <Container style={{width:"50%"}}>
            <div className="py-5 text-center">
                <h2>공지사항 추가</h2>
            </div>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="title">
                    <Form.Label column sm="2">제목</Form.Label>
                    <Col sm="10">
                        <Form.Control placeholder="100자 이하의 제목을 입력해주세요."></Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="user_name">
                    <Form.Label column sm="2">작성자</Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly value="pong"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="content">
                    <Form.Label column sm="2">내용</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows={4} placeholder="250자 이하의 내용을 입력해주세요."/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">게시일</Form.Label>
                    <Col>
                        <input id="start_at" type="datetime-local"/>
                    </Col>
                    <Col>
                        <input id="end_at" type="datetime-local"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="is_activated">
                    <Form.Label column sm="2">활성화 여부</Form.Label>
                    <Col sm="10">
                        <Form.Select aria-label="활성화 여부">
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
