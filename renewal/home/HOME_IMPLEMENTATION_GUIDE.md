# Portfolio Home 최종 구현 가이드

## 1. 구현 목표

`reference-images/home-final-approved.png`를 기준으로 포트폴리오 Home Hero를 구현한다.

이 화면의 핵심은 단순한 `왼쪽 텍스트 / 오른쪽 이미지` 2열 배치가 아니다.

- 큰 문장과 Featured Project 패널이 하나의 시각 영역을 공유한다.
- `Developer.`의 실제 마지막 온점에서 연결선이 시작된다.
- 오른쪽 패널은 천천히 떠 있고 연결선 끝점이 패널을 정확히 따라간다.
- 정보량보다 여백, 비대칭 배치, 크기 대비, 연결 동작으로 인상을 만든다.
- 이미지를 화면에 그대로 삽입하지 않고 React 컴포넌트와 CSS/SVG로 재현한다.

## 2. 고정 콘텐츠

```text
Logo
KIM YOON YOUNG

Navigation
PROJECTS · EXPERIENCE · ABOUT · CONTACT

Eyebrow
FRONTEND DEVELOPER · 7 YEARS

Headline
Frontend
Developer.

Description
화면은 사용하기 편하게, 코드는 고치기 쉽게.

Primary CTA
프로젝트 보기 →

Search label
PROJECT SEARCH

Search placeholder
프로젝트명 또는 기술 검색

Suggested searches
React · WebOS · AI Agent

Featured label
FEATURED PROJECT · AI AGENT

Project
AI Agent UI
대화형 AI 서비스 인터페이스

Preview items
문서 요약 · 데이터 분석 · 메일 작성

Stack
React · TypeScript · TanStack Query

Project CTA
CASE STUDY ↗

Bottom index
FEATURED 01 / 04
```

`7 YEARS`는 배포 직전에 실제 경력 표기와 일치하는지 확인한다. 프로젝트명, 경력, 성과 수치를 임의로 생성하지 않는다.

## 3. 디자인 토큰

기존 프로젝트에 토큰이 있다면 그것을 우선하고, 없을 때 다음을 시작값으로 사용한다.

```css
:root {
  --home-bg: #f4f2ee;
  --home-surface: #fbfaf7;
  --home-surface-strong: #ffffff;

  --home-text: #17202a;
  --home-text-muted: #68717d;
  --home-text-subtle: #9097a0;

  --home-accent: #c98272;
  --home-accent-hover: #b97061;
  --home-accent-pressed: #a96255;
  --home-accent-soft: #f2ddd7;

  --home-border: #d9d8d3;
  --home-panel-radius: 18px;
  --home-shadow: 0 18px 45px rgb(23 32 42 / 8%);

  --home-page-max: 1440px;
  --home-page-padding: clamp(20px, 4vw, 64px);
  --home-header-height: 88px;

  --home-fast: 180ms;
  --home-base: 320ms;
  --home-float-duration: 5.2s;
  --home-ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}
```

- 한글, 본문, 메뉴: `Pretendard Variable`, Pretendard, system-ui
- 한글에 명조체·필기체·세리프를 사용하지 않는다.
- UI 코드가 필요할 때만 `JetBrains Mono` 등 고정폭 폰트를 사용한다.
- 코랄은 제목 강조, 버튼, 연결선, 활성 상태에만 제한적으로 사용한다.

## 4. 레이아웃

### Desktop 1200px 이상

- 전체 폭: `min(100% - 2 * page-padding, 1440px)`
- Hero 최소 높이: `calc(100svh - 88px)`
- 내부적으로 12열 그리드를 사용하되 결과가 50:50 분할처럼 보이면 안 된다.
- 텍스트 영역: 대략 1~7열
- 패널 영역: 대략 6~12열
- 두 영역이 1~2열 정도 시각적으로 겹치게 배치한다.
- 패널 폭: `clamp(560px, 48vw, 720px)`
- 패널은 Hero의 중앙보다 약간 아래에 둔다.
- 텍스트와 패널이 겹치더라도 글자를 가리지 않는다.
- 제목은 다음 2줄을 유지한다.

```text
Frontend
Developer.
```

