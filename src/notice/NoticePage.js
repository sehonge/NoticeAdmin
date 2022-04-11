import {Col, Container, Form, FormGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get, post, put} from "../utils/fetchutil";
import {validateNotice} from "../utils/validateNotice";

const NoticePage = () => {

    const [loading, setLoading] = useState(false);
    const notice_id = useParams().id;
    const [notice, setNotice] = useState({
        id: notice_id,
        title: "",
        content: "",
        start_at: "",
        end_at: "",
        is_activated: ""
    });

    let navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        get('/api/notice/' + notice_id, null)
            .then(response => setNotice(response))
            .catch(e => console.log(e))

        setLoading(false);
    }, [])

    const onChange = (e) => {
        const {value, name} = e.target;
        setNotice({
            ...notice,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateNotice(notice.title, notice.content, notice.start_at, notice.end_at)) {
            put("/api/notice", notice)
                .then(navigate("/", {replace: true}))
                .catch(e => console.log(e))
        }
    }

    if (loading) return <div>로딩중...</div>
    else if (notice === null) return <div>데이터를 받아오는 중...</div>

    return (
        <Container style={{width:"50%"}}>
            <div className="py-5 text-center">
                <h2>공지사항</h2>
            </div>

            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">제목</Form.Label>
                    <Col sm="10">
                        <Form.Control id="title" name="title" value={notice.title} onChange={onChange}></Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">작성자</Form.Label>
                    <Col sm="10">
                        <Form.Control id="create_by" name="create_by" plaintext readOnly value="pong"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">내용</Form.Label>
                    <Col sm="10">
                        <Form.Control id="content" name="content" as="textarea" rows={4} value={notice.content} onChange={onChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">게시일</Form.Label>
                    <Col>
                        <input id="start_at" name="start_at" type="datetime-local" value={notice.start_at} onChange={onChange}/>
                    </Col>
                    <Col>
                        <input id="end_at" name="end_at" type="datetime-local" value={notice.end_at} onChange={onChange}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">활성화 여부</Form.Label>
                    <Col sm="10">
                        <Form.Select id="is_activated" name="is_activated" defaultValue={notice.is_activated} aria-label="활성화 여부" onChange={onChange}>
                            <option value="true">활성화</option>
                            <option value="false">비활성화</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Row>
                    <Col>
                        <Button className="w-100" type="submit">수정</Button>
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

export default NoticePage;
