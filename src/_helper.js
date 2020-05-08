export function getEndDate(must_drop_in) {
    const dropIn = must_drop_in.split(":");
    let date = new Date();
    date.setHours(dropIn.length > 2 ? (date.getHours() + parseInt(dropIn[0])) : date.getHours());
    date.setMinutes(dropIn.length > 2 ? (date.getMinutes() + parseInt(dropIn[1])) : (date.getMinutes() + parseInt(dropIn[0])));
    date.setSeconds(dropIn.length > 2 ? (date.getSeconds() + parseInt(dropIn[2])) : (date.getSeconds() + parseInt(dropIn[1])));
    return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}