# Portfolio Projects 최종 구현 가이드

## 1. 구현 목표

두 참고 이미지를 기준으로 Projects 페이지를 구현한다.

- `projects-list-final.png`: 프로젝트를 빠르게 훑고 선택하는 기본 상태
- `projects-expanded-final.png`: 선택한 프로젝트를 세로 흐름으로 읽는 상세 상태

핵심 원칙:

- Hero, 프로젝트 목록, 선택 Preview가 하나의 비대칭 편집 레이아웃을 이룬다.
- `Projects.`의 실제 마지막 온점과 현재 Preview를 연결한다.
- 기본 상태의 작은 Preview는 상세 진입 시 큰 상세 이미지로 이동·확장된다.
- 동일 프로젝트 이미지를 위아래에 중복으로 렌더링하지 않는다.
- 상세 정보는 3열로 압축하지 않고 `문제 → 구현 → 결과`의 세로 흐름으로 보여준다.
- 프로젝트 Archive는 기본적으로 접어 화면 밀도를 낮춘다.
- PNG 전체를 페이지 이미지로 삽입하지 않고 React + TypeScript, CSS, SVG로 재현한다.

## 2. 고정 콘텐츠

### Header와 Hero

```text
KIM YUN YOUNG
PROJECTS · EXPERIENCE · ABOUT · CONTACT

PROJECTS · SELECTED WORK

Selected
Projects.

참여한 프로젝트의 담당 업무와 문제 해결 과정을 정리했습니다.
```

`PROJECTS` 메뉴는 활성 상태이며 짧은 코랄 밑줄을 표시한다.

### 프로젝트 목록

```text
01 AI Agent
대화·차트·테이블·메일 응답과 Canvas 패널을 구현했습니다.
React · TypeScript · Zustand · TanStack Query

02 webOS 오버레이 앱
TV 시청 흐름을 유지하는 오버레이와 리모컨 포커스 이동을 구현했습니다.
Svelte · TypeScript · webOS

03 디지털 사이니지
대시보드·리스트의 데이터 동기화와 조회·수정 흐름을 개선했습니다.
React · TypeScript · TanStack Query

04 Memomi
빠른 기록과 재진입에 집중한 Windows 메모 앱을 개발했습니다.
Tauri · React · TypeScript
```

선정 근거는 `PROJECT_SELECTION.md`, Home과 Projects의 공통 데이터는 `src/data/selectedProjects.ts`를 기준으로 한다.

기본 action은 `상세 보기 ↓`, 펼친 프로젝트 action은 `접기 ↑`다.

### AI Agent 상세

```text
공개용 재구성 화면 · 실제 기능 흐름을 기준으로 제작

01 PROBLEM
응답 유형마다 화면과 후속 작업이 달랐습니다.
차트·테이블·메일 응답은 서로 다른 상태와 작업 흐름을 가졌습니다.
Canvas 확장까지 함께 관리해야 했습니다.

02 IMPLEMENTATION
응답 데이터와 화면 상태의 책임을 나눴습니다.
응답 유형을 명확하게 구분하고 유형별 렌더러를 구성했습니다.
서버 상태와 UI 상태도 각각의 역할에 맞게 분리했습니다.

03 RESULT
기존 흐름을 유지하며 기능을 추가할 수 있게 했습니다.
공통 처리 영역을 유지한 채 새로운 응답 유형과 후속 작업을
추가할 수 있는 구조로 정리했습니다.

FRONTEND DECISIONS
응답 모델 — Zod Discriminated Union
서버 상태 — TanStack Query
화면 상태 — Zustand
공통 UI — Popup · Canvas Panel
```

실제 이력서나 프로젝트 데이터가 코드에 있다면 그 데이터를 우선한다. 날짜, 성과 수치, 사용자 수, 개선율을 임의로 추가하지 않는다.

## 3. 디자인 시스템

Home과 About의 공통 Header, 색상, 간격, 폰트, focus 스타일을 그대로 사용한다.

```css
:root {
  --portfolio-bg: #f4f2ee;
  --portfolio-surface: #fbfaf7;
  --portfolio-surface-strong: #fff;
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
}
```

- 한글: Pretendard Variable, Pretendard, system-ui
- 한글에 명조, 필기체, 이탤릭을 사용하지 않는다.
- 제목 `Selected`는 네이비, `Projects.`는 코랄이다.
- 프로젝트 행과 설명 섹션은 둥근 카드가 아니라 얇은 구분선으로 구성한다.
- 둥근 모서리와 shadow는 재구성된 제품 UI에만 제한적으로 사용한다.

