# Portfolio About 최종 구현 가이드

## 1. 구현 목표

`reference-images/about-final-approved.png`를 기준으로 포트폴리오 About 페이지를 구현한다.

- 거창한 소개 문구보다 실제 개발 환경과 작업 기준을 간결하게 보여준다.
- Hero 제목과 개발 도구 패널을 비대칭으로 배치한다.
- `방식.`의 실제 마지막 온점에서 패널까지 연결선을 이어 Home과 같은 시각 언어를 유지한다.
- 패널은 이미지가 아니라 직접 조작할 수 있는 Component Playground로 구현한다.
- 아래에는 세 가지 작업 기준과 Experience 이동 CTA만 둔다.
- 시안 PNG를 그대로 삽입하지 않고 React + TypeScript, CSS, SVG로 재현한다.

## 2. 고정 콘텐츠

```text
Logo
KIM YUN YOUNG

Navigation
PROJECTS · EXPERIENCE · ABOUT · CONTACT
ABOUT active

Eyebrow
ABOUT · FRONTEND DEVELOPER

Headline
화면을 만드는
방식.

Description
React와 TypeScript를 중심으로 웹 서비스를 개발해왔습니다.
신규 구축부터 운영·유지보수, Svelte 기반 webOS 프로젝트를 경험했습니다.

Interactive badge
● INTERACTIVE DEMO

Interactive guide
상태를 선택하면 UI와 코드가 바뀝니다.

State controls
DEFAULT · FOCUS · DONE

Core strengths label
CORE STRENGTHS

01 제품 UI
기획 의도와 실제 사용 흐름을 확인하며 화면을 구현합니다.

02 프론트엔드 구조
기능 추가와 변경에 대응하기 쉬운 컴포넌트 구조를 설계합니다.

03 접근성과 인터랙션
키보드 조작과 포커스 이동 등 기본적인 접근성을 확인합니다.

Bottom CTA label
EXPERIENCE

Bottom CTA title
담당 업무와 프로젝트별 경험

Bottom CTA button
경력 보기 →
```

경력 기간, 회사명, 프로젝트명, 성과 수치를 임의로 추가하지 않는다. 실제 데이터가 별도로 제공되면 데이터 파일에서 관리한다.

## 3. 디자인 시스템

Home 페이지의 토큰과 공통 컴포넌트를 그대로 사용한다. 페이지마다 비슷한 색을 새로 만들지 않는다.

```css
:root {
  --portfolio-bg: #f4f2ee;
  --portfolio-surface: #fbfaf7;
  --portfolio-surface-strong: #ffffff;
  --portfolio-text: #17202a;
  --portfolio-text-muted: #68778b;
  --portfolio-accent: #c98272;
  --portfolio-accent-hover: #b97061;
  --portfolio-accent-soft: #f2ddd7;
  --portfolio-border: #d9d8d3;
  --portfolio-shadow: 0 18px 45px rgb(23 32 42 / 8%);
  --portfolio-page-max: 1440px;
  --portfolio-page-padding: clamp(20px, 4vw, 64px);
  --portfolio-header-height: 88px;
  --portfolio-float-duration: 5.8s;
}
```

- 모든 한글: `Pretendard Variable`, Pretendard, system-ui
- 영문 label과 메뉴: 동일 산세리프 또는 프로젝트 공통 영문 산세리프
- 한글에 명조체, 필기체, 이탤릭을 사용하지 않는다.
- 코랄은 제목 강조, 연결선, 선택·focus 상태, CTA에 제한적으로 사용한다.
- panel radius와 shadow는 Home보다 강하게 만들지 않는다.

## 4. 페이지 레이아웃

### Desktop 1200px 이상

- 전체 폭: `min(100% - 2 * page-padding, 1440px)`
- Header 아래에 Hero, Core Strengths, Experience CTA 순서로 배치한다.
- Hero는 12열 그리드를 기준으로 하되 50:50 분할처럼 보이지 않게 한다.
- 텍스트: 대략 1~7열, 패널: 7~12열에서 시작하되 서로 1열가량 시각적으로 겹친다.
- 패널 폭: `clamp(520px, 44vw, 650px)`
- 패널은 제목의 우측 상단 공간에 떠 있으며 글자를 가리지 않는다.
- Hero 제목 크기: `clamp(64px, 5.8vw, 88px)`, 행간 `0.98~1.06`
- `화면을 만드는`은 네이비, `방식.`은 코랄이다.
- 설명은 두 줄, 최대 폭 약 `700px`로 유지한다.
- 장식 원과 점선은 `aria-hidden="true"`이며 낮은 대비로 배경에 둔다.