- 제목 크기: `clamp(64px, 6vw, 92px)`
- 제목 행간: `0.98~1.06`
- `Frontend`는 진한 네이비, `Developer.`는 코랄색이다.
- 큰 장식 원은 `aria-hidden="true"`, 낮은 투명도이며 콘텐츠보다 앞에 나오지 않는다.

### Tablet 768~1199px

- 텍스트 55%, 패널 52~58% 수준으로 시각적 겹침을 축소한다.
- 연결할 수 있는 여백이 충분할 때만 SVG 선을 노출한다.
- 패널이 제목을 침범하면 패널을 아래로 이동한다.
- 제목은 최대 3줄을 유지한다.

### Mobile 0~767px

- Header → 텍스트 → CTA → 패널 순서의 단일 열이다.
- 제목 크기: `clamp(42px, 12vw, 58px)`
- 패널의 absolute/overlap 배치를 해제한다.
- SVG 연결선과 자동 floating을 끈다.
- 패널 회전, parallax, 마우스 추적 효과를 사용하지 않는다.
- CTA와 패널 내부 링크의 최소 터치 영역은 44×44px이다.

## 5. 권장 컴포넌트 구조

```text
HomePage
├─ SiteHeader
└─ HomeHero
   ├─ HeroCopy
   │  ├─ Eyebrow
   │  ├─ HeroHeadline
   │  │  └─ ConnectorAnchorPeriod
   │  ├─ Description
   │  └─ PrimaryCTA
   ├─ FeaturedProjectFloat
   │  └─ FeaturedProjectPanel
   │     ├─ ProjectSearch
   │     ├─ SuggestedSearches
   │     └─ ProjectPreviewCard
   ├─ ConnectorSvg
   └─ FeaturedProjectIndex
```

권장 파일 예시:

```text
src/
├─ pages/HomePage.tsx
├─ components/layout/SiteHeader.tsx
├─ components/home/HomeHero.tsx
├─ components/home/HeroHeadline.tsx
├─ components/home/FeaturedProjectPanel.tsx
├─ components/home/HeroConnector.tsx
├─ hooks/useConnectorGeometry.ts
├─ hooks/useReducedMotion.ts
├─ data/projects.ts
└─ styles/tokens.css
```

콘텐츠, 현재 Featured Project ID, UI 컴포넌트, 연결선 좌표 계산을 서로 분리한다.

## 6. 온점과 연결선

### 가장 중요한 규칙

`Developer.` 뒤에 장식용 원을 추가하지 않는다. 화면에 보이는 **마지막 온점 하나가 문장부호이자 연결선 시작점**이다.

```tsx
<h1 className={styles.title}>
  <span>Frontend</span>
  <span className={styles.accent}>
    Developer<span ref={startAnchorRef} className={styles.period}>.</span>
  </span>
</h1>
```

```css
.period {
  position: relative;
  display: inline-block;
  color: var(--home-accent);
  line-height: 1;
}
```

- `period` 요소의 오른쪽 중앙이 SVG path 시작 좌표다.
- 연결선을 위한 별도의 시작 원을 렌더링하지 않는다.
- SVG 자체는 `aria-hidden="true"`이며 `pointer-events: none`이다.
- 끝점만 작은 원을 사용하며 패널 왼쪽 경계에 붙인다.
- 제목, CTA, 본문 위로 선이 지나가지 않게 제어점을 계산한다.

기본 path:

```ts
const createPath = ({ start, end, offset }: PathArgs) => {
  const endX = end.x + offset.x;
  const endY = end.y + offset.y;
  const distance = Math.max(80, endX - start.x);

  return [
    `M ${start.x} ${start.y}`,
    `C ${start.x + distance * 0.3} ${start.y},`,
    `${endX - distance * 0.35} ${endY},`,
    `${endX} ${endY}`,
  ].join(' ');
};
```

좌표는 Hero 컨테이너를 기준으로 정규화한다. `getBoundingClientRect()`는 초기 측정과 resize 시에만 사용한다.

### Resize 처리

- `ResizeObserver`로 Hero, 온점, 패널 크기 변화를 감지한다.
- 폰트 로딩 완료 후 한 번 더 좌표를 측정한다.
- 스크롤마다 DOM 위치를 읽지 않는다.
- observer 콜백은 `requestAnimationFrame`으로 한 프레임에 한 번만 반영한다.

