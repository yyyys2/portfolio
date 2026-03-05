# Portfolio

실서비스 운영 경험을 중심으로 구성한 **프론트엔드 포트폴리오 프로젝트**입니다.

React + TypeScript 기반으로 구현되었으며,  
단순한 UI 구현이 아니라 **구조 설계, 상태 관리, 접근성, 운영 관점의 품질**을 고려한 프로젝트로 구성했습니다.

---

## Live Demo

https://yyyys2.github.io/portfolio

---
## Tech Stack

- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 3
- Framer Motion
- ESLint + Prettier

## 주요 기능

- 해시 기반 뷰 전환: `#/`, `#/profile`, `#/skills`, `#/projects`, `#/reliability`, `#/contact`
- 한국어/영어 전환(`I18nProvider`, `ko.ts`, `en.ts`)
- 라이트/다크 모드 토글 및 `localStorage` 기반 테마 유지
- 프로젝트 카테고리 필터 및 상세 모달
- 반응형 레이아웃(모바일 메뉴 포함)
- 이력서 PDF 다운로드 및 연락 채널 링크

## Component Design

- `Section`, `Card`, `Button`, `Tag`, `Modal`, `Header`, `Footer` 중심의 재사용 UI 컴포넌트 구성
- 페이지는 `sections/*`, 기능 단위는 `features/*`, 공통 관심사는 `hooks/*`로 분리
- `@` alias(`src`)를 사용해 import 경로를 단순화

## State Management

- 전역 상태는 `I18nContext`(언어/번역 함수)로 관리
- 테마는 `App.tsx`에서 관리하고 `localStorage`에 동기화
- 프로젝트 상세 모달은 `useProjectModal` 훅으로 로컬 상태 캡슐화
- 목록 필터링/정렬은 각 섹션(`ProjectsSection`, `SkillsSection`)에서 `useState`, `useMemo`로 처리

## Accessibility

- 시맨틱 구조 기반 섹션/헤딩 구성
- 버튼, 링크의 `aria-label`, `title`, `aria-expanded` 제공
- 키보드 탐색 가능한 인터랙션(모달/네비게이션) 구성
- `prefers-reduced-motion` 미디어쿼리 기반 모션 완화 지원

## Performance

- Vite 기반 번들링과 코드 분리
- 이미지 `loading="lazy"` 적용
- 계산 비용이 있는 목록 처리에 `useMemo` 사용
- 폰트 `font-display: swap` 설정으로 렌더링 지연 완화


## 프로젝트 구조

```text
src
├─ app
│  └─ providers            # I18n Provider
├─ components              # 공통 UI, 아이콘, 애니메이션
├─ context                 # i18n context
├─ data                    # projects/skills 정적 데이터
├─ features
│  └─ project-modal        # 프로젝트 상세 모달 상태/뷰
├─ hooks                   # 공통 훅
├─ i18n                    # ko/en 번역 사전
├─ sections                # 페이지 섹션 단위 UI
└─ styles                  # global.css (Tailwind + 글로벌 스타일)
```

## 시작하기

### 1) 설치

```bash
npm install
```

### 2) 개발 서버 실행

```bash
npm run dev
```

기본 주소: `http://localhost:5173`

### 3) 빌드/미리보기

```bash
npm run build
npm run preview
```

## 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 타입 체크 + 프로덕션 빌드
- `npm run preview`: 빌드 결과 미리보기
- `npm run lint`: ESLint 검사
- `npm run format`: Prettier 포맷팅
- `npm run deploy`: `dist`를 GitHub Pages로 배포

## 배포

- Vite `base`는 `/portfolio/`로 설정되어 있습니다.
- GitHub Pages 배포 시 저장소 이름/경로와 `base`, `homepage`가 일치해야 정적 리소스 경로가 정상 동작합니다.

## 에셋

- 프로젝트/스킬 이미지: `public/assets/images`
- 이력서 PDF: `public/assets/resume/kim_yun_young_resume.pdf`

## 라이선스

이 프로젝트는 MIT License를 따릅니다. 자세한 내용은 `LICENSE` 파일을 확인해 주세요.
