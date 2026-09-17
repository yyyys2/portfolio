# Home Visual Style Specification

이 문서는 `reference-images/home-final-approved.png`를 React/CSS로 최대한 동일하게 재현하기 위한 **시각 전용 스펙**이다. 기능과 데이터 동작은 기존 `HOME_IMPLEMENTATION_GUIDE.md`를 따르고, 크기·색상·간격·배치가 충돌할 때는 이 문서를 우선한다.

## 1. 구현 우선순위

1. 1487×1058 기준 레이아웃 좌표와 요소 비율
2. 제목과 Featured panel의 크기 및 시각적 겹침
3. Typography, 색상, 간격, 테두리, 그림자
4. 온점 connector와 panel endpoint 위치
5. 반응형 축소 및 단일 열 전환

다음 항목은 구현자가 임의로 바꾸지 않는다.

- Hero를 일반적인 50:50 2열로 재배치하지 않는다.
- 오른쪽 panel을 작은 카드로 축소하지 않는다.
- 제목, panel, CTA, 하단 index의 순서와 위치를 바꾸지 않는다.
- 둥근 카드, gradient, 그림자, 배경 장식을 추가하거나 제거하지 않는다.
- 문구를 요약하거나 줄바꿈 위치를 바꾸지 않는다.
- reference image를 배경 이미지로 삽입하지 않는다.

## 2. 기준 Artboard

| 속성 | 값 |
| --- | ---: |
| Reference image | `home-final-approved.png` |
| 기준 viewport | `1487 × 1058px` |
| 페이지 좌측 여백 | `60px` |
| 페이지 우측 여백 | `61px` |
| 실제 content 폭 | `1366px` |
| Header 기준 높이 | `112px` |
| Hero content 범위 | `y: 132px ~ 906px` |
| 하단 rule | `x: 60px ~ 1426px`, `y: 953px` |
| 하단 index 중심선 | `y: 997px` |

Desktop QA는 우선 `1487×1058` viewport에서 수행한다. 이 크기에서 각 주요 요소의 허용 오차는 다음과 같다.

- 위치 및 크기: `±8px`
- font-size: `±2px`
- line-height: `±3px`
- 색상 RGB 채널: `±8`
- connector 시작·종료점: `±4px`
- panel 회전각: `±0.25deg`

## 3. 전역 Reset 및 배경

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100%;
}

body {
  margin: 0;
  color: #101f2f;
  background:
    radial-gradient(circle at 14% 18%, rgb(255 255 255 / 58%), transparent 34%),
    radial-gradient(circle at 82% 62%, rgb(238 230 226 / 34%), transparent 36%),
    #fbfaf8;
  font-family: "Pretendard Variable", Pretendard, Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}