## 7. 패널 Floating과 선 동기화

### 동작 원칙

- 온점과 선의 시작점은 고정한다.
- 패널은 위아래로 천천히 이동한다.
- 선 끝점은 패널과 정확히 같은 motion value를 사용한다.
- 선의 중간 제어점은 패널 이동량의 약 35~45%만 따라가게 하여 약한 탄성을 만든다.
- 선 전체를 독립적으로 흔들거나 파형처럼 만들지 않는다.

권장 기본값:

```ts
const FLOAT_Y = 8;
const FLOAT_X = 2;
const FLOAT_DURATION = 5.2;
```

Framer Motion 사용 예시:

```tsx
const floatX = useMotionValue(0);
const floatY = useMotionValue(0);

const pathD = useTransform([floatX, floatY], ([x, y]) =>
  createPath({
    start: geometry.start,
    end: geometry.end,
    offset: { x: Number(x), y: Number(y) },
  }),
);

<motion.div
  ref={panelRef}
  className={styles.floatingPanel}
  style={{ x: floatX, y: floatY }}
  animate={reduceMotion ? undefined : { x: [0, 2, 0, -2, 0], y: [0, -8, 0, 6, 0] }}
  transition={{
    duration: 5.2,
    ease: 'easeInOut',
    repeat: Infinity,
  }}
>
  <FeaturedProjectPanel />
</motion.div>

<svg className={styles.connector} aria-hidden="true">
  <motion.path d={pathD} />
  <motion.circle
    cx={useTransform(floatX, (x) => geometry.end.x + Number(x))}
    cy={useTransform(floatY, (y) => geometry.end.y + Number(y))}
    r="4"
  />
</svg>
```

실제 프로젝트의 Framer Motion 버전에 맞게 타입과 API를 조정한다. 이미 다른 모션 체계를 사용 중이라면 새 라이브러리를 추가하지 말고 동일한 좌표·동기화 원칙만 적용한다.

### 성능 조건

- 패널 이동은 `transform`만 사용한다.
- 매 animation frame마다 `getBoundingClientRect()`를 실행하지 않는다.
- 한 개의 공유 motion value로 패널과 SVG 끝점을 갱신한다.
- 선의 그림자, blur, filter 애니메이션을 사용하지 않는다.
- floating으로 레이아웃 크기나 스크롤 높이가 변하지 않아야 한다.

### Hover와 Focus

- 링크나 패널에 pointer/focus가 들어오면 floating을 현재 위치에서 부드럽게 멈춘다.
- 벗어나면 갑자기 튀지 않고 현재 위치에서 다시 순환한다.
- hover 전용 정보는 만들지 않는다.

## 8. 진입 모션

- Header: 180ms fade-in
- Eyebrow → 제목 → 설명 → CTA: 60~80ms stagger
- 패널: `opacity: 0 → 1`, `translateY(18px) → 0`, 약 520ms
- 연결선: 패널이 표시된 뒤 `stroke-dashoffset`으로 약 400ms 동안 그린다.
- 연결선 그리기가 끝난 후 floating을 시작한다.
- 진입 모션은 최초 1회만 실행하고 반복하지 않는다.
- 스크롤에 따라 Hero를 과도하게 확대·회전시키지 않는다.

## 9. Featured Project 인터랙션

- `CASE STUDY`는 AI Agent 프로젝트 상세로 이동하는 실제 링크다.
- `프로젝트 보기`는 Projects 페이지 또는 프로젝트 섹션으로 이동한다.
- 하단 화살표를 구현한다면 수동으로만 프로젝트를 전환한다. 자동 슬라이드하지 않는다.
- 프로젝트가 바뀔 때 패널 콘텐츠는 160~280ms crossfade한다.
- `FEATURED 01 / 04`와 접근 가능한 프로젝트 이름을 함께 갱신한다.
- 전환 버튼에는 접근 가능한 이름을 제공한다.

```tsx
<button aria-label="이전 대표 프로젝트">...</button>
<button aria-label="다음 대표 프로젝트">...</button>
<p aria-live="polite">AI Agent, 1 / 4</p>
```

