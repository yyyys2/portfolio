# About Visual Style Specification

이 문서는 `reference-images/about-final-approved.png`를 React/CSS로 최대한 동일하게 재현하기 위한 **시각 전용 스펙**이다. 기능과 데이터 동작은 `ABOUT_IMPLEMENTATION_GUIDE.md`를 따르고, 크기·색상·간격·배치가 충돌할 때는 이 문서를 우선한다.

## 1. 구현 우선순위와 금지 사항

1. 1586×992 기준 Hero copy와 Component Playground의 비대칭 위치
2. `방식.`의 실제 온점과 Playground 선택 node를 잇는 connector
3. Playground 내부 tree·tab·preview·code의 밀도
4. Core Strengths editorial band와 Experience CTA
5. 반응형에서 정보 순서를 유지하는 것

임의로 다음을 바꾸지 않는다.

- Hero를 정확한 50:50 column으로 만들지 않는다.
- Component Playground를 정적 이미지나 단순 카드로 대체하지 않는다.
- Core Strengths 세 항목을 개별 둥근 카드로 만들지 않는다.
- `방식.`의 줄바꿈을 없애거나 제목을 한 줄로 만들지 않는다.
- Experience CTA를 큰 배너나 추가 Contact 섹션으로 바꾸지 않는다.
- reference PNG를 페이지 전체 이미지로 삽입하지 않는다.

## 2. 기준 Artboard와 허용 오차

| 속성 | 값 |
| --- | ---: |
| Reference | `about-final-approved.png` |
| 기준 viewport | `1586 × 992px` |
| 좌우 page inset | `73px` |
| content width | `1440px` |
| Header visual height | `88px` |
| Hero 범위 | `y: 104px ~ 571px` |
| Strengths 범위 | `y: 589px ~ 848px` |
| Experience CTA | `y: 848px ~ 992px` |

Desktop QA 허용 오차:

- 주요 box 위치·크기 `±8px`
- font-size `±2px`, line-height `±3px`
- connector anchor `±4px`
- panel rotation `±0.2deg`
- 색상 RGB channel `±8`

## 3. 공통 시각 Token

```css
:root {
  --c-bg: #fbfaf8;
  --c-surface: rgb(255 255 255 / 90%);
  --c-surface-solid: #ffffff;
  --c-navy: #101f2f;
  --c-navy-soft: #203b5a;
  --c-copy: #506985;
  --c-muted: #738399;
  --c-coral: #c45e49;
  --c-coral-dark: #b9523e;
  --c-coral-light: #d68a7b;
  --c-coral-soft: #f6dfda;
  --c-border: #d6dde3;
  --c-border-soft: #e7eaed;
  --c-shadow: 0 20px 46px rgb(24 40 59 / 12%);
  --page-inline: 73px;
  --page-max: 1440px;
}
```

```css
* { box-sizing: border-box; }
body {
  margin: 0;
  color: var(--c-navy);
  background:
    radial-gradient(circle at 15% 17%, rgb(255 255 255 / 60%), transparent 34%),
    #fbfaf8;
  font-family: "Pretendard Variable", Pretendard, Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}
```

큰 coral text와 primary button에만 다음 gradient를 허용한다.

```css
background: linear-gradient(105deg, #bc5844 0%, #ce725f 55%, #d78e80 100%);
```

## 4. Header

| 요소 | x | y | 규격 |
| --- | ---: | ---: | --- |
| Logo | `84px` | `35px` | `22px`, 700 |
| Nav 시작 | `1064px` | `39px` | `14px`, 600 |
| Nav gap | — | — | `46px` |
| ABOUT underline | `1299px` | `58px` | 약 `49×2px` |

```css
.pageContainer { width: min(calc(100% - 146px), 1440px); margin-inline: auto; }
.siteHeader { height: 88px; display: flex; justify-content: space-between; padding-top: 34px; }
.logo { font-size: 22px; line-height: 1; font-weight: 700; letter-spacing: -.02em; }
.nav { display: flex; gap: 46px; align-items: flex-start; }
.nav a { position: relative; font-size: 14px; line-height: 1; font-weight: 600; }
.nav a[aria-current="page"]::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -14px;
  height: 2px; background: var(--c-coral);
}
```

Header에 배경, blur, shadow를 넣지 않는다.

## 5. Hero 좌표

```css
.aboutHero { position: relative; height: 501px; }
.heroCopy { position: absolute; left: 12px; top: 82px; width: 720px; z-index: 30; }
.playgroundWrap {
  position: absolute; left: 797px; top: 20px; width: 575px; height: 443px;
  z-index: 20; transform: rotate(.8deg); transform-origin: center;
}
```

