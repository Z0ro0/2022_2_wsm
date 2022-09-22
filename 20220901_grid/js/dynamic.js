const setCalendar= (year, month) => {
    //오늘 년, 월, 1 날짜 객체 구하기
    let firstDate = new Date(year, month - 1, 1);
    
    //그 객체 요일 구하기
    let firstDay = firstDate.getDay();

    console.log(`${year}-${month}-${firstDay}요일`);

    //html 제어하기
    //오늘 년, 오늘 월+1, 0 날짜 객체 구하기 --> 이번 달 마지막 일 구하기
    let lastDate = new Date(year, month, 0).getDate();
    console.log(`${lastDate}`);
}

//오늘 구하기
let today = new Date();
//오늘 연 구하기
let year = today.getFullYear();
//오늘 월 구하기
let month = today.getMonth();
month++;


setCalendar(year, month);