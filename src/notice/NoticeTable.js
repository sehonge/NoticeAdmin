import Table from "react-bootstrap/Table";

const NoticeTable = (data) => {
    console.log(data);
    return (
        <Table striped bordered hover style={{borderSpacing: '10px'}}>
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
                    <td>{notice.title}</td>
                    <td>{notice.start_at}</td>
                    <td>{notice.end_at}</td>
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