전체 이미지 좌표:

| 영역 | Left | Top | Width | Height |
| --- | ---: | ---: | ---: | ---: |
| Hero copy | `85px` | `170px` | `720px` | `340px` |
| Playground | `870px` | `108px` | `575px` | `443px` |
| Connector SVG | `238px` | `291px` | `655px` | `106px` |
| Coral circle behind panel | `804px` | `302px` | `240px` | `265px` |
| Pale upper circle | `968px` | `73px` | `303px` | `238px` |
| Dashed idea circle | `1361px` | `111px` | `186px` | `214px` |

## 6. Hero Typography

### Eyebrow

```css
.eyebrow {
  margin: 0 0 28px;
  color: #ef4939;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -.015em;
}
```

### Headline

```css
.title {
  margin: 0;
  font-size: 82px;
  line-height: .99;
  font-weight: 800;
  letter-spacing: -.065em;
}
.title > span { display: block; }
.title .accent {
  margin-top: 17px;
  width: fit-content;
  color: transparent;
  background: linear-gradient(105deg, #bc5844, #d78e80);
  background-clip: text;
}
.title .period { display: inline; color: #c86350; }
```

- 1행 `화면을 만드는`, 2행 `방식.`을 고정한다.
- 1행 실제 폭은 약 `465px`, 2행 약 `178px`다.
- 온점은 텍스트의 일부이며 별도 decorative circle을 추가하지 않는다.

### Description

```css
.description {
  margin: 56px 0 0;
  width: 720px;
  color: var(--c-copy);
  font-size: 22px;
  line-height: 1.72;
  font-weight: 400;
  letter-spacing: -.025em;
}
```

정확히 2행을 유지한다.

## 7. Component Playground 외곽

```css
.playground {
  width: 100%; height: 100%; overflow: hidden;
  border: 1px solid #cfd6dc;
  border-radius: 12px;
  background: rgb(255 255 255 / 92%);
  box-shadow: var(--c-shadow);
  backdrop-filter: blur(6px);
}
.playgroundHeader {
  height: 49px; display: grid; grid-template-columns: 96px 1fr auto;
  align-items: center; border-bottom: 1px solid var(--c-border);
  background: rgb(250 251 252 / 92%);
}
```

- browser dots: `12px`, gap `8px`, red/yellow/green.
- top tabs `Elements / Console / Sources`: `13px`; Elements만 navy underline.
- INTERACTIVE badge: 높이 `30px`, padding-inline `14px`, pale coral background.
- panel 내부를 과하게 round 처리하지 않는다.

### 내부 Grid

```css
.playgroundBody {
  display: grid;
  grid-template-columns: 220px 1fr;
  height: 394px;
}
.componentTree { border-right: 1px solid var(--c-border); padding: 17px 14px; }
.demoArea { display: grid; grid-template-rows: auto auto 1fr 126px; }
```

### Tree

- tree text `16px/1.85`, monospace가 아닌 UI sans 사용.
- indent 단계 `17px`.
- 선택 `<Button />` 행: 높이 `35px`, coral wash, coral text, radius `5px`.
- 선택 행 우측 chevron을 유지한다.

### 안내와 상태 Tab

```css
.demoHelper { margin: 24px 25px 13px; color: var(--c-copy); font-size: 14px; font-weight: 600; }
.stateTabs { display: grid; grid-template-columns: repeat(3, 1fr); gap: 7px; margin: 0 25px; }
.stateTab { height: 42px; border: 1px solid #bfcde0; border-radius: 6px; background: #fff; }
.stateTab[aria-selected="true"] { color: #ef4939; border-color: #ef4939; background: #fff7f5; }
```

### Preview와 Code

- 상태 preview 버튼 폭은 content 영역 전체에서 좌우 `25px` inset.
- Primary button 높이 `45px`, coral gradient, white text.
- Outline button 높이 `45px`, coral 1px border.
- Done message 높이 `45px`, pale coral fill.
- code area는 body 하단 `126px`, 상단 border, gutter 폭 `44px`.
- code `13px/1.35`, blue/coral syntax accent만 사용한다.

## 8. Connector

```css
.heroConnector {
  position: absolute; inset: 0; z-index: 25;
  width: 100%; height: 100%; pointer-events: none; overflow: visible;
}
.heroConnector path { fill: none; stroke: #ef4939; stroke-width: 1.6; }
.heroConnector .endRing { fill: #fbfaf8; stroke: #d76b58; stroke-width: 4px; }
```

