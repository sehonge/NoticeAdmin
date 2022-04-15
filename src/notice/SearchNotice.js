import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";


const SearchNotice = ({search, setSearch, setPageNumber}) => {

    const [tempNotice, setTempNotice] = useState(search);

    const onChange = (e) => {
        const {value, name} = e.target;
        setTempNotice({
            ...tempNotice,
            [name]: value
        })
    }

    const resetHandle = (e) => {
        e.preventDefault();
        setTempNotice({
            title: "",
            content: "",
            start_at: "",
            end_at: "",
            update_by: "",
            is_activated: "all"
        })
    }

    const submitHandle = (e) => {
        e.preventDefault();
        setPageNumber(0);
        setSearch(tempNotice);
    }

    return (
        <Form onSubmit={submitHandle}>
            <Row className="mb-2">
                <Form.Group as={Col}>
                    <Form.Label column sm="2">제목</Form.Label>
                    <Form.Control id="title" name="title" value={tempNotice.title} onChange={onChange}></Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label column sm="2">작성자</Form.Label>
                    <Form.Control id="update_by" name="update_by" value={tempNotice.update_by}
                                  onChange={onChange}></Form.Control>
                </Form.Group>
            </Row>

            <Form.Group className="mb-2">
                <Form.Label column sm="2">내용</Form.Label>
                <Form.Control id="content" name="content" value={tempNotice.content} onChange={onChange}></Form.Control>
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label column className="mb-2">게시 시작 시간</Form.Label>
                    <Form.Floating as={"div"}>
                        <input id="start_at" name="start_at" type="datetime-local" value={tempNotice.start_at} onChange={onChange}/>
                    </Form.Floating>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label column className="mb-2">게시 종료 시간</Form.Label>
                    <Form.Floating as={"div"}>
                        <input id="end_at" name="end_at" type="datetime-local" value={tempNotice.end_at} onChange={onChange}/>
                    </Form.Floating>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label column>활성화 여부</Form.Label>
                    <Form.Select id="is_activated" name="is_activated" value={tempNotice.is_activated}
                                 onChange={onChange}>
                        <option value="">전체</option>
                        <option value="true">활성화</option>
                        <option value="false">비활성화</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Col className="mb-4 float-end">
                <Button type="submit" variant="primary" style={{marginRight:"20px"}}>검색</Button>
                <Button type="reset" variant="secondary" onClick={resetHandle}>초기화</Button>
            </Col>
        </Form>
    )
}

export default SearchNotice;
