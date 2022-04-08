import {useEffect, useState} from "react";
import {get} from "../utils/fetchutil";
import {Container} from "react-bootstrap";
import NoticeTable from "./NoticeTable";
import NoticePageNumber from "./NoticePageNumber";
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom";

const MainPage = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [loading, setLoading] = useState(false);
    const [notices, setNotices] = useState(null);
    const [pageInfo, setPageInfo] = useState(null);

    useEffect(() => {
        setLoading(true);

        const parameters = {
            page: pageNumber
        }

        get('/api/notice', parameters)
            .then(response => {
                console.log(response)
                setNotices(response);
                setPageInfo(response)
            })

        setLoading(false);
    }, [pageNumber])

    if (loading) return <div>로딩중...</div>
    else if (notices === null) return <div>데이터를 받아오는 중...</div>

    return (
        <Container>
            <div>
                <h2>공지 어드민</h2>
            </div>

            <br/>
            <hr className="my-4"/>
            <Link to="/add">
                <Button variant="primary" className="float-end">등록</Button>
            </Link>
            <br/>
            <br/>
            <br/>


            <NoticeTable notices={notices.content}></NoticeTable>

            <hr className="my-4"/>
            <div className="float-end">
                <NoticePageNumber pageInfo={pageInfo} setPageNumber={setPageNumber}></NoticePageNumber>
            </div>
        </Container>
    )
}

export default MainPage;