### Core Strengths

- 카드 3개로 만들지 말고 하나의 가로 editorial band로 구현한다.
- 상단과 하단에 얇은 구분선을 둔다.
- 3개 항목 사이에는 세로 구분선만 사용한다.
- 번호와 작은 아이콘은 코랄, 제목은 네이비, 설명은 muted 색상이다.
- 항목 hover 시 제목과 아이콘만 160~200ms로 약하게 강조한다. 추가 설명이나 팝업은 만들지 않는다.

### Experience CTA

- 독립적인 대형 배너가 아니라 페이지 하단의 얇은 CTA row다.
- 왼쪽에 label과 제목, 오른쪽에 `경력 보기 →` 링크를 둔다.
- 링크는 Experience route로 이동한다.

## 5. 권장 컴포넌트 구조

```text
AboutPage
├─ SiteHeader
├─ AboutHero
│  ├─ AboutHeroCopy
│  │  └─ ConnectorAnchorPeriod
│  ├─ ComponentPlaygroundFloat
│  │  └─ ComponentPlayground
│  │     ├─ ComponentTree
│  │     ├─ DemoStatusTabs
│  │     ├─ DemoPreview
│  │     └─ CodePreview
│  └─ HeroConnector
├─ CoreStrengths
└─ ExperienceCTA
```

권장 파일 예시:

```text
src/
├─ pages/AboutPage.tsx
├─ components/layout/SiteHeader.tsx
├─ components/about/AboutHero.tsx
├─ components/about/ComponentPlayground.tsx
├─ components/about/ComponentTree.tsx
├─ components/about/DemoStatusTabs.tsx
├─ components/about/HeroConnector.tsx
├─ components/about/CoreStrengths.tsx
├─ hooks/useConnectorGeometry.ts
├─ hooks/useReducedMotion.ts
├─ data/about.ts
└─ styles/tokens.css
```

Home의 `HeroConnector`, `useConnectorGeometry`, `useReducedMotion`을 페이지에 종속되지 않게 일반화할 수 있다면 재사용한다. 무리한 공통화로 두 페이지의 레이아웃을 동일하게 만들지는 않는다.

## 6. 온점과 연결선

화면에 보이는 `방식.`의 실제 온점 하나가 문장부호이자 연결선 시작점이다. 온점 옆에 장식용 시작 원을 추가하지 않는다.

```tsx
<h1 className={styles.title}>
  <span>화면을 만드는</span>
  <span className={styles.accent}>
    방식<span ref={startAnchorRef} className={styles.period}>.</span>
  </span>
</h1>
```

- `period` 오른쪽 중앙에서 SVG path를 간격 없이 시작한다.
- SVG는 Hero 영역 전체에 absolute로 배치하고 `pointer-events: none`으로 설정한다.
- 패널 왼쪽 경계에 종료 node 하나만 둔다.
- path가 설명문, 패널의 조작 요소, Core Strengths를 지나지 않게 한다.
- Hero, 온점, 패널을 `ResizeObserver`로 관찰한다.
- 폰트 로딩 완료와 viewport resize 후 좌표를 다시 계산한다.
- scroll 또는 animation frame마다 `getBoundingClientRect()`를 호출하지 않는다.

권장 path 계산:

```ts
const createPath = ({ start, end, offset }: PathArgs) => {
  const endX = end.x + offset.x;
  const endY = end.y + offset.y;
  const distance = Math.max(100, endX - start.x);

  return [
    `M ${start.x} ${start.y}`,
    `C ${start.x + distance * 0.34} ${start.y + 8},`,
    `${endX - distance * 0.32} ${endY - 12},`,
    `${endX} ${endY}`,
  ].join(' ');
};
```

## 7. Component Playground 인터랙션

패널은 시각 장식이 아니라 실제 동작하는 작은 데모다.

### 고정 UI

