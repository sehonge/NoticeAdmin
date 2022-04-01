import {Pagination} from "react-bootstrap";

const NoticePageNumber = ({pageInfo, setPageNumber}) => {

    const currentPage = pageInfo.number;

    let active = pageInfo.number + 1;
    const beginNumber = Math.floor(pageInfo.number / pageInfo.pageable.pageSize) * pageInfo.pageable.pageSize + 1;
    let endNumber;

    if (pageInfo.empty === true) {
        endNumber = 1;
    } else {
        endNumber = beginNumber + 9 < pageInfo.totalPages ? beginNumber + 9 : pageInfo.totalPages;
    }

    let items = [];
    for (let number = beginNumber; number <= endNumber; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setPageNumber(number - 1)}>
                {number}
            </Pagination.Item>
        )
    }

    return (
        <div>
            <Pagination>
                <Pagination.Prev disabled={pageInfo.first} onClick={() => setPageNumber(currentPage - 1)}/>
                <Pagination>{items}</Pagination>
                <Pagination.Next disabled={pageInfo.last} onClick={() => setPageNumber(currentPage + 1)}/>
            </Pagination>
        </div>
    )

}

export default NoticePageNumber;