- 시작: `방식.` 실제 온점 오른쪽 중앙, 전체 좌표 약 `(254, 381)`.
- 종료: Playground 좌측 선택 `<Button />` 행 중앙, 약 `(883, 299)`.
- 시작점에 추가 원을 만들지 않는다.
- 종료 ring 외경 약 `18px`, 내부 점 약 `5px`.
- curve는 처음 수평에 가깝게 진행한 뒤 panel 근처에서 위로 올라간다.
- path가 설명문이나 Strengths 영역을 통과하지 않는다.

## 9. 배경 장식

- panel 뒤 coral circles opacity `8~11%`.
- 우측 dashed circle: `1px dashed #b8ccdc`, 내부 영문 `12px`, letter-spacing `.18em`.
- 장식은 모두 `aria-hidden="true"`, `pointer-events:none`.
- 작은 dot, star, grain을 추가하지 않는다.

## 10. Core Strengths

전체 좌표 `x:73~1513`, `y:589~848`.

```css
.strengths {
  border-top: 1px solid #cfd7de;
  border-bottom: 1px solid #cfd7de;
  padding: 24px 12px 36px;
}
.strengthsLabel { font-size: 15px; line-height: 1; font-weight: 600; letter-spacing: .01em; }
.strengthGrid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 23px; }
.strengthItem { min-height: 160px; padding: 0 80px 0 80px; position: relative; }
.strengthItem + .strengthItem { border-left: 1px solid #cfd7de; }
```

- item 1은 `x:164`, item 2 `x:622`, item 3 `x:1126` 부근에서 시작.
- 번호 `16px`, coral, 600.
- 원형 icon background `46×46px`, coral opacity 10%.
- 제목 `22px/1.25`, 700, navy.
- 본문 `17px/1.65`, copy color, 최대 폭 `285px`.
- hover에서 box 이동·shadow를 만들지 않는다.

## 11. Experience CTA

```css
.experienceCta {
  min-height: 144px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 25px 0 35px 12px;
}
.experienceCta .label { font-size: 14px; font-weight: 600; }
.experienceCta h2 { margin: 16px 0 0; font-size: 38px; line-height: 1.1; letter-spacing: -.045em; }
.experienceCta a {
  width: 210px; height: 57px; display: inline-flex; align-items: center; justify-content: center;
  color: #fff; background: linear-gradient(105deg, #bc5844, #d78e80); border-radius: 8px;
  font-size: 17px; text-decoration: none;
}
```

CTA button 전체 좌표 약 `x:1303, y:887, w:210, h:57`.

## 12. Z-index와 Motion

| Layer | z-index |
| --- | ---: |
| background ornaments | `0` |
| Playground | `20` |
| connector | `25` |
| Hero copy | `30` |
| interactive controls | `40` |

- panel float: `translate3d(0, -5px, 0)`까지, `5.8~6.2s`, ease-in-out.
- panel hover/focus-within 시 animation pause.
- tab transition `180ms`; 큰 spring/bounce 금지.
- `prefers-reduced-motion`에서는 float와 최초 상태 데모를 제거한다.

## 13. 반응형

### 1024~1199px

- page inset `40px`.
- Hero copy 폭 `52%`, Playground 폭 `52%`, 제목 `clamp(62px, 7vw, 76px)`.
- panel이 제목을 가리면 overlap을 줄이고 connector curve를 재계산한다.

### 768~1023px

- Hero 높이 auto, copy 다음 panel 순서로 stack.
- Playground `width:100%; max-width:720px; margin-top:56px`.
- connector 숨김.
- Strengths는 1열 또는 2+1 grid, 세로 divider 대신 가로 divider.

### 0~767px

- page inset `20px`, header 높이 `72px`.
- title `clamp(50px, 15vw, 64px)`.
- description `18px/1.65`, 임의 강제 줄바꿈 제거.
- Playground rotation과 floating 제거; 내부는 tree를 위, demo를 아래로 stack.
- state tab 최소 높이 `44px`.
- Strengths 1열, item padding `28px 0`.
- Experience CTA 세로 배치, button width `100%`.

## 14. Visual QA

- [ ] 1586×992에서 Hero, Playground, Strengths, CTA가 한 화면에 같은 밀도로 보인다.
- [ ] `방식.`은 2행이며 실제 온점에서 선이 시작한다.
- [ ] connector가 선택 `<Button />` 행에 정확히 닿는다.
- [ ] Playground가 이미지가 아니라 탭 조작 가능한 UI다.
- [ ] Core Strengths가 세 개의 둥근 카드로 변형되지 않았다.
- [ ] Experience CTA 외 Contact/추가 소개 섹션이 없다.
- [ ] Desktop 주요 box 오차가 ±8px 이내다.
- [ ] mobile에서 가로 scroll이 없다.

