import moment from "moment";

export const dateFormat = (dateTime) => {
    return moment(dateTime).format("YYYY-MM-DD hh:mm");
}
