# 1. 개요

연말결산 하듯 올해의 OO을 기록하고 공유할 수 있는 웹사이트 입니다.

### 참여 인원

프론트엔드 3명<br>
이지현: 랜딩 페이지, 로그인 페이지, 댓글, 결과 모드 페이지 9종<br>
박종익: 글쓰기 페이지, 헤더, 리덕스 모듈 구현<br>
임다영: 결과 페이지(기본모드: 보고서 형식), 결과 사진으로 저장 기능, PDF로 저장 하기, 글 수정 페이지, 카카오톡 공유하기<br><br>
백엔드 1명<br>
박혜영: 모든 api와 로직을 구현, db구조 구현<br>
백엔드 저장소: https://github.com/MarkYour2022/My2022-back

### 프로젝트 실행 방법

프로젝트 root경로에서 npm start

### 프로젝트 URL

http://markyour2022.site/

# 2. 사용 기술

프론트엔드: react, redux, styled-component, mui<br><br>
백엔드: node.js, express, mongoDB<br>
백엔드 저장소: https://github.com/MarkYour2022/My2022-back

# 3. 기능

### (1) 랜딩 페이지: 웹사이트 접속 시 처음 보여지는 페이지<br>

- 만들기 (모달창 -> 로그인 페이지로 이동)
- 공유하기 (카카오톡 공유하기)<br>
  ![홈](./public/img/%ED%99%88.PNG)<br><br>

### (2) 로그인 페이지

- 회원가입 없음
- 카카오 간편 로그인으로 구현(로그인 시 글쓰기 페이지로 이동)<br>
  ![로그인](./public/img/%EB%A1%9C%EA%B7%B8%EC%9D%B8.PNG)<br>
  ![로그인](./public/img/%EB%A1%9C%EA%B7%B8%EC%9D%B82.PNG)<br>
  ![로그인](./public/img/%EA%B8%80%EC%93%B0%EA%B8%B01.PNG)<br><br>

### (3) 글쓰기 페이지

- 닉네임 / 간편답변 / 상세답변 입력
- 뒤로가기 버튼 (로그인 페이지로 이동)
- 저장하기 버튼 (결과 페이지로 이동)
  ![글쓰기](./public/img/%EA%B8%80%EC%93%B0%EA%B8%B02.PNG)
  ![글쓰기](./public/img/%EA%B8%80%EC%93%B0%EA%B8%B03.PNG)<br><br>

### (4) 결과 페이지: 자신이 작성한 글을 보는 페이지

- 수정하기 버튼 (글 수정 페이지로 이동)
- 삭제하기 버튼 (글 삭제)
- 사진으로 저장하기 (작성한 글을 사진으로 저장)
- 다른 모드로 보기 (다른 모드로 보기 페이지로 이동)
- 카카오톡 공유하기
- 댓글 Board (등록/수정/삭제)
  ![결과](./public/img/%EA%B2%B0%EA%B3%BC%20%ED%8E%98%EC%9D%B4%EC%A7%801.PNG)<br>
  ![결과](./public/img/%EA%B2%B0%EA%B3%BC%ED%8E%98%EC%9D%B4%EC%A7%802.PNG)<br><br>

### (5) 사진으로 공유하기

![사진](./public/img/%EC%82%AC%EC%A7%84%EC%A0%80%EC%9E%A5.PNG)<br><br>

### (6) 카카오톡 공유하기

![공유](./public/img/%EA%B2%B0%EA%B3%BC%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B01.PNG)
![공유](./public/img/%EA%B2%B0%EA%B3%BC%20%EA%B3%B5%EC%9C%A0%ED%95%98%EA%B8%B02.PNG)<br><br>

### (7) 댓글 CRUD

![댓글](./public/img/%EB%8C%93%EA%B8%80_%EC%93%B0%EA%B8%B01.PNG)
![댓글](./public/img/%EB%8C%93%EA%B8%80_%EC%93%B0%EA%B8%B02.PNG)
![댓글](./public/img/%EB%8C%93%EA%B8%80_%EC%88%98%EC%A0%951.PNG)
![댓글](./public/img/%EB%8C%93%EA%B8%80_%EC%88%98%EC%A0%952.PNG)
![댓글](./public/img/%EB%8C%93%EA%B8%80_%EC%88%98%EC%A0%953.PNG)
![댓글](./public/img/%EB%8C%93%EA%B8%80_%EC%82%AD%EC%A0%9C1.PNG)
![댓글](./public/img/%EB%8C%93%EA%B8%80_%EC%82%AD%EC%A0%9C2.PNG)<br><br>

### (8) 다른 모드로 보기: 9가지 종류의 다른 배경으로 글을 볼 수 있으며 사진으로 저장 가능

![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C1.PNG)
![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C2.PNG)
![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C3.PNG)
![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C4.PNG)
![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C5.PNG)
![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C6.PNG)
![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C7.PNG)
![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C8.PNG)
![모드](./public/img/%EB%8B%A4%EB%A5%B8%EB%AA%A8%EB%93%9C9.PNG)<br><br>

### (9) 글 수정하기

![수정](./public/img/%EA%B8%80%EC%88%98%EC%A0%951.PNG)
![수정](./public/img/%EA%B8%80%EC%88%98%EC%A0%952.PNG)
![수정](./public/img/%EA%B8%80%EC%88%98%EC%A0%953.PNG)<br><br>

### (10) 글 삭제하기

![삭제](./public/img/%EC%82%AD%EC%A0%9C1.PNG)

### (11) 헤더 드랍다운 메뉴 조건부 렌더링

- 로그인을 하고 작성한 글이 이미 있는 경우
  -> 닉네임 표시, my2022 보기로 렌더링
  ![조건부](./public/img/%EC%A1%B0%EA%B1%B4%EB%B6%801.PNG)<br><br>
- 로그인이 안되어 있는 경우
  -> 로그인을 하세요, my2022 만들기로 렌더링
  ![조건부](./public/img/%EC%A1%B0%EA%B1%B4%EB%B6%802.PNG)