## 4. 기본 목록 상태

### Desktop 1200px 이상

- Hero는 12열 기준의 비대칭 구조다.
- 제목은 좌측, 현재 프로젝트 Preview는 우측 상단에 둔다.
- 텍스트와 Preview 영역은 약 1열 겹치지만 서로 가리지 않는다.
- Hero 제목: `clamp(64px, 6vw, 92px)`, 행간 `0.95~1.02`
- Preview 폭: `clamp(580px, 49vw, 760px)`
- Preview에는 `● LIVE PREVIEW`를 표시한다.
- Hero 아래에 4개의 flat project row를 배치한다.
- 행 전체는 `button` 또는 내부에 한 개의 명확한 toggle button을 갖는다.
- 현재 Preview 대상 행은 옅은 코랄 배경과 좌측 코랄 선으로 표시한다.
- tag는 작고 낮은 대비로 표현하며 행 자체를 card로 만들지 않는다.
- Archive 표는 표시하지 않고 `OTHER PROJECTS / 다른 프로젝트 보기 +` disclosure row만 노출한다.

## 5. Preview 선택과 상태

추천 상태 구조:

```ts
type ProjectId = 'ai-agent' | 'tv-overlay-shopping' | 'digital-signage-management' | 'memomi';

type ProjectsUIState = {
  previewProjectId: ProjectId;
  expandedProjectId: ProjectId | null;
  archiveOpen: boolean;
};
```

- 초기 `previewProjectId`는 첫 프로젝트다.
- pointer hover 또는 keyboard focus 시 Preview만 해당 프로젝트로 바꾼다.
- hover가 해제되면 마지막으로 선택/확장된 프로젝트로 돌아가고, 없으면 첫 프로젝트로 돌아간다.
- 행을 click하거나 Enter/Space로 실행하면 `expandedProjectId`를 토글한다.
- 한 번에 하나의 상세만 펼친다.
- 펼친 행은 `aria-expanded="true"`, `aria-controls`로 상세 영역과 연결한다.
- Preview 변경은 180~260ms crossfade로 처리한다.
- 화면 자동 순환은 사용하지 않는다.

```tsx
<button
  type="button"
  aria-expanded={expandedProjectId === project.id}
  aria-controls={`project-detail-${project.id}`}
  onMouseEnter={() => setPreviewProjectId(project.id)}
  onFocus={() => setPreviewProjectId(project.id)}
  onClick={() => toggleProject(project.id)}
>
  ...
</button>
```

## 6. 온점과 연결선

`Projects.`의 실제 온점이 문장부호이자 시작 anchor다. 별도 시작 원을 추가하지 않는다.

```tsx
<h1>
  <span>Selected</span>
  <span className={styles.accent}>
    Projects<span ref={startAnchorRef} className={styles.period}>.</span>
  </span>
</h1>
```

- 온점 오른쪽 중앙에서 SVG path가 간격 없이 시작된다.
- 기본 상태에서는 작은 Preview 왼쪽 경계의 종료 node에 연결한다.
- 상세 전환 시 동일한 visual container가 아래 상세 위치로 이동하고 연결선 끝점도 함께 이동한다.
- Hero, 온점, Preview container를 `ResizeObserver`로 관찰한다.
- 폰트 로딩 완료, viewport resize, Preview 크기 변경, 상세 open/close 완료 후 geometry를 갱신한다.
- scroll 또는 animation frame마다 DOM 위치를 측정하지 않는다.
- SVG는 `aria-hidden="true"`, `pointer-events: none`이다.
- 선 중간 제어점은 endpoint 이동량의 35~45%만 반영한다.
- 선을 독립적인 wave로 흔들지 않는다.

## 7. Preview에서 상세로 전환

### 가장 중요한 규칙

기본 Preview와 상세 제품 이미지를 동시에 두 개 렌더링하지 않는다.

가능하면 한 개의 visual source를 공유한다.

- Framer Motion이 기존 의존성에 있으면 `layoutId` 또는 공유 layout transition을 사용한다.
- 없다면 기본 Preview fade-out → 상세 visual fade/scale-in으로 전환한다.
- 전환 시간: 약 420~620ms
- 과도한 rotate, bounce, spring overshoot를 사용하지 않는다.
- 전환 중 connector endpoint는 같은 transform/motion value를 따른다.
- 상세 open 후 필요한 경우 선택 행이 viewport 상단 근처에 오도록 부드럽게 scroll한다.
- 사용자가 이미 상세 영역을 보고 있다면 불필요하게 scroll 위치를 바꾸지 않는다.
- `prefers-reduced-motion`에서는 즉시 위치를 변경하고 전환 animation을 생략한다.

