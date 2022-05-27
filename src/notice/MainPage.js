import {useEffect, useState} from "react";
import {get} from "../utils/fetchutil";
import {Col, Container, Row} from "react-bootstrap";
import NoticeTable from "./NoticeTable";
import NoticePageNumber from "./NoticePageNumber";
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom";
import SearchNotice from "./SearchNotice";
import {validateSearchTime} from "../utils/validateNotice";
import InitialPage from "./InitialPage";

const MainPage = () => {

    const [pageNumber, setPageNumber] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [notices, setNotices] = useState(null);
    const [pageInfo, setPageInfo] = useState(null);
    const [search, setSearch] = useState({
        title: '',
        content: '',
        start_at: '',
        end_at: '',
        update_by: '',
        is_activated: 'all',
        create_by: ''
    })

    useEffect(() => {
        setLoading(true);
        if (sessionStorage.getItem("id") !== null) {
            setIsLogin(true);

            const parameters = {
                page: pageNumber,
                ...search
            }
            if (validateSearchTime(parameters.start_at, parameters.end_at)) {
                get('/api/notice/search', parameters)
                    .then(response => {
                        setNotices(response);
                        setPageInfo(response);
                    })
            }
        } else {
            setIsLogin(false);
        }

        setLoading(false);
    }, [pageNumber, search])

    if (loading) return <div>로딩중...</div>
    else if (isLogin === false) return <div><InitialPage/></div>
    else if (notices === null) return <div>데이터를 받아오는 중...</div>

    return (
        <Container style={{width:"75%"}}>
            <div>
                <h2>공지 어드민</h2>
            </div>

            <hr className="my-5"/>

            <SearchNotice search={search} setSearch={setSearch} setPageNumber={setPageNumber}/>
            <br/>
            <br/>
            <hr/>

            <Link to="/add">
                <Button variant="secondary" className="float-end">공지 등록</Button>
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
