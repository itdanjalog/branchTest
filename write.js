// [1] 게시물들을 관리할 배열 선언 , 3개정도 샘플 데이터 초기화  , 전역변수o(JS가 실행될때 1번 선언) vs 지역변수X:{}가 실행될때마다 선언
let 게시물목록 = [ "첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3" ,  
    "두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2",
    "세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0" ]
    
// [2] 등록함수  , 실행조건 : [등록]버튼 클릭시 
function 등록함수( ){  console.log('등록함수 실행');
    // 1. 입력/저장 , document.querySelector('선택자').value
        // 각 class별 input 마크업에 입력된 value 값 가져오기
    let title = document.querySelector('.title').value;     //console.log( title );
    let content = document.querySelector('.content').value;   //console.log( content );
    let password = document.querySelector('.password').value;  //console.log( password );
            // 오류 : Cannot read properties of null (reading 'value')
            // 이유 : HTML과 JS에 입력한 선택자가 일치하지 않을경우 , value속성이 없는 마크업 , 오타
    // 2. 처리 ,  입력받은값들과 날짜/조회수 하나의 문자열(CSV)구성 -> 배열 저장 .push
        // (1) 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수
    // 원하는 날짜 또는 시간 구성하기 
        // - 현재 날짜/시간 기능를 제공하는 객체를 변수에 저장 
    let nowDate = new Date()  // 현재 날짜/시간 제공하는 객체 생성 
    let nowYear = nowDate.getFullYear() // 현재 연도 반환 함수
    let nowMonth = nowDate.getMonth()+1; // 현재 월 반환 함수 , +1 , 0(1월) 11(12월)
    let nowDay = nowDate.getDate() // 현재 일 반환 함수 
    let date = `${nowYear}-${nowMonth}-${nowDay}`;  // 작성일, 일반적으로 게시물 등록시 현재 시스템 날짜를 사용.
    //console.log( date );
    
    let view = 0; // 조회수 , 일반적으로 게시물 등록시 게시물 조회수는 0부터 시작 
    //console.log( view );
        // (2) 5개의 변수들을 하나의(CSV형식)문자열 로 구성
    let board = `${title},${content},${password},${date},${view}`; // `백틱 문자열 템플릿
    //console.log( board );    
        // (3) 구성된 CSV문자열을 배열 저장 , .push
    게시물목록.push( board ); // console.log( 게시물목록 );
    // 3. 출력 , 출력함수 실행 
    출력함수(); // 변수호출 : 변수명  , 함수호출 : 함수명()
} // f end 