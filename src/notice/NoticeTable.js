import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";
import {dateFormat} from "../utils/dateFormatter";

const NoticeTable = (data) => {
    return (
        <Table striped bordered hover  style={{borderSpacing: '10px'}}>
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">제목</th>
                <th scope="col">게시 시작</th>
                <th scope="col">게시 종료</th>
                <th scope="col">업데이트한 사람</th>
                <th scope="col">생성자</th>
                <th scope="col">활성화 여부</th>
            </tr>
            </thead>

            <tbody>
            {data.notices.map((notice) => (
                <tr key={notice.id}>
                    <td>{notice.id}</td>
                    <td>
                        <Link to={`/${notice.id}`}>
                            {notice.title}
                        </Link>
                    </td>
                    <td>{dateFormat(notice.start_at)}</td>
                    <td>{dateFormat(notice.end_at)}</td>
                    <td>{notice.update_by}</td>
                    <td>{notice.create_by}</td>
                    <td>{notice.is_activated ? "Y" : "N"}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}

export default NoticeTable;