## 8. 상세 정보 레이아웃

- 선택 행 바로 아래에 상세 section을 삽입한다.
- 제품 visual은 content 폭 약 `1100~1200px`로 크게 표시한다.
- 이미지 아래에 공개용 재구성 caption을 항상 표시한다.
- 문제, 구현, 결과는 세 개의 세로 section이다.
- 각 section은 좌측에 번호와 영문 label, 우측에 큰 한글 제목과 본문을 둔다.
- 본문 최대 폭은 약 `680px`, 행간은 `1.55~1.75`다.
- section 사이에는 충분한 vertical padding과 얇은 divider를 둔다.
- 작은 3열 카드나 한 줄 요약으로 압축하지 않는다.
- `FRONTEND DECISIONS`는 4행 definition list로 구현한다.
- 상세가 끝난 다음에만 나머지 project row를 보여준다.

## 9. 공개용 재구성 이미지 기준

회사 프로젝트의 실제 화면을 사용할 수 없으면 공개용 재구성 화면을 사용해도 된다.

- 실제로 담당한 기능과 UX 흐름만 재구성한다.
- 구현하지 않은 기능을 추가하지 않는다.
- 회사명, 고객명, 로고, 내부 URL, 계정, 개인정보, 실제 업무 데이터를 제거한다.
- 모든 메시지, 표, 날짜, 사용자 정보는 샘플 데이터로 바꾼다.
- 실제 디자인과 다르면 `실제 화면`이라고 표현하지 않는다.
- 제품 visual 바로 아래에 `공개용 재구성 화면 · 실제 기능 흐름을 기준으로 제작`을 표시한다.
- 이미지가 AI로 제작됐더라도 핵심은 AI 사용 여부가 아니라 실제 업무를 오인시키지 않는 것이다.
- 면접 설명: `보안상 실제 화면을 공개할 수 없어, 담당한 기능 흐름을 기준으로 재구성했습니다.`
- 성과와 역할 설명은 사실로 확인 가능한 범위만 사용한다.

## 10. Other Projects

- 초기에는 닫힌 disclosure row다.
- control은 실제 `button`이며 `aria-expanded`와 `aria-controls`를 제공한다.
- 열면 프로젝트 Archive를 연도, 프로젝트명, 담당 영역, 기술 순으로 표시한다.
- table을 사용한다면 모바일에서 의미가 유지되도록 header association을 제공한다.
- 기본 화면의 4개 Selected Projects와 Archive 항목이 중복되면 Archive에서는 제외하거나 중복임을 명확히 한다.

## 11. 반응형

### Tablet 768~1199px

- Hero Preview의 겹침을 줄이고 제목을 가리지 않게 우측 아래로 이동한다.
- 목록 행은 번호/제목, 설명, action의 2행 구조가 될 수 있다.
- 상세 visual은 가용 폭 100%를 사용한다.
- 상세 설명의 좌측 label 폭을 줄이되 세로 흐름은 유지한다.

### Mobile 0~767px

- Header → Hero → Project list 순서의 단일 열이다.
- Hero의 floating Preview와 connector를 숨긴다.
- 각 project row에 작은 정적 thumbnail을 선택적으로 표시한다.
- hover에 의존하지 않고 toggle button으로만 Preview/상세를 연다.
- 펼친 상세 visual은 가로 scroll을 만들지 않는다.
- 복잡한 제품 UI는 전체 이미지를 축소하지 말고 핵심 영역 crop 또는 단계별 2~3개 이미지로 보여줄 수 있다.
- 상세 section은 label → heading → body의 완전한 단일 열이다.
- 모든 toggle과 link는 최소 44×44px 터치 영역을 확보한다.

## 12. 접근성과 모션 감소

- 프로젝트 행 toggle, 상세 접기, Other Projects를 키보드로 조작할 수 있어야 한다.
- hover로 바뀌는 Preview는 동일하게 focus에서도 바뀌어야 한다.
- 상태와 action을 색상만으로 표현하지 않는다.
- 열린 상세 제목에 `tabIndex={-1}`를 주고 programmatic focus를 이동할 수 있다.
- 상세 open/close는 `aria-expanded`, `aria-controls`로 알린다.
- Preview 변경 자체는 장식적이면 live announcement를 남발하지 않는다.
- 상세 open은 `aria-live="polite"` 또는 focus 이동 중 하나로 명확히 알린다.
- `focus-visible`은 코랄 3px outline 또는 충분한 대비의 밑줄을 사용한다.
- `prefers-reduced-motion`에서는 floating, connector draw, shared layout transition, scroll animation을 제거한다.

