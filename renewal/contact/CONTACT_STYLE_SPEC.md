# Contact Visual Style Specification

이 문서는 `contact-final.png`를 React/CSS로 최대한 동일하게 재현하기 위한 **시각 전용 스펙**이다. 기능과 데이터는 `CONTACT_IMPLEMENTATION_GUIDE.md`를 따르며, 크기·간격·색상이 충돌할 때는 이 문서를 우선한다.

## 1. 구현 원칙

Contact는 한 화면에서 끝나는 의도적인 저밀도 페이지다.

1. 좌측 Hero와 우측 Quick Contact panel만 main focus로 둔다.
2. `Contact.` 실제 온점에서 panel node로 연결한다.
3. EMAIL/GITHUB/RESUME 탭 전환으로 연락 경로를 바꾼다.
4. footer에는 copyright만 둔다.

다음 요소를 절대 다시 추가하지 않는다.

- 하단 `01 EMAIL / 02 GITHUB / 03 RESUME` 목록
- 별도 `궁금한 점은 이메일로 남겨주세요` 영역
- Footer의 email, Contact link
- 문의 form
- 콘텐츠 부족을 채우기 위한 소개·SNS·location section

## 2. 기준 Artboard

| 속성 | 값 |
| --- | ---: |
| Reference | `contact-final.png` |
| viewport | `1536 × 1024px` |
| page inset | `67px` |
| content width | `1402px` |
| Header | `y: 0~86px` |
| Main | `y: 86~940px` |
| Footer rule | `y: 940px` |
| Footer | `y: 940~1024px` |

Desktop QA 허용 오차:

- box 위치·크기 `±8px`
- font `±2px`
- connector `±4px`
- 색상 RGB channel `±8`

## 3. Token과 배경

```css
:root {
  --c-bg: #fbfaf8;
  --c-surface: rgb(255 255 255 / 92%);
  --c-navy: #001a63;
  --c-blue: #2874d5;
  --c-copy: #315d96;
  --c-coral: #ef4939;
  --c-coral-deep: #c95645;
  --c-coral-light: #dc8b7b;
  --c-coral-soft: #fff0ed;
  --c-border: #cbd7e3;
  --c-shadow: 0 20px 48px rgb(18 42 74 / 14%);
}
body {
  margin: 0;
  color: var(--c-navy);
  background:
    radial-gradient(circle at 15% 19%, rgb(255 255 255 / 68%), transparent 34%),
    #fbfaf8;
  font-family: "Pretendard Variable", Pretendard, Inter, system-ui, sans-serif;
}
```

## 4. 페이지 Shell과 Header

```css
.contactPage {
  min-height: 100svh;
  display: grid;
  grid-template-rows: 86px minmax(0, 1fr) 84px;
  overflow: clip;
}
.pageContainer { width: min(calc(100% - 134px), 1402px); margin-inline: auto; }
.siteHeader { display: flex; justify-content: space-between; padding-top: 32px; }
.logo { font-size: 22px; line-height: 1; font-weight: 700; letter-spacing: -.02em; }
.nav { display: flex; gap: 44px; }
.nav a { position: relative; font-size: 14px; line-height: 1; font-weight: 500; }
.nav a[aria-current="page"]::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -15px;
  height: 2px; background: var(--c-coral);
}
```

## 5. Main 좌표와 비대칭 Layout

```css
.contactMain { position: relative; }
.heroCopy {
  position: absolute; left: 12px; top: 264px;
  width: 650px; z-index: 30;
}
.quickContactWrap {
  position: absolute; left: 748px; top: 164px;
  width: 624px; height: 419px; z-index: 20;
}
```

전체 artboard 좌표:

| 영역 | Left | Top | Width | Height |
| --- | ---: | ---: | ---: | ---: |
| Hero copy | `79px` | `350px` | `650px` | `225px` |
| Quick Contact | `815px` | `250px` | `624px` | `419px` |
| Connector | `516px` | `369px` | `320px` | `122px` |
| left rear circle | `721px` | `449px` | `245px` | `246px` |
| upper rear circle | `914px` | `201px` | `306px` | `249px` |
| right rear circle | `1242px` | `312px` | `259px` | `276px` |

