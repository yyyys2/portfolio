# Experience 페이지 구현 가이드

## 1. 목표

Experience는 이력서 전체를 그대로 옮기는 페이지가 아니다. 방문자가 다음 내용을 빠르게 판단하도록 구성한다.

1. 언제부터 어떤 환경에서 일했는지
2. 현재 회사에서 어떤 역할을 맡고 있는지
3. 회사별로 어떤 업무와 프로젝트를 경험했는지
4. 더 자세한 프로젝트와 이력서를 어디서 확인할 수 있는지

Projects의 문제 해결 사례를 반복하지 않는다. Experience에서는 회사·역할·기간·담당 범위를 중심으로 보여주고 기술적 상세는 Projects로 연결한다.

## 2. 참고 이미지 우선순위

- `experience-default.png`: Hero, Preview, 경력 목록의 기본 배치
- `experience-detail-expanded.png`: `상세 보기`를 눌렀을 때 실제 상세 본문이 행 아래에 펼쳐지는 방식
- 콘텐츠·동작이 이미지와 충돌하면 이 문서를 우선한다.

## 3. 고정 문구

### Header

- Logo: `KIM YUN YOUNG`
- Nav: `PROJECTS / EXPERIENCE / ABOUT / CONTACT`
- Active: `EXPERIENCE`

### Hero

- Eyebrow: `EXPERIENCE · CAREER`
- Title: `Experience.`
- Period: `2018 — NOW`
- Description: `웹 서비스 구축부터 운영·유지보수까지의 경험을 정리했습니다.`

### Preview

- Label: `CAREER PREVIEW`
- Status: `● INTERACTIVE`
- Helper: `회사를 선택하면 요약이 바뀝니다.`
- Selected state: `● / 선택됨`
- Unselected state: `○ / 보기 →`
- CTA: `선택한 경력 상세 보기 ↓`

### Resume CTA

- Eyebrow: `RESUME`
- Title: `전체 경력과 기술 스택`
- Action: `이력서 다운로드 ↓`

## 4. 경력 데이터

표시 순서는 시작일 역순이며, 실제 기간이 겹치는 경력도 날짜를 임의로 바꾸지 않는다.

```ts
export type CareerProject = {
  id: string;
  title: string;
  period: string;
  summary: string;
  projectId?: string;
};

export type Career = {
  id: string;
  index: string;
  period: string;
  company: string;
  role: string;
  headline: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projects: CareerProject[];
};
```

### 01 주식회사 오큐브

- Period: `2021 — NOW`
- Role: `Senior Frontend Developer`
- Headline: `웹 서비스 구축부터 운영까지`
- Description: `React와 TypeScript를 중심으로 사용자 서비스와 관리자 시스템을 개발했습니다.`
- Responsibilities:
  - `React · TypeScript 기반 웹 서비스 및 관리자 시스템 개발`
  - `Zustand · TanStack Query 기반 상태 관리 구조 설계`
  - `webOS 기반 디바이스 서비스 및 운영 화면 개발`
  - `일정 관리, 코드 리뷰, 개발 가이드 정립`
- Technologies: `React / TypeScript / Zustand / TanStack Query / Svelte / webOS`
- Projects:
  - `webOS 기반 멀티 플랫폼 서비스` · `2021.09 —` · `사용자 웹 · 관리자 CMS · TV 앱 개발`
  - `금융 서비스 홈페이지 리뉴얼` · `2024.01 — 2024.08` · `React · TypeScript 기반 서비스 및 관리자 재구축`
  - `어르신 무임 교통카드 발급·관리 시스템` · `2024.01 — 2024.08` · `발급 업무와 관리자 운영 화면 구현`

### 02 엘컴퓨터학원

- Period: `2020 — 2021`
- Role: `Team Lead · Instructor`
- Headline: `웹 개발 교육과 실습 프로젝트 운영`
- Description: `프론트엔드 및 웹 개발 과정을 운영하고 실습 프로젝트를 지도했습니다.`
- Responsibilities:
  - `프론트엔드 및 웹 개발 과정 교육 운영`
  - `실습 프로젝트 지도 및 코드 리뷰`
