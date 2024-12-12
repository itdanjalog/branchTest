// [1] 게시물들을 관리할 배열 선언 , 3개정도 샘플 데이터 초기화  , 전역변수o(JS가 실행될때 1번 선언) vs 지역변수X:{}가 실행될때마다 선언
let 게시물목록 = [ "첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3" ,  
    "두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2",
    "세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0" ]
    
// [3] 상세 출력 함수 , 실행조건 : 전체출력화면에서 특정한 제목을 클릭했을때
function 상세출력함수( index ) { // index : 매개변수 , 상세 출력할 배열의 인덱스를 받기 
    console.log('상세출력함수 실행'); console.log( index );
    // 1. 어디에 , document.querySelector() 
    // 2. 무엇을 , 배열 정보를 HTML 로 구성 , 선택한 게시물 인덱스의 정보를 , index 
    let board = 게시물목록[ index ];    // (1) 선택한 인덱스의 게시물 호출 
    let info = board.split(',')                 // (2) 게시물 문자열 ,(쉼표) 기준으로 분해 
        // info[0] = 제목  info[1] 내용 info[2] 비밀번호 info[3] 작성일 info[4] 조회수 
    // 3. 출력  , innerHTML 
    document.querySelector('.titleBox').innerHTML = info[0]; // 제목 데이터를 .titileBox 마크업 사이에 에 대입 
    document.querySelector('.contentBox').innerHTML = info[1]; // 내용 데이터를 .contentBox 마크업 사이에 대입 
    document.querySelector('.dateBox').innerHTML = info[3]; // 작성일 데이터를 .dateBox 마크업 사이에 대입 
    document.querySelector('.viewBox').innerHTML = info[4]; // 조회수 데이터를 .viewBox 마크업 사이에 대입 
    document.querySelector('.btnBox').innerHTML = `
                                    <button onclick="삭제함수( ${ index } )" type="button">삭제</button> 
                                    <button type="button">수정</button>`
} // f end 

// [4] 삭제함수  , 실행조건 : [삭제]버튼 클릭시 
function 삭제함수( index ){ // 매개변수 , 삭제할 인덱스 번호 
    console.log( '삭제함수 실행' );
    console.log( index )
    // 1. 배열내 특정한 인덱스 의 요소 제가 , 배열변수명.splice( 삭제할인덱스 , 개수 )
    게시물목록.splice( index , 1 ); // 내가선택한 게시물의 인덱스를 삭제 
    // 2. 화면 새로고침 / 다시 출력 / 다시 함수 호출 
    출력함수();
} // f end 