Panel은 정확한 50:50 column이 아니라 Hero보다 위쪽에 배치된다.

## 6. Hero Typography

```css
.eyebrow {
  margin: 0 0 27px; color: var(--c-coral);
  font-size: 17px; line-height: 1; font-weight: 500;
}
.title {
  margin: 0; width: fit-content;
  color: var(--c-navy); font-size: 108px; line-height: .92;
  font-weight: 800; letter-spacing: -.07em;
}
.title .period {
  color: transparent;
  background: linear-gradient(105deg, #c15845, #db8d7d);
  background-clip: text;
}
.description {
  margin: 28px 0 0; color: var(--c-blue);
  font-size: 31px; line-height: 1.35; font-weight: 600; letter-spacing: -.04em;
}
```

- `Contact.`는 한 줄.
- description도 desktop에서는 한 줄이다.
- 제목 전체를 coral로 만들지 않고 온점만 coral이다.

## 7. Connector

- 시작: title 실제 온점 오른쪽 중앙, 약 `(532, 483)`.
- 종료: panel 좌측 coral ring 중앙, 약 `(823, 376)`.
- stroke `#ef4939`, `1.7px`; fill none.
- 시작점에 별도 ring을 만들지 않는다.
- 종료 ring 외경 `17px`, 내부 coral dot `5px`.
- connector는 description 위를 지나지 않고 title baseline에서 우상향한다.

## 8. Quick Contact Window

```css
.quickContact {
  width: 100%; height: 100%; overflow: hidden;
  border: 1px solid #ccd8e4; border-radius: 10px;
  background: var(--c-surface); box-shadow: var(--c-shadow);
  backdrop-filter: blur(5px);
}
.panelChrome {
  height: 45px; display: grid;
  grid-template-columns: 90px 1fr auto auto;
  align-items: center; border-bottom: 1px solid var(--c-border);
}
```

- chrome dots `12px`, gap `8px`.
- title `QUICK CONTACT`, `16px`, 500.
- INTERACTIVE badge `136×32px`, pale coral, red dot.
- more button은 우측 `22px` inset.

## 9. Helper와 Tabs

```css
.panelBody { padding: 21px 26px 24px; }
.panelHelper { margin: 0 0 14px; color: var(--c-blue); font-size: 16px; }
.contactTabs {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
}
.contactTab {
  height: 52px; border: 1px solid #a9c1e5; border-radius: 5px;
  background: #fff; color: #075ad8; font-size: 17px;
}
.contactTab[aria-selected="true"] {
  color: #fff; border-color: transparent;
  background: linear-gradient(105deg, #c65542, #de8878);
}
```

- tab 좌표는 panel x 기준 `26, 221, 416px` 부근.
- active tab에 shadow를 추가하지 않는다.
- tab gap과 높이를 세 tab 모두 동일하게 유지한다.

## 10. Tab Panel

```css
.contactTabPanel {
  min-height: 230px; margin-top: 13px; padding: 24px 27px;
  border-radius: 6px;
  background: linear-gradient(135deg, #fff1ee 0%, #fff8f6 100%);
}
.methodLabel { color: var(--c-copy); font-size: 16px; line-height: 1; }
.methodValue {
  margin: 13px 0 20px; color: var(--c-navy);
  font-size: 37px; line-height: 1.05; font-weight: 800; letter-spacing: -.045em;
}
.methodActions { display: grid; grid-template-columns: 1.08fr .92fr; gap: 10px; }
.methodAction {
  height: 51px; display: inline-flex; align-items: center; justify-content: center;
  border-radius: 6px; font-size: 17px; text-decoration: none;
}
.methodAction.primary { color: #fff; background: linear-gradient(105deg, #c65542, #de8878); }
.methodAction.secondary { color: var(--c-navy); background: #fff; border: 1px solid var(--c-coral); }
.methodNote { margin: 17px 0 0; color: var(--c-copy); font-size: 15px; }
```