- Technologies: 실제 공개 가능한 교육 기술만 기존 데이터에서 연결한다.
- Projects: 별도의 Projects 상세가 없으면 빈 배열로 둔다.

### 03 운김

- Period: `2020`
- Role: `Founder · Frontend Developer`
- Headline: `웹 서비스 기획과 프론트엔드 개발`
- Description: `서비스 기획부터 UI·UX 설계와 프론트엔드 구현까지 진행했습니다.`
- Responsibilities:
  - `웹 서비스 기획 및 프론트엔드 개발`
  - `사용자 흐름 기반 UI·UX 설계와 인터페이스 구현`
- Technologies: 실제 프로젝트 데이터가 있을 때만 표시한다.
- Projects: 별도의 Projects 상세가 없으면 빈 배열로 둔다.

### 04 위컴 WECOM

- Period: `2018 — 2020`
- Role: `Frontend Developer`
- Headline: `기업 웹사이트와 웹 솔루션 개발`
- Description: `사용자 서비스와 관리자 화면을 중심으로 프론트엔드 업무를 담당했습니다.`
- Responsibilities:
  - `기업 웹사이트 및 웹 솔루션 프론트엔드 개발`
  - `사용자 서비스와 관리자 인터페이스 구현`
- Technologies: 실제 프로젝트 데이터가 있을 때만 표시한다.
- Projects: 별도의 Projects 상세가 없으면 빈 배열로 둔다.

## 5. 기본 화면

### 5.1 레이아웃

- Desktop은 좌측 Hero와 우측 Career Preview의 비대칭 2열 구조다.
- Preview는 Hero보다 위로 조금 떠 있고, 약한 그림자와 브라우저 창 형태를 사용한다.
- Hero 아래에는 4개 경력 행을 전체 폭으로 배치한다.
- 지나치게 둥근 카드 묶음 대신 1px 구분선과 넓은 행 간격을 사용한다.

### 5.2 선택 상태

- 초기 Preview 대상은 `ocube`다.
- Preview 대상 행은 옅은 코랄 배경, 좌측 코랄 선, 코랄 번호를 사용한다.
- Preview에는 accordion으로 오해할 수 있는 `+ / −`를 사용하지 않는다.
- 현재 선택된 회사는 coral dot과 `선택됨`, 나머지는 hollow navy circle과 `보기 →`를 사용한다.
- 하단 목록의 `상세 보기 → / 접기 ↑`만 상세 accordion의 실제 toggle이다.

## 6. 상단 Career Preview

Preview는 회사 탐색을 돕는 짧은 요약이다.

- 회사명
- 기간
- 직무
- 핵심 업무 최대 2~3개
- Projects에 공개된 관련 항목 최대 2개
- 하단 CTA `선택한 경력 상세 보기 ↓`

### 6.1 동작

- pointer hover: 임시 Preview 변경
- keyboard focus: 임시 Preview 변경
- click, Enter, Space: 선택 Preview 고정
- pointer가 패널을 벗어나면 마지막 고정 대상 또는 현재 열린 상세 회사로 복귀
- 상세 accordion이 열리면 Preview도 해당 회사로 동기화
- 회사 행 선택만으로 하단 상세를 열거나 viewport를 이동하지 않는다.
- `선택한 경력 상세 보기 ↓`를 선택하면 현재 고정된 회사의 하단 accordion을 열고 해당 경력 행로 이동한다.
- 해당 상세가 이미 열려 있다면 새 상태 변경 없이 상세 시작 위치로만 이동한다.
- 자동 순환 금지

Preview와 상세 본문에 동일한 긴 콘텐츠를 중복하지 않는다.

### 6.2 Preview CTA 흐름

```ts
function openSelectedCareerDetail() {
  setExpandedCareerId(previewCareerId);

  requestAnimationFrame(() => {
    document
      .getElementById(`career-row-${previewCareerId}`)
      ?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
  });
}
```