### 프로젝트 검색

검색 영역은 장식용 목업이 아니라 실제 프로젝트 탐색 UI로 구현한다.

- 시각적 label: `PROJECT SEARCH`
- 접근 가능한 label: `프로젝트 검색`
- placeholder: `프로젝트명 또는 기술 검색`
- 검색 대상: 프로젝트명, 설명, 기능 키워드, 기술 스택
- 추천 검색어: `React`, `WebOS`, `AI Agent`
- 추천 검색어는 실제 `button`이며 누르면 즉시 같은 검색 로직을 실행한다.
- `Cmd+K`와 `Ctrl+K`로 검색창에 focus한다. Mac이 아니어도 동작하도록 두 조합을 모두 지원한다.
- 검색 중 `ArrowDown`/`ArrowUp`으로 결과를 이동하고 `Enter`로 선택하며 `Escape`로 닫는다.
- 선택 시 Featured 패널과 `FEATURED nn / 04`를 해당 프로젝트로 갱신한다.
- 검색 결과는 최대 3개까지만 노출한다. 결과가 많으면 Projects 페이지 링크를 제공한다.
- 일치 결과가 없을 때는 `검색 결과가 없습니다.`를 표시하고 입력값을 유지한다.
- 입력값을 지우거나 검색창 밖으로 focus가 이동하면 결과 목록을 닫는다.
- 검색 데이터는 기존 `projects.ts`에서 파생하며 별도의 중복 목록을 만들지 않는다.
- 한국어와 영문 검색은 `trim()` 및 소문자 정규화 후 부분 일치로 처리한다.
- 입력창 위 라벨과 추천 검색어를 항상 노출하여 목업 이미지로 오해하지 않게 한다.
- 화면 진입 약 600~900ms 후 검색창 border를 한 번만 약하게 강조할 수 있다. 반복 pulse와 자동 타이핑은 사용하지 않는다.
- 검색 영역에 pointer/focus가 들어오면 패널 floating을 현재 위치에서 부드럽게 멈춘다.

권장 마크업:

```tsx
<section aria-labelledby="project-search-label">
  <label id="project-search-label" htmlFor="project-search">
    PROJECT SEARCH
    <span className="sr-only">프로젝트 검색</span>
  </label>
  <input
    id="project-search"
    type="search"
    placeholder="프로젝트명 또는 기술 검색"
    role="combobox"
    aria-expanded={isOpen}
    aria-controls="project-search-results"
    aria-activedescendant={activeResultId}
    autoComplete="off"
  />
  <div aria-label="추천 검색어">
    {['React', 'WebOS', 'AI Agent'].map((keyword) => (
      <button type="button" onClick={() => search(keyword)} key={keyword}>
        {keyword}
      </button>
    ))}
  </div>
  <ul id="project-search-results" role="listbox">...</ul>
</section>
```

`role="combobox"` 적용 시 포커스는 input에 유지하고 활성 결과를 `aria-activedescendant`로 알린다. 결과 선택 후에는 변경된 프로젝트명을 `aria-live="polite"` 영역에서 안내한다.

## 10. 접근성과 모션 감소

- 모든 이동 요소는 콘텐츠를 가리지 않는다.
- `prefers-reduced-motion: reduce`에서는 다음을 적용한다.

```css
@media (prefers-reduced-motion: reduce) {
  .floatingPanel {
    transform: none !important;
  }

  .connector path {
    stroke-dasharray: none;
    stroke-dashoffset: 0;
  }
}
```

- 모션 감소 환경에서는 패널과 선을 정지된 최종 위치로 보여준다.
- 모바일에서는 연결선을 숨기되 온점은 일반 문장부호로 남긴다.
- 키보드로 Header, CTA, Case Study, 프로젝트 전환 버튼을 조작할 수 있어야 한다.
- 검색 input, 추천 검색어, 결과 목록을 키보드만으로 조작할 수 있어야 한다.
- `focus-visible`은 코랄색 3px 링 또는 명확한 밑줄로 표시한다.
- 장식 원, grid, SVG 연결선은 스크린리더에서 숨긴다.
- 색상 하나만으로 링크·활성 상태를 표현하지 않는다.

