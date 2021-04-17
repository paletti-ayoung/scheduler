import {logoutHandler} from './loginCtrl';


export default function errorHandler(error) {
    switch (error) {
        case 400:
            alert("잘못된 요청입니다.");
            break;
        case 401:
            alert("토큰이 만료되었습니다.")
            logoutHandler();
            break;
        case 403:
            alert("권한이 없습니다.");
            break;
        case 404:
            alert("Not found!");
            break;
        default:
            alert("에러");
            break;

    }

}