### EMAIL

- value `bellelaide1005@gmail.com`.
- primary `이메일 작성 →`, secondary `주소 복사`.
- 긴 email을 한 줄로 보여주기 위해 panel 폭과 `37px` size를 유지한다.

### GITHUB

- 동일한 shell과 vertical rhythm 유지.
- value `github.com/yyyys2`.
- primary action만 있으면 action 영역을 억지로 2등분하지 말고 최대 폭 `270px`.

### RESUME

- value `김윤영 프론트엔드 이력서`.
- primary `이력서 다운로드 ↓`.
- 실제 asset이 없으면 disabled placeholder를 그리지 않는다.

## 11. 장식과 Z-index

```css
.ornamentCircle { position: absolute; border-radius: 50%; background: rgb(217 119 99 / 10%); }
```

| Layer | z-index |
| --- | ---: |
| rear circles | `0` |
| Panel | `20` |
| connector | `25` |
| Hero copy | `30` |
| controls | `40` |

장식 원은 총 3개를 넘기지 않는다. dashed circle, star, grid, noise는 추가하지 않는다.

## 12. Footer

```css
.contactFooter {
  width: min(calc(100% - 134px), 1402px); margin-inline: auto;
  border-top: 1px solid #cdd8e2;
  display: flex; align-items: center; justify-content: flex-end;
  color: #075ad8; font-size: 12px;
}
```

- copyright baseline은 약 `y: 974px`.
- email, Contact link, social icon을 footer 좌측에 추가하지 않는다.
- copyright: `© 2026 KIM YOON YOUNG. ALL RIGHTS RESERVED.`

## 13. Motion과 상태

- panel float `translateY(0 → -5px)`, `6s`, ease-in-out infinite.
- panel hover/focus-within 시 pause.
- tab panel transition `180~220ms`, opacity + translateY `4px` 이내.
- tab 자동 순환 금지.
- connector draw는 최초 1회만 가능.
- reduced motion에서는 float, draw, smooth transition 제거.
- copy success state는 button label만 `복사됨 ✓`로 바꾸고 layout shift 금지.

## 14. 반응형

### 1024~1199px

- page inset `40px`.
- Hero width `47%`, panel width `52%`.
- title `clamp(78px, 9vw, 98px)`, description `26px`.
- email value `clamp(27px, 3vw, 35px)`.

### 768~1023px

- page grid rows는 header/auto/footer.
- Hero copy와 Panel을 normal flow에서 세로 stack.
- Hero top padding `80px`, panel margin-top `56px`.
- connector와 floating 제거.
- main은 자연 높이로 늘어나며 footer는 그 아래에 위치.

### 0~767px

- page inset `20px`, header `72px`.
- title `clamp(58px, 17vw, 76px)`.
- description `22px/1.45`; 문장이 필요에 따라 wrap.
- panel width `100%`, fixed height 제거.
- tabs는 3열을 우선하되 최소 hit area `44px`.
- tab panel padding `20px`.
- email value `clamp(23px, 7vw, 31px)`, `overflow-wrap:anywhere`.
- actions 1열, 각 높이 최소 `48px`.
- footer height auto, padding `28px 0`, copyright 우측 정렬 유지.

## 15. Visual QA

- [ ] 1536×1024에서 Header/Main/Footer가 한 viewport에 완결된다.
- [ ] Hero는 `Contact.` 한 줄이고 온점만 coral이다.
- [ ] 실제 온점에서 panel ring까지 connector가 이어진다.
- [ ] Quick Contact panel이 reference와 같은 크기·위치·밀도다.
- [ ] EMAIL/GITHUB/RESUME가 실제 tab이며 자동 전환하지 않는다.
- [ ] 하단 연락처 목록·추가 CTA·문의 form이 없다.
- [ ] footer에는 copyright만 있다.
- [ ] desktop 주요 box 오차가 ±8px 이내이고 mobile 가로 scroll이 없다.