- 실제 구현에서는 sticky Header 높이만큼 `scroll-margin-top`을 Career row에 준다.
- CTA를 누른 직후 focus를 강제로 상세 제목으로 옮기지 않는다.
- 이동 후에도 keyboard 사용자가 현재 위치를 잃지 않도록 CTA 또는 열린 row toggle에 합리적으로 focus를 유지한다.
- URL hash를 사용할 경우 기존 라우팅과 충돌하지 않는지 먼저 확인한다.

## 7. 온점 Connector

- `Experience.`의 마지막 온점 자체가 시작점이다.
- 별도의 장식 dot을 제목 옆에 추가하지 않는다.
- SVG overlay의 곡선은 온점 오른쪽 중앙에서 Preview의 현재 선택 node 왼쪽 중앙까지 연결한다.
- `getBoundingClientRect()`와 공통 좌표계를 사용한다.
- font ready, ResizeObserver, viewport resize, Preview 전환 완료 시 갱신한다.
- scroll 또는 animation frame마다 layout을 측정하지 않는다.
- Preview floating과 endpoint에 같은 motion 값을 적용한다.
- connector는 `pointer-events: none`, 장식 목적이므로 `aria-hidden="true"`다.

## 8. 상세 Accordion

### 8.1 핵심 규칙

`상세 보기` 선택 시 해당 경력 행 바로 다음 DOM 위치에 상세 본문을 렌더링한다.

```text
Career row 01 — selected — 접기 ↑
└─ Career detail 01
   ├─ Role / headline / description
   ├─ 주요 업무
   ├─ 주요 프로젝트
   └─ 사용 기술
Career row 02 — collapsed — 상세 보기 →
Career row 03 — collapsed — 상세 보기 →
Career row 04 — collapsed — 상세 보기 →
```

- 상세는 overlay, modal, 오른쪽 panel 또는 별도 페이지로 열지 않는다.
- 상세가 나머지 행을 아래로 밀어내는 문서 흐름을 유지한다.
- 한 번에 한 회사만 연다.
- 열린 행 action은 `접기 ↑`다.
- 같은 toggle을 다시 누르면 닫힌다.
- 다른 회사를 열면 기존 상세를 닫고 새 상세를 연다.

### 8.2 상세 콘텐츠 구조

```tsx
<article id={`career-detail-${career.id}`} aria-labelledby={`career-title-${career.id}`}>
  <header>{/* ROLE, headline, description */}</header>
  <section>{/* 주요 업무 */}</section>
  {career.projects.length > 0 && <section>{/* 주요 프로젝트 */}</section>}
  {career.technologies.length > 0 && <section>{/* 사용 기술 */}</section>}
</article>
```

- 본문 최대 폭은 페이지 container 안에서 유지한다.
- 작은 3열 카드로 내용을 압축하지 않는다.
- label과 내용 2열은 넓은 화면에서만 사용하고 본문 텍스트는 충분한 폭과 행간을 확보한다.
- 관련 프로젝트가 없으면 빈 영역이나 가짜 링크를 만들지 않는다.
- 프로젝트 설명은 한 줄 요약만 표시하고 Problem/Action/Result는 Projects에서 보여준다.

### 8.3 상태 예시

```ts
const [previewCareerId, setPreviewCareerId] = useState('ocube');
const [expandedCareerId, setExpandedCareerId] = useState<string | null>(null);

function toggleCareer(id: string) {
  setExpandedCareerId((current) => (current === id ? null : id));
  setPreviewCareerId(id);
}
```

URL 상태가 기존 앱의 패턴과 맞는 경우에만 `?career=ocube` 또는 hash를 사용할 수 있다. 새 라우팅 의존성을 추가하지 않는다.

## 9. 모션

- Preview floating: 5~7초, 4~6px 범위의 매우 약한 반복 움직임
- Connector: 최초 진입 시 한 번만 draw 가능
- Accordion: opacity와 height/layout을 180~260ms 범위로 전환
- 다른 회사를 열 때 기존 상세 close 후 새 상세 open이 자연스럽게 이어지게 한다.
- `max-height: 9999px` 같은 임의 상수를 사용하지 않는다.