## 13. 데이터 모델

```ts
type Project = {
  id: string;
  index: string;
  title: string;
  summary: string;
  stack: string[];
  preview: {
    src?: string;
    alt: string;
    isReconstruction: boolean;
    caption?: string;
  };
  detail: {
    problem: ProjectStory;
    implementation: ProjectStory;
    result: ProjectStory;
    decisions: Array<{ label: string; value: string }>;
  };
};

type ProjectStory = {
  title: string;
  body: string;
};
```

- 목록, Preview, 상세는 하나의 project data source를 사용한다.
- 같은 문구를 JSX 여러 곳에 중복 작성하지 않는다.
- Preview 선택과 accordion 상태는 페이지 지역 상태로 관리한다.
- connector geometry를 전역 store에 넣지 않는다.

## 14. 구현 순서

1. 기존 Home/About의 Header, token, connector, motion 구조 확인
2. 프로젝트 데이터를 하나의 source로 정리
3. Hero와 기본 목록 레이아웃 구현
4. hover/focus Preview 전환 구현
5. 온점과 Preview connector 구현
6. accordion open/close와 한 개 상세만 열기 구현
7. Preview → 상세 shared transition 구현
8. AI Agent 세로 상세 story와 Decisions 구현
9. Other Projects disclosure 구현
10. 모바일, 키보드, reduced-motion 처리
11. typecheck, lint, build 및 viewport별 검증

## 15. 완료 조건

- [ ] Home/About과 동일한 Header와 디자인 토큰을 사용한다.
- [ ] Header에 PROJECTS, EXPERIENCE, ABOUT, CONTACT가 모두 있다.
- [ ] Hero 문구가 고정 콘텐츠와 일치한다.
- [ ] `Projects.`의 실제 온점 하나만 연결선 시작점으로 보인다.
- [ ] 선 끝점이 현재 Preview와 함께 움직인다.
- [ ] 프로젝트 hover와 focus에서 Preview가 동일하게 변경된다.
- [ ] 선택 행이 코랄 선, 배경, action text로 구분된다.
- [ ] `상세 보기`를 누르면 한 개의 상세만 열린다.
- [ ] 작은 Preview와 큰 상세 visual이 동시에 중복 노출되지 않는다.
- [ ] 상세 visual과 본문이 읽을 수 있는 크기다.
- [ ] 문제, 구현, 결과가 세로 순서로 읽힌다.
- [ ] 공개용 재구성 caption이 visual 바로 아래에 있다.
- [ ] 다른 프로젝트는 상세 내용이 끝난 뒤에 나온다.
- [ ] Other Projects는 초기 닫힘 상태다.
- [ ] 모바일에서 connector, floating, hover 의존성이 제거된다.
- [ ] reduced-motion에서 자동 motion과 smooth scroll이 정지한다.
- [ ] 360px, 768px, 1024px, 1440px에서 확인했다.
- [ ] keyboard-only로 프로젝트 선택, 상세 열기/닫기, Archive 열기가 가능하다.
- [ ] typecheck, lint, build가 통과한다.
- [ ] 다른 페이지와 사용자의 기존 변경사항을 수정하지 않았다.

## 16. 구현 시 피할 것

- PNG 전체를 Hero 또는 페이지 image로 삽입
- Hero 온점 옆에 별도의 dot 추가
- Preview는 움직이는데 connector endpoint는 고정
- 기본 Preview와 상세 visual 중복 노출
- 상세 정보를 한 화면에 맞추려고 글씨와 이미지를 축소
- 문제, 구현, 결과를 작은 3열 카드로 압축
- 모든 프로젝트를 동시에 펼치기
- hover에서만 접근할 수 있는 기능
- 자동 carousel 또는 반복적인 Preview 전환
- 실제 화면으로 오인될 수 있는 재구성 이미지
- 회사 또는 사용자 정보가 포함된 원본 화면 공개
- 근거 없는 성과 수치와 기능 생성
- 강한 parallax, bounce, glow, blur, gradient
- Archive를 기본 상태에서 모두 펼쳐 화면을 복잡하게 만들기