## 11. 상태 및 데이터

```ts
type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  previewItems: string[];
  stack: string[];
  searchKeywords: string[];
  href: string;
};
```

- Featured Project 데이터는 별도 파일로 분리한다.
- 제목, 설명, 스택, 링크를 JSX 여러 곳에 중복 작성하지 않는다.
- 연결선 좌표나 애니메이션 상태를 전역 스토어에 넣지 않는다.
- Hero 내부의 지역 상태와 custom hook으로 관리한다.
- 검색어, 열림 여부, 활성 결과 index도 Hero 또는 검색 컴포넌트의 지역 상태로 관리한다.
- 검색 결과는 `useMemo`로 프로젝트 원본 데이터에서 파생하고 결과 자체를 별도 state로 중복 저장하지 않는다.

## 12. 구현 순서

1. 기존 프로젝트의 라우팅, 스타일, 토큰, 모션 라이브러리 분석
2. 공통 Header와 디자인 토큰 적용
3. 정적 Hero 레이아웃 및 반응형 구현
4. Featured Project Panel 구현
5. 온점과 패널 anchor 측정
6. SVG 연결선 구현
7. 패널 floating과 path 끝점 동기화
8. 프로젝트 검색, 추천 검색어, 결과 선택 구현
9. CTA와 프로젝트 전환 연결
10. 키보드·reduced-motion 처리
11. 타입 검사, lint, build 및 화면 검증

## 13. 완료 조건

- [ ] 데스크톱에서 텍스트와 패널이 시각적으로 겹치지만 글자를 가리지 않는다.
- [ ] 결과가 단순한 50:50 2열 템플릿처럼 보이지 않는다.
- [ ] `Developer.`의 실제 온점 하나만 보인다.
- [ ] 선이 온점 오른쪽 끝에서 간격 없이 시작된다.
- [ ] 선 끝점이 패널 왼쪽 경계에 붙는다.
- [ ] 패널이 움직여도 선 시작점은 고정되고 끝점만 정확히 따라간다.
- [ ] 선 중간은 약하게 휘며 독립적으로 출렁이지 않는다.
- [ ] floating이 transform 기반이며 layout shift를 만들지 않는다.
- [ ] hover/focus 상태에서 조작을 방해하지 않는다.
- [ ] 모바일에서 overlap, floating, 연결선을 제거한 단일 열이다.
- [ ] reduced-motion에서 자동 모션이 완전히 정지한다.
- [ ] 모든 링크와 버튼을 키보드로 조작할 수 있다.
- [ ] 검색창이 label, placeholder, 추천 검색어를 통해 실제 입력 요소로 인식된다.
- [ ] `Cmd+K`와 `Ctrl+K`가 검색창에 focus한다.
- [ ] 추천 검색어와 검색 결과를 키보드로 선택할 수 있다.
- [ ] 검색 결과 선택 시 Featured 프로젝트와 index가 함께 변경된다.
- [ ] 검색 결과 목록은 최대 3개이며 빈 결과 상태가 있다.
- [ ] 360px, 768px, 1024px, 1440px에서 화면을 확인했다.
- [ ] 기존 다른 페이지와 사용자 변경사항을 수정하지 않았다.
- [ ] typecheck, lint, build가 통과한다.

## 14. 구현 시 피할 것

- 시안 PNG를 Hero 배경 또는 이미지 태그 하나로 삽입
- 별도의 장식 원을 온점 위에 겹쳐 이중 마침표 생성
- 카드만 움직이고 선은 고정
- 선 전체를 sine wave처럼 흔드는 효과
- animation frame마다 DOM 위치 재측정
- 마우스 위치를 과도하게 따라다니는 parallax
- 검색 가능성을 자동 타이핑, 반복 pulse, 큰 툴팁으로 설명
- placeholder만으로 검색 label을 대체
- 검색 결과와 프로젝트 원본 데이터를 별도로 중복 관리
- 모든 패널에 강한 그림자 사용
- 프로젝트 성과·수치를 임의로 생성
- 모바일에서 데스크톱 overlap을 강제로 유지
- 기존 구조를 무시한 전면 재작성