- 상단 badge: `● INTERACTIVE DEMO`
- 왼쪽 tree: `<App>`, `<Header />`, `<Main>`, `<Search />`, `<Button />`, `<Card />`, `<Footer />`
- `<Button />`을 초기 선택 상태로 표시한다.
- 오른쪽 안내: `상태를 선택하면 UI와 코드가 바뀝니다.`
- 상태 tab: `DEFAULT`, `FOCUS`, `DONE`
- Preview와 Code 영역을 함께 갱신한다.

### 상태 동작

```ts
type DemoState = 'default' | 'focus' | 'done';
```

| 상태 | Preview | Code 표시 |
| --- | --- | --- |
| DEFAULT | 기본 primary 버튼 | 기본 variant 및 click handler |
| FOCUS | 명확한 3px focus ring이 있는 버튼 | `:focus-visible` 또는 focus prop |
| DONE | 체크 아이콘과 `완료되었습니다` 상태 | 완료 상태/disabled 또는 status prop |

- tab은 실제 `button` 요소로 구현한다.
- 선택 상태는 `aria-pressed` 또는 `role="tablist"`/`role="tab"` 패턴 중 하나를 일관되게 사용한다.
- tab 선택 시 Preview와 Code를 160~220ms crossfade한다.
- 처음 진입할 때만 `DEFAULT → FOCUS → DEFAULT`를 짧게 보여줄 수 있다.
- 최초 데모는 사용자가 조작하거나 focus를 주는 즉시 중단한다.
- 반복 자동 전환은 사용하지 않는다.
- `prefers-reduced-motion`에서는 최초 상태 데모도 실행하지 않는다.
- Tree의 다른 component를 실제로 구현하지 않을 경우 clickable처럼 만들지 않는다. `<Button />`만 선택된 정적 treeitem으로 처리한다.
- Code preview는 실행기나 편집기가 아니므로 `pre > code`로 렌더링하며 focus 대상에 포함하지 않는다.

권장 tab markup:

```tsx
<div role="tablist" aria-label="버튼 상태 선택">
  {demoStates.map((item) => (
    <button
      key={item.id}
      role="tab"
      aria-selected={state === item.id}
      aria-controls={`demo-panel-${item.id}`}
      onClick={() => setState(item.id)}
    >
      {item.label}
    </button>
  ))}
</div>
```

키보드는 Left/Right 또는 Up/Down으로 tab을 이동하고 Home/End를 지원한다. Preview 변경 내용은 `aria-live="polite"`로 짧게 알린다.

## 8. Floating과 연결선 동기화

- Home보다 조금 잔잔하게: x `1~2px`, y `4~6px`, duration 약 `5.8~6.2s`
- 패널 이동은 `transform`만 사용한다.
- 온점과 선 시작점은 고정한다.
- 선 끝점은 패널과 같은 x/y motion value를 사용한다.
- 선 중간 제어점은 패널 이동량의 약 35~40%만 따른다.
- 선 전체를 독립적으로 흔들거나 파형처럼 만들지 않는다.
- 연결선을 먼저 그린 후 floating을 시작한다.
- panel pointer/focus 진입 시 현재 위치에서 floating을 부드럽게 멈춘다.
- pointer/focus가 나가면 현재 위치에서 자연스럽게 다시 시작한다.

Framer Motion이 이미 있다면 Home과 동일한 공유 motion value 방식을 사용한다. 없다면 CSS transform animation과 CSS custom property/SVG 갱신을 조합하되 매 프레임 DOM 측정은 금지한다.

## 9. 반응형

### Tablet 768~1199px

- 텍스트와 패널의 겹침을 줄인다.
- 제목이나 설명을 가리면 패널을 우측 아래로 이동한다.
- 연결선 공간이 부족하면 길이를 줄이되 시작·끝 규칙은 유지한다.
- Core Strengths는 3열을 유지할 수 있으나 설명이 과도하게 좁으면 2+1 또는 단일 열로 전환한다.

### Mobile 0~767px

- Header → Hero copy → Component Playground → Core Strengths → Experience CTA의 단일 열이다.
- absolute overlap, SVG 연결선, floating, panel tilt를 제거한다.
- `방식.`의 온점은 일반 문장부호로 남긴다.
- Component Playground는 화면 폭에 맞게 단순화한다.
- Tree와 Code를 동시에 표시하기 어렵다면 state tabs + Preview를 우선하고 Tree/Code는 접을 수 있는 영역으로 제공한다.
- tab과 CTA 최소 터치 영역은 44×44px이다.
- Core Strengths는 카드로 바꾸지 않고 구분선을 사용한 세로 목록으로 전환한다.