```

- 배경은 순백색이 아니라 아주 따뜻한 off-white다.
- 전체 페이지에 강한 noise, texture image, vignette를 추가하지 않는다.
- reference의 미세한 색 변화는 낮은 opacity의 radial gradient 두 개까지만 허용한다.

## 4. 색상 Token

```css
:root {
  --c-bg: #fbfaf8;
  --c-surface: rgb(255 255 255 / 88%);
  --c-surface-solid: #ffffff;
  --c-navy: #101f2f;
  --c-navy-soft: #213b59;
  --c-copy: #506985;
  --c-muted: #77879a;
  --c-subtle: #9ca6b1;

  --c-coral: #b9614c;
  --c-coral-mid: #c97867;
  --c-coral-light: #d59485;
  --c-coral-soft: #f4dfda;
  --c-coral-wash: rgb(207 140 125 / 14%);

  --c-border: #d7d9da;
  --c-border-soft: #e8e8e5;
  --c-grid: rgb(16 31 47 / 7%);
  --c-rule: #c8cdd1;
}
```

### Accent gradient

큰 `Developer.`와 Primary CTA에만 다음 gradient를 사용한다.

```css
background: linear-gradient(100deg, #b95f49 0%, #c67563 46%, #d49384 100%);
```

- Eyebrow, 검색 border, connector, Case Study에는 solid `#b9614c`를 사용한다.
- 페이지 전체에 무분별하게 coral gradient를 반복하지 않는다.

## 5. 페이지 Container와 Header

```css
.homePage {
  position: relative;
  min-height: 100svh;
  overflow: clip;
}

.pageContainer {
  width: min(calc(100% - 120px), 1366px);
  margin-inline: auto;
}

.siteHeader {
  height: 112px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 52px;
}
```

### Header 좌표와 Typography

| 요소 | x | y | 규격 |
| --- | ---: | ---: | --- |
| Logo | `56px` | `54px` | `22px / 1`, weight `700`, letter-spacing `-0.02em` |
| Nav 시작 | `960px` | `54px` | menu `16px`, weight `600` |
| Nav 끝 | `1415px` | `54px` | 우측 정렬 |

```css
.logo {
  color: var(--c-navy);
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
  text-decoration: none;
}

.nav {
  display: flex;
  align-items: center;
  gap: 42px;
}

.nav a {
  min-height: 32px;
  color: var(--c-navy);
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.01em;
  text-decoration: none;
}
```

- Header에 background bar, blur, border, shadow를 추가하지 않는다.
- Desktop Home에서는 active underline을 억지로 추가하지 않는다.

## 6. Hero 전체 Layout

Desktop 기준 Hero는 container 내부의 독립 좌표계를 사용한다.

```css
.homeHero {
  position: relative;
  width: 100%;
  min-height: 946px; /* 1058 - header 112 */
}

.heroCopy {
  position: absolute;
  left: 0;
  top: 149px;
  z-index: 30;
  width: 620px;
}

.featuredPanelWrap {
  position: absolute;
  left: 656px;
  top: 114px;
  z-index: 20;
  width: 710px;
  height: 600px;
}
```

1487×1058 전체 좌표로 환산하면:

| 영역 | Left | Top | Width | Height |
| --- | ---: | ---: | ---: | ---: |
| Hero copy | `60px` | `261px` | `620px` | `560px` |
| Featured panel | `716px` | `226px` | `710px` | `600px` |
| Connector SVG | `590px` | `500px` | `190px` | `120px` |
| Bottom index | `60px` | `953px` | `1366px` | `75px` |

- 텍스트와 panel이 약 `36px` 시각적으로 겹친다.
- panel은 50% column의 중앙이 아니라 오른쪽으로 치우친다.
- Hero copy가 panel 위에 겹쳐 보이지만 실제 글자를 가리지 않는다.

## 7. Hero Copy

### Eyebrow

```css
.eyebrow {
  margin: 0 0 36px;
  color: var(--c-coral);
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.01em;
}
```

- 전체 좌표: `x 60px / y 267px`
- 문구: `FRONTEND DEVELOPER · 7 YEARS`
- uppercase지만 과도한 tracking을 주지 않는다.

### Headline

```css
.headline {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  font-size: 128px;
  font-weight: 850;
  line-height: 0.98;
  letter-spacing: -0.064em;
  white-space: nowrap;
}

.headlinePrimary {
  color: var(--c-navy);
}

.headlineAccent {
  display: inline-flex;
  color: transparent;
  background: linear-gradient(100deg, #b95f49 0%, #c67563 46%, #d49384 100%);
  background-clip: text;
  -webkit-background-clip: text;
}

.headlinePeriod {
  display: inline-block;
  color: var(--c-coral);
  background: none;
}
```

| Line | 기준 bounding box |
| --- | --- |
| `Frontend` | `x: 59~553px`, `y: 328~424px` |
| `Developer.` | `x: 59~621px`, `y: 457~555px` |

- 반드시 2줄이다.
- `Developer.` 마지막 온점은 connector 시작 anchor이며 별도 dot을 추가하지 않는다.
- `font-weight: 900` 때문에 글자가 지나치게 뭉치면 variable font weight `820~860`으로 조정한다.
- width를 맞추기 위해 font-size를 110px 이하로 줄이지 않는다.

### Description

```css
.heroDescription {
  width: 610px;
  margin: 38px 0 0;
  color: var(--c-copy);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: -0.035em;
}
```

- 전체 좌표: `x 59px / y 606px`
- 문구: `화면은 사용하기 편하게, 코드는 고치기 쉽게.`
- 한 줄 유지가 기본이다.

### Primary CTA

```css
.primaryCta {
  position: absolute;
  left: 0;
  top: 477px;
  width: 307px;
  height: 77px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border: 0;
  border-radius: 14px;
  color: #fff;
  background: linear-gradient(100deg, #b95f49 0%, #c67563 58%, #d49384 100%);
  box-shadow: 0 12px 28px rgb(185 97 76 / 16%);
  font-size: 24px;
  font-weight: 650;
  line-height: 1;
  text-decoration: none;
}

.primaryCtaIcon {
  font-size: 34px;
  font-weight: 300;
  transform: translateY(-1px);
}
```

- 전체 좌표: `x 60px / y 738px`
- hover에서 위치를 움직이지 않는다. 색상과 shadow만 약하게 바꾼다.
- pill 형태로 radius를 38px 이상 주지 않는다.

## 8. Featured Panel 외곽

```css
.featuredPanelWrap {
  transform: rotate(2.1deg);
  transform-origin: 52% 48%;
}

.featuredPanel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgb(16 31 47 / 14%);
  border-radius: 16px;
  background: rgb(255 255 255 / 84%);
  box-shadow:
    0 22px 54px rgb(16 31 47 / 10%),
    0 3px 10px rgb(16 31 47 / 5%);
  backdrop-filter: blur(4px);
}
```

- Desktop panel 전체 좌표: `x 716~1426px / y 226~826px`
- 회전 때문에 모서리 좌표가 약간 달라지는 것이 정상이다.
- Panel을 과도하게 반투명하게 만들지 않는다.
- radius를 24px 이상으로 키우지 않는다.

### Panel grid background

```css
.featuredPanel::before {
  content: "";
  position: absolute;
  inset: 60px 0 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--c-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--c-grid) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.75;
}
```

## 9. Panel Top Bar

```css
.panelTopBar {
  position: relative;
  z-index: 2;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 20px;
  border-bottom: 1px solid var(--c-border-soft);
  background: rgb(255 255 255 / 74%);
}

.windowDots {
  display: flex;
  gap: 10px;
}

.windowDot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

.featuredLabel {
  color: var(--c-navy);
  font-size: 17px;
  font-weight: 650;
  letter-spacing: 0.02em;
}
```

- Dots: coral / amber / green.
- Label: `FEATURED PROJECT · AI AGENT`
- Top bar 내부에 navigation이나 close button을 추가하지 않는다.

## 10. Search Area

```css
.searchArea {
  position: relative;
  z-index: 2;
  padding: 26px 30px 0;
}

.searchLabel {
  margin: 0 0 12px;
  color: var(--c-coral);
  font-size: 16px;
  font-weight: 650;
  letter-spacing: 0.035em;
}

.searchControl {
  height: 72px;
  display: grid;
  grid-template-columns: 42px 1fr auto;
  align-items: center;
  gap: 12px;
  padding: 0 24px 0 20px;
  border: 2px solid var(--c-coral-mid);
  border-radius: 15px;
  background: rgb(255 255 255 / 72%);
}

.searchInput {
  min-width: 0;
  border: 0;
  outline: 0;
  color: var(--c-navy);
  background: transparent;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.025em;
}

.searchInput::placeholder {
  color: #75879c;
  opacity: 1;
}

.shortcutHint {
  min-width: 76px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border-radius: 10px;
  color: #697b90;
  background: #f4f3f2;
  font-size: 18px;
}
```

### 추천 검색어

```css
.suggestions {
  min-height: 52px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #64768a;
  font-size: 17px;
}

.suggestionChip {
  height: 38px;
  padding: 0 17px;
  border: 0;
  border-radius: 999px;
  color: #64768a;
  background: var(--c-coral-soft);
  font-size: 16px;
  font-weight: 500;
}
```

- 추천어 순서: `React / 접근성 / AI Agent`
- label과 chip의 baseline이 수평으로 맞아야 한다.
- chip 높이와 간격을 임의로 크게 만들지 않는다.

## 11. Project Preview Card

```css
.projectCard {
  position: absolute;
  z-index: 3;
  left: 30px;
  right: 30px;
  top: 250px;
  min-height: 294px;
  padding: 30px;
  border: 1px solid rgb(16 31 47 / 12%);
  border-radius: 16px;
  background: rgb(255 255 255 / 92%);
  box-shadow: 0 12px 28px rgb(16 31 47 / 7%);
}

.projectHeader {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 28px;
  align-items: center;
}

.projectIcon {
  width: 90px;
  height: 90px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  color: #fff;
  background: linear-gradient(145deg, #c97867, #d89788);
  font-size: 50px;
}

.projectTitle {
  margin: 0;
  color: var(--c-navy);
  font-size: 31px;
  font-weight: 750;
  line-height: 1.1;
  letter-spacing: -0.04em;
}

.projectSummary {
  margin: 10px 0 0;
  color: #60758c;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
}
```

### Feature chips

```css
.featureChips {
  margin: 17px 0 0 118px;
  display: flex;
  gap: 12px;
}

.featureChip {
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 0 16px;
  border-radius: 999px;
  color: #405975;
  background: #f4f3f2;
  font-size: 16px;
  font-weight: 500;
}
```

### Card bottom

```css
.projectCardBottom {
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 24px;
  min-height: 48px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--c-border-soft);
}

.stackList {
  display: flex;
  gap: 10px;
}

.stackChip {
  height: 36px;
  padding: 0 15px;
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  color: #5f7288;
  background: #f4f3f2;
  font-size: 15px;
  font-weight: 500;
}

.caseStudyLink {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--c-coral);
  border-bottom: 2px solid var(--c-coral);
  font-size: 17px;
  font-weight: 650;
  text-decoration: none;
}
```

## 12. 장식 Background Shapes

장식은 panel 뒤에만 배치하며 텍스트 위로 나오지 않는다.

```css
.decorCircleLarge {
  position: absolute;
  left: 770px;
  top: 40px;
  width: 500px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgb(207 140 125 / 12%);
}

.decorCircleSmall {
  position: absolute;
  left: 595px;
  top: 430px;
  width: 310px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgb(207 140 125 / 12%);
}

.decorOutlineCircle {
  position: absolute;
  right: -20px;
  top: 24px;
  width: 255px;
  aspect-ratio: 1;
  border: 1px dashed rgb(80 105 133 / 20%);
  border-radius: 50%;
}

.decorVerticalLine {
  position: absolute;
  right: 200px;
  top: 20px;
  width: 1px;
  height: 775px;
  background: rgb(185 97 76 / 28%);
}
```

- 모든 장식은 `pointer-events:none`, `aria-hidden=true`다.
- blur blob이나 강한 gradient orb로 바꾸지 않는다.

## 13. Connector Style

```css
.connectorSvg {
  position: absolute;
  inset: 0;
  z-index: 25;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.connectorPath {
  fill: none;
  stroke: var(--c-coral);
  stroke-width: 1.6;
  stroke-linecap: round;
}

.connectorEndOuter {
  fill: var(--c-bg);
  stroke: var(--c-coral);
  stroke-width: 4px;
}

.connectorEndInner {
  fill: var(--c-coral);
}
```

1487×1058 기준 예상 anchor:

- Start: `x 616px / y 539px`
- End: `x 747px / y 580px`
- Start는 `Developer.`의 실제 마지막 온점 오른쪽 중앙이다.
- End는 panel 왼쪽의 coral ring node 중앙이다.
- path는 제목 아래로 급격히 떨어지지 않고 완만한 S-curve를 만든다.
- path가 description이나 CTA를 통과하면 실패다.

## 14. Bottom Featured Index

```css
.featuredIndex {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 29px;
  height: 76px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-top: 34px;
  border-top: 1px solid var(--c-rule);
}

.featuredMeta {
  display: flex;
  align-items: center;
  gap: 28px;
  color: var(--c-navy);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.055em;
}

.projectArrows {
  display: flex;
  align-items: center;
  gap: 28px;
}
```

- Rule 전체 좌표: `x 60~1426px / y 953px`
- `FEATURED`: `x 59px / y 991px`
- `01 / 04`: `x 159px / y 991px`
- Arrow group: `x 1313~1435px / y 988px`
- 가운데 짧은 rule 길이: 약 `42px`

## 15. Layer와 Z-index

```css
:root {
  --z-decor: 0;
  --z-panel: 20;
  --z-connector: 25;
  --z-copy: 30;
  --z-controls: 40;
}
```

Layer 순서:

1. Page background
2. Decorative circles/lines
3. Featured panel
4. Connector SVG
5. Hero copy
6. Search, CTA, links, buttons

Connector가 panel body 위로 길게 지나가면 안 되며 panel border node에서 끝난다.

## 16. Default Visual State

Reference와 비교할 기본 상태는 다음과 같다.

- 검색 input은 비어 있다.
- placeholder와 text caret이 보인다.
- 검색 결과 dropdown은 닫혀 있다.
- 추천 검색어 3개가 보인다.
- Featured project는 AI Agent다.
- `FEATURED 01 / 04`다.
- Panel은 floating animation의 기준 위치에 있다.
- Hover, focus ring, pressed, loading 상태는 캡처하지 않는다.

## 17. Responsive 규칙

### 1200~1486px

- container 좌우 padding: `clamp(40px, 4vw, 60px)`
- headline: `clamp(92px, 8.6vw, 128px)`
- panel width: `clamp(610px, 47.75vw, 710px)`
- panel의 오른쪽 edge는 container 오른쪽 edge와 맞춘다.
- Hero copy와 panel의 겹침 폭을 `24~40px`로 유지한다.
- CTA와 하단 index의 세로 위치는 viewport 높이가 900px 이상일 때 reference 비율을 유지한다.

### 768~1199px

- Header nav gap: `24~30px`
- headline: `72~96px`
- Hero copy width: `52%`
- panel width: `54~58%`
- panel rotation: `1deg`
- connector가 description과 겹치면 숨긴다.
- panel card 내부 typography를 Desktop의 `82~90%`까지 축소할 수 있다.
- Bottom index는 유지한다.

### 0~767px

- Header는 logo와 menu trigger 구조로 바꿀 수 있다.
- Main은 `Hero copy → CTA → Featured panel → Featured index` 순서의 단일 열이다.
- absolute positioning, panel rotation, overlap, connector, decorative vertical line을 제거한다.
- page padding: `20px`
- eyebrow: `14px`
- headline: `clamp(48px, 15vw, 68px)`, line-height `0.98`
- description: `18~20px`, 여러 줄 허용
- CTA: width `100%`, max-width `320px`, height `58px`
- panel: width `100%`, height `auto`, min-height `560px`, transform 없음
- panel 내부 padding: `18~20px`
- 검색 input: height `56px`, font-size `16px`
- `⌘ K` hint는 숨기고 명시적 검색 icon/button을 유지한다.
- Project card는 absolute를 해제하고 문서 흐름에 배치한다.
- 모든 interactive target은 최소 `44×44px`다.

## 18. 금지 사항

- Reference 이미지를 `<img>` 또는 CSS background로 통째로 삽입
- Generic centered Hero로 변경
- Panel을 화면 아래의 일반 카드로 이동
- 제목을 1줄 또는 3줄로 변경
- `Developer.`의 온점 옆에 별도 시작 dot 추가
- Panel과 connector를 서로 다른 animation 값으로 이동
- 큰 border radius, glassmorphism blur, neon glow 추가
- Hero 안에 새로운 소개 문구, 통계, badge, 스크롤 안내 추가
- 검색창 자동 타이핑 또는 반복 pulse
- Featured project 자동 carousel
- Desktop에서 panel rotation 제거

## 19. Visual QA Checklist

1487×1058 screenshot을 촬영하고 reference와 overlay 비교한다.

- [ ] 좌우 content margin이 각각 약 60px이다.
- [ ] Logo와 nav baseline이 일치한다.
- [ ] Eyebrow가 y 267px 부근에서 시작한다.
- [ ] Headline이 정확히 2줄이고 전체 폭·높이가 reference와 유사하다.
- [ ] `Developer.`가 coral gradient이며 마지막 온점이 실제 anchor다.
- [ ] Description과 CTA의 간격이 reference와 일치한다.
- [ ] CTA가 307×77px, radius 14px에 가깝다.
- [ ] Panel이 약 710×600px이며 우측에 2.1deg 회전되어 있다.
- [ ] Panel top bar, 40px grid, Search, Suggestions, Project card의 세로 순서가 맞다.
- [ ] Search input과 Project card가 panel 너비를 충분히 사용한다.
- [ ] Connector가 온점에서 시작해 panel node에서 끝난다.
- [ ] Connector가 floating 중에도 node에서 떨어지지 않는다.
- [ ] Decorative circle과 line이 panel 뒤에만 있다.
- [ ] Bottom rule, FEATURED index, arrows가 viewport 하단에 있다.
- [ ] 의도하지 않은 vertical scroll이 없다.
- [ ] Reference overlay에서 주요 edge가 ±8px 이내다.

## 20. Codex 구현 지시문

이 파일을 전달할 때 아래 지시를 함께 사용한다.

```text
HOME_STYLE_SPEC.md를 시각 구현의 최우선 기준으로 사용해.
먼저 1487×1058 viewport에서 reference image와 동일한 desktop layout을 완성한 뒤 반응형을 구현해.
임의로 더 예쁘게 재해석하지 말고, 표에 지정된 좌표·크기·font-size·spacing·색상·rotation을 그대로 적용해.
구현 후 1487×1058 screenshot을 생성해 reference image와 overlay 비교하고, 주요 edge 오차가 ±8px가 될 때까지 수정해.
기능 요구사항은 기존 HOME_IMPLEMENTATION_GUIDE.md를 따르되 시각 값이 충돌하면 HOME_STYLE_SPEC.md를 우선해.
```
