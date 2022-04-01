import {Table} from "react-bootstrap";

const NoticeTable = (data, key) => {

    return (
        <Table striped bordered hover style={{borderSpacing: '10px'}}>
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">제목</th>
                <th scope="col">게시 시작</th>
                <th scope="col">게시 종료</th>
                <th scope="col">생성자</th>
                <th scope="col">업데이트한 사람</th>
            </tr>
            </thead>

            <tbody>
            {data.notices.map((notice) => {

            })}
            </tbody>
        </Table>
    )

}

export default NoticeTable;