`prefers-reduced-motion: reduce`에서는 floating, connector draw, smooth scroll, accordion transition을 제거하고 즉시 상태를 변경한다.

## 10. 접근성

- 모든 회사 toggle은 실제 `button`이다.
- `aria-expanded={expandedCareerId === career.id}`
- `aria-controls="career-detail-{id}"`
- 상세 container에 대응하는 `id`와 제목 연결을 제공한다.
- toggle 후 focus는 누른 button에 유지한다.
- 자동으로 scroll하거나 focus를 이동하지 않는다.
- 별도의 `상세 내용으로 이동` 링크를 제공하는 경우에만 상세 제목에 `tabIndex={-1}` 후 focus한다.
- hover와 focus-visible은 같은 정보를 제공한다.
- 터치 영역은 최소 44×44px다.
- 색상만으로 열린 상태를 전달하지 않고 label과 `aria-expanded`를 함께 사용한다.

## 11. 반응형

### 1024px 이상

- Hero/Preview 2열
- 경력 행: 번호 / 기간 / 회사 / 직무 / action
- 상세의 label/content 보조 2열 허용

### 768~1023px

- Hero와 Preview를 세로 배치하거나 Preview 폭을 줄인다.
- 경력 행은 회사와 직무를 한 그룹으로 묶는다.
- 상세 프로젝트 행은 제목 / 설명 / action 2단 구조로 전환한다.

### 767px 이하

- 상단 floating Preview와 connector를 숨긴다.
- Preview CTA도 함께 숨긴다.
- Hero 다음에 경력 accordion 목록을 바로 배치한다.
- 경력 행은 `기간 → 회사 → 직무 → toggle` 세로 구조다.
- 상세 본문은 단일 열이다.
- 기술 chip은 자연스럽게 줄바꿈한다.
- 프로젝트 action은 행 전체가 아니라 명확한 link/button으로 제공한다.

## 12. 구현 권장 구조

```text
ExperiencePage
├─ PageHeader
├─ ExperienceHero
│  ├─ HeroCopy
│  ├─ CareerPreview
│  └─ DotConnector
├─ CareerList
│  └─ CareerItem × N
│     ├─ CareerRow
│     └─ CareerDetail (conditional)
├─ ResumeCTA
└─ PageFooter
```

기존 Home/About/Projects에서 connector, floating, reduced-motion hook을 사용하고 있다면 공통화해서 재사용한다. Experience 한 페이지 때문에 새로운 motion 또는 state 라이브러리를 추가하지 않는다.

## 13. 완료 조건

- [ ] 기본 화면이 `experience-default.png`의 밀도와 구성을 따른다.
- [ ] 상세 화면이 `experience-detail-expanded.png`처럼 선택 행 바로 아래에서 열린다.
- [ ] Preview와 상세의 목적이 분리되어 있다.
- [ ] Preview에 `+ / −`가 없고 `선택됨 / 보기 →`가 사용된다.
- [ ] hover와 keyboard focus에서 Preview가 동일하게 바뀐다.
- [ ] click/Enter/Space로 Preview 선택과 상세 toggle이 가능하다.
- [ ] Preview 회사 선택만으로 scroll 또는 accordion open이 발생하지 않는다.
- [ ] `선택한 경력 상세 보기 ↓`가 현재 선택 회사의 하단 상세를 열고 해당 행으로 이동한다.
- [ ] 상세는 한 번에 하나만 열린다.
- [ ] toggle의 `aria-expanded`와 `aria-controls`가 정확하다.
- [ ] toggle 후 focus가 사라지거나 임의 이동하지 않는다.
- [ ] 온점과 Preview node 연결선이 viewport 변화에도 맞는다.
- [ ] 모바일에서 Preview와 connector가 제거된다.
- [ ] reduced-motion에서 모든 불필요한 모션이 제거된다.
- [ ] 없는 프로젝트 링크, 임의 성과, 임의 수치를 만들지 않는다.
- [ ] 이력서 파일이 없을 때 가짜 download를 만들지 않는다.
- [ ] typecheck, lint, build가 통과한다.
