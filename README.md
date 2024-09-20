# 🌟 ProFront - Modern Frontend Framework

ProFront는 React를 기반으로 한 모던한 프론트엔드 웹 애플리케이션입니다.

REST API와 원활하게 통합되어 빠르고 직관적인 사용자 경험을 제공합니다.


### 📚 프로젝트 개요

ProFront는 사용자 친화적인 싱글 페이지 애플리케이션(SPA) 개발을 위한 최적의 솔루션입니다.

클린 아키텍처와 모듈식 디자인을 통해 유지보수가 용이한 코드를 제공합니다.


### 🔑 주요 기능

React 기반 SPA: 빠르고 반응성이 뛰어난 웹 애플리케이션

REST API 통신: 백엔드와의 효율적인 데이터 통신

JWT 인증: 보안성을 강화한 인증 시스템

반응형 디자인: 다양한 기기에서 최적화된 UI 제공


### 🛠️ 기술 스택

React: 프론트엔드 라이브러리

React Router: 클라이언트 사이드 라우팅

Axios: HTTP 클라이언트 라이브러리

Styled-components: CSS-in-JS 스타일링

### ⚙️ 설치 및 실행 가이드

1. 저장소 클론

```bash
코드 복사
git clone https://github.com/9seebrid/profront.git
cd profront
```

2. 의존성 설치

```bash
코드 복사
npm install
```

3. 개발 서버 실행

```bash
코드 복사
npm start
서버는 기본적으로 http://whipped.9seebird.site에서 실행됩니다.
```

### 📂 폴더 구조

```bash
코드 복사
profront/
├── public/            # 정적 파일 (HTML, 이미지 등)
├── src/
│   ├── components/    # 재사용 가능한 컴포넌트
│   ├── pages/         # 페이지별 컴포넌트
│   ├── services/      # API 서비스 로직
│   ├── styles/        # 전역 스타일
│   └── App.js         # 메인 애플리케이션 파일
└── package.json       # 프로젝트 설정 파일
```

### 🎯 주요 기능 설명

JWT 기반 인증

/auth/login: 사용자 로그인 및 JWT 토큰 발급

/auth/register: 사용자 회원가입

API 연동

/api/user/profile: 사용자 프로필 조회
기타 주요 기능

사용자 인터페이스를 위한 다양한 컴포넌트
반응형 디자인 적용을 통한 다양한 기기 지원

### 로드맵

- [x] 사용자 회원가입 및 로그인
- [x] 상품 목록 페이지 내 장바구니 추가 및 구매 기능
- [x] 상품 상세 페이지 내 장바구니 추가 및 구매 기능
- [x] 장바구니 선택 상품 및 전체 상품 주문 기능
- [ ] 공지 사항 글 작성 기능
- [ ] 카카오 간편 회원 가입 및 간편 로그인 기능
    

### 🤝 기여 방법

이 저장소를 포크합니다.

새로운 브랜치에서 작업을 시작하세요

(git checkout -b feature/new-feature).

변경사항을 커밋합니다 (git commit -m 'Add new feature').

푸시 후 풀 리퀘스트를 제출합니다 (git push origin feature/new-feature).

### 📜 라이선스

이 프로젝트는 MIT License 하에 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

### ✨ 기타 정보

문의 사항: [9seebird@gmail.com] | GitHub Issues

Contributing: 누구든지 기여를 환영합니다!

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
