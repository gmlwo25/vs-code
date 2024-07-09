const flagBlue = document.querySelector(".flag-blue");
const flagWhite = document.querySelector(".flag-white");

function reset() {
  document.querySelector(".up").classList.remove('up');
}

// 1. flagUp 함수를 완성해주세요
function flagUp(event){
  //왼쪽 마우스버튼 클릭
  if( event.button === 0){
    flagBlue.classList.add('up')
  }else if (event.button === 2){
    //우클릭
    flagWhite.classList.add('up');
  }

  // 2. 500 밀리초 뒤에 reset 함수를 실행
  setTimeout(reset, 500);
}
// 3. 마우스 오른쪽 버튼 클릭 시 나타나는 메뉴창을 막아주세요
document.addEventListener('contextmenu', function(event){
  event.preventDefault();
});

// 테스트 코드
document.addEventListener("mousedown", flagUp);