## 10. 접근성과 모션 감소

- Header, state tabs, Experience CTA를 키보드만으로 조작할 수 있어야 한다.
- focus-visible은 코랄 3px ring 또는 명확한 이중 대비 outline을 사용한다.
- 선택된 tab은 색상 외에도 border, text, `aria-selected`로 구분한다.
- 장식 원, grid, SVG connector는 스크린리더에서 숨긴다.
- Code 색상은 정보 전달의 유일한 수단으로 사용하지 않는다.
- `prefers-reduced-motion: reduce`에서는 진입 stagger, 최초 상태 데모, floating, connector draw animation을 정지하고 최종 정적 상태를 표시한다.
- motion 정지 여부와 관계없이 모든 콘텐츠와 조작 기능이 동일해야 한다.

## 11. 상태와 데이터

```ts
type DemoStateItem = {
  id: 'default' | 'focus' | 'done';
  label: string;
  previewLabel: string;
  code: string;
};

type CoreStrength = {
  id: string;
  index: string;
  title: string;
  description: string;
  icon: ReactNode;
};
```

- demo 상태는 Component Playground의 지역 상태로 관리한다.
- connector geometry와 animation 상태를 전역 store에 넣지 않는다.
- Core Strengths와 demo 상태 데이터는 JSX에 여러 번 중복하지 않는다.
- code string에 사용자 입력을 실행하거나 `dangerouslySetInnerHTML`을 사용하지 않는다.

## 12. 구현 순서

1. 기존 Home 구현과 공통 Header, token, connector hook, motion 체계 확인
2. About 정적 레이아웃과 고정 콘텐츠 구현
3. Component Playground 정적 UI 구현
4. 상태 tab, Preview, Code 동기화 구현
5. 온점과 panel anchor 측정 및 SVG connector 구현
6. floating과 connector 끝점 동기화
7. Core Strengths와 Experience CTA 구현
8. 반응형, 키보드, reduced-motion 처리
9. typecheck, lint, build 및 viewport별 확인

## 13. 완료 조건

- [ ] Home과 같은 색상·Header·연결선 언어를 사용하지만 Home 복제처럼 보이지 않는다.
- [ ] Hero가 단순한 50:50 텍스트/이미지 구조가 아니다.
- [ ] `방식.`의 실제 온점 하나만 보인다.
- [ ] 선이 온점에서 간격 없이 시작하고 panel 경계의 종료 node에 붙는다.
- [ ] panel floating 중 선 끝점이 정확히 함께 움직인다.
- [ ] Component Playground가 이미지가 아닌 실제 HTML control로 동작한다.
- [ ] `INTERACTIVE DEMO`와 안내 문구로 조작 가능성을 인식할 수 있다.
- [ ] DEFAULT, FOCUS, DONE 선택 시 Preview와 Code가 함께 변경된다.
- [ ] 상태 tab을 마우스와 키보드로 조작할 수 있다.
- [ ] Core Strengths는 카드가 아닌 가로 band다.
- [ ] Experience CTA가 올바른 route로 이동한다.
- [ ] 모바일에서 overlap, connector, floating이 제거된다.
- [ ] reduced-motion에서 모든 자동 motion이 멈춘다.
- [ ] 360px, 768px, 1024px, 1440px에서 확인했다.
- [ ] typecheck, lint, build가 통과한다.
- [ ] 다른 페이지와 사용자의 기존 변경사항을 수정하지 않았다.

## 14. 구현 시 피할 것

- 참고 PNG를 배경이나 단일 image로 삽입
- 온점 옆에 별도 시작 dot을 추가해 이중 마침표 생성
- panel만 움직이고 connector는 고정
- line을 sine wave처럼 독립적으로 흔드는 효과
- 매 animation frame DOM 위치 측정
- Component Playground를 동작하지 않는 장식 UI로 구현
- 모든 Tree 항목을 동작하는 것처럼 오해시키기
- 상태를 반복 자동 전환하여 사용자의 조작을 방해
- 강한 parallax, blur, glow, gradient 사용
- Core Strengths를 둥근 카드 3개로 변경
- 경력, 성과, 프로젝트 정보를 임의로 추가
- 기존 구조를 무시한 전면 재작성

