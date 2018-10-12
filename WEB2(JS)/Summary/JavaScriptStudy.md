# JavaScript
-------
### 수업의 목적
 - 자바스크립트는 사용자와 상호작용을 하기 위해 만들어졌다.

### HTML과 JavaScript의 만남 1 (script 태그)
 - 기본적으로 html 위에서 동작하는 언어이다. (이렇게 시작함)  
 - 자바스크립트에서 출력은 이런식인것 같다.
 ```{.JavaScript}
 <script>
document.write("hello,World");
document.write(1+1);
</script>
```

### HTML과 JavaScript의 만남 2 (이벤트)
 - 이벤트는 WPF의 xaml 부분과 cs부분이 상호 작용하는 것과 동일하다.   ex)onClick 이벤트 뒤에 자바스크립트 함수가 와야된다.

### HTML과 JavaScript의 만남 3 (콘솔)
 - 웹 페이지에서 페이지 검사(단축키 F12)를 통해 콘솔을 띄울 수 있고 필요에 의해 콘솔 창에 자바스크립트 코드를 작성하여 해당 웹페이지에서 적용되는 코드를 작성할 수 있다.*ex)페이스북에서 댓글로 당첨자 추첨*

### 데이터타입 - 문자열과 숫자
### 변수와 대입 연산자
 - 정리 할 것 없음(해당 부분은 모두 아는 내용)

### 웹브라우저 제어
- 배울내용 소개하는 느낌

### CSS 기초
- 배웠지만 복습겸 학습

### 제어할 태그 선택하기
- body 스타일 변경 방법
```{.html}
<input type="button" value="night" onclick="
document.querySelector('body').style.backgroundColor = 'black';
document.querySelector('body').style.color = 'white'">
<input type="button" value="day" onclick="
document.querySelector('body').style.backgroundColor = 'white';
document.querySelector('body').style.color = 'black'">
```

### 프로그램, 프로그래밍, 프로그래머
- program이라는 말의 중심에는 순서라는 의미가 있다.
- html은 시간의 순서에 따라 무엇을 할 필요가 없기 때문에  프로그래밍 언어라고 할 수 없다.
반면에 JavaScript는 프로그래밍 언어임. 시간의 순서에 따라 코드가 실행되므로.

### 조건문 관련 강의
- 비교 연산자  [1 == "1"]일때  '==' 는  true가 나오고   
'===' false가 나온다.  '===' 는 데이터 타입까지 완전히 같다는 의미.(=== 사용 권장)
- html 에서 '>' 는 '&gt' (greater than) '<'는 '&lt' (less than) 임.

### 리펙토링
- 코드의 효율성, 가독성, 유지보수의 편리성, 중복된 코드 제거를 위한 작업
