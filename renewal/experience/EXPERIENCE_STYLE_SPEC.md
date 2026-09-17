# Experience Visual Style Specification

이 문서는 `experience-default.png`와 `experience-detail-expanded.png`를 React/CSS로 최대한 동일하게 재현하기 위한 **시각 전용 스펙**이다. 콘텐츠와 동작은 `EXPERIENCE_IMPLEMENTATION_GUIDE.md`를 따르고, 시각 충돌 시 이 문서를 우선한다.

## 1. Reference

| 상태 | Reference | 기준 viewport |
| --- | --- | ---: |
| 기본 | `experience-default.png` | `1536 × 1024px` |
| 오큐브 상세 | `experience-detail-expanded.png` | `1536 × 1024px` |

두 이미지는 같은 viewport지만 서로 다른 scroll 위치를 보여준다. 상세 reference는 Hero가 제거된 별도 화면이 아니라 **상세가 열린 뒤 해당 row로 스크롤된 상태**다.

## 2. 우선순위와 금지 사항

1. 기본 Hero와 Career Preview의 위치·크기
2. `Experience.` 온점 → 선택 career node connector
3. 경력 목록의 선택/접힘 상태
4. 행 바로 아래에 펼쳐지는 상세 document flow
5. Resume CTA

금지:

- Preview를 정적 이미지로 만들지 않는다.
- 회사 행 선택과 상세 accordion open을 같은 동작으로 합치지 않는다.
- 상세를 modal, drawer, 별도 route로 열지 않는다.
- 회사별 내용을 작은 카드 여러 개로 쪼개지 않는다.
- 겹치는 2020 경력의 날짜를 수정하지 않는다.
- 관련 프로젝트가 없는 회사에 가짜 링크를 만들지 않는다.

## 3. Token

```css
:root {
  --c-bg: #fbfaf8;
  --c-surface: #fff;
  --c-navy: #081b3b;
  --c-copy: #315d96;
  --c-muted: #73829a;
  --c-coral: #f04432;
  --c-coral-deep: #c75a48;
  --c-coral-soft: #fff0ed;
  --c-border: #ced7df;
  --c-chip: #fde9e6;
  --c-shadow: 0 18px 46px rgb(16 38 64 / 12%);
}
```

Font stack은 다른 페이지와 동일한 Pretendard/Inter sans다.

## 4. 기본 Artboard 좌표

| 영역 | Left | Top | Width | Height |
| --- | ---: | ---: | ---: | ---: |
| page content | `70px` | `0` | `1397px` | `1024px` |
| Header | `78px` | `30px` | `1330px` | `42px` |
| Hero copy | `79px` | `160px` | `630px` | `300px` |
| Career Preview | `799px` | `78px` | `648px` | `524px` |
| Connector | `592px` | `184px` | `222px` | `105px` |
| Career rows | `70px` | `609px` | `1397px` | `220px` |
| Resume CTA | `70px` | `829px` | `1397px` | `113px` |
| Footer | `70px` | `942px` | `1397px` | `82px` |

허용 오차는 box `±8px`, font `±2px`, connector `±4px`다.

## 5. Header

```css
.pageContainer { width: min(calc(100% - 140px), 1397px); margin-inline: auto; }
.siteHeader { height: 77px; padding: 30px 8px 0; display: flex; justify-content: space-between; }
.logo { font-size: 22px; line-height: 1; font-weight: 700; letter-spacing: -.02em; }
.nav { display: flex; gap: 44px; }
.nav a { position: relative; font-size: 14px; line-height: 1; font-weight: 500; }
.nav a[aria-current="page"]::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -14px;
  height: 2px; background: var(--c-coral);
}
```

## 6. 기본 Hero

```css
.experienceHero { position: relative; height: 532px; }
.heroCopy { position: absolute; left: 9px; top: 79px; width: 650px; z-index: 30; }
.eyebrow { margin: 0 0 26px; color: var(--c-coral); font-size: 16px; line-height: 1; }
.title { margin: 0; font-size: 102px; line-height: .91; font-weight: 800; letter-spacing: -.065em; }
.periodRange {
  margin-top: 16px; color: transparent;
  background: linear-gradient(105deg, #be5844, #da8c7c); background-clip: text;
  font-size: 67px; line-height: 1; font-weight: 800; letter-spacing: -.05em;
}
.description { margin: 25px 0 0; color: var(--c-copy); font-size: 23px; line-height: 1.5; letter-spacing: -.025em; }
```

- `Experience.`는 한 줄.
- 제목 실제 온점은 coral circle처럼 보이지만 문자 자체다.
- `2018 — NOW`는 제목보다 작고 별도 coral gradient line이다.

## 7. Career Preview Window

```css
.careerPreview {
  position: absolute; left: 729px; top: 1px;
  width: 648px; height: 524px; z-index: 20;
  overflow: hidden; border: 1px solid #cfd8df; border-radius: 11px;
  background: rgb(255 255 255 / 94%); box-shadow: var(--c-shadow);
}
.previewChrome {
  height: 46px; display: grid; grid-template-columns: 86px 1fr auto;
  align-items: center; border-bottom: 1px solid var(--c-border);
}
.previewHelper { height: 39px; padding: 9px 18px; color: var(--c-copy); font-size: 15px; }
```

- chrome dots `12px`, gap `8px`.
- title `CAREER PREVIEW` `15px`, 600.
- INTERACTIVE badge `122×30px`, pale coral.
- three-dot menu는 우측 `24px` inset.

### 선택 회사 Block

```css
.previewCareer.isSelected {
  min-height: 217px;
  border: 1px solid #efc9c2;
  background: linear-gradient(180deg, #fff3f0 0 65px, #fff 65px);
  border-radius: 7px;
}
.previewCareerHeader {
  height: 65px; display: grid;
  grid-template-columns: 32px 132px 1fr 64px; align-items: center;
}
```

- selected dot outer `20px`, inner coral `12px`.
- period `18px`, coral.
- company `18px`, 700; role `15px`, copy blue.
- responsibilities `15px/1.65`, 최대 3개 bullet.
- Related Projects는 top border 후 label `11px`, link coral `14px`.

### 접힌 회사 Rows

```css
.previewCareer.isCollapsed {
  height: 51px; display: grid;
  grid-template-columns: 38px 130px 1fr 75px;
  align-items: center; border-top: 1px solid var(--c-border);
}
```

- unselected circle `19px`, navy 1.5px outline, fill transparent.
- `보기 →`는 right aligned, copy blue.
- row hover는 pale blue/coral wash 중 하나만 아주 약하게 사용한다.

### Preview CTA

```css
.previewCta {
  height: 44px; margin: 7px 16px 15px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid var(--c-coral); border-radius: 6px;
  color: var(--c-coral); background: #fff; font-size: 15px;
}
```

## 8. Connector와 장식

- 시작: `Experience.` 실제 온점 오른쪽 중앙, 약 `(606, 274)`.
- 종료: Preview 선택 node 왼쪽 중앙, 약 `(805, 185)`.
- stroke `#ef4939`, width `1.6px`.
- endpoint ring `15px`, panel 바깥에 절반 겹침.
- curve는 제목에서 수평으로 나와 우상향한다.
- panel 뒤 circles는 coral opacity `7~10%`, blur 없음.
- connector와 circles는 `aria-hidden`, pointer-events none.

## 9. 경력 목록 Rows

```css
.careerRow {
  min-height: 55px;
  display: grid;
  grid-template-columns: 100px 274px 315px minmax(300px, 1fr) 130px;
  align-items: center;
  border-bottom: 1px solid var(--c-border);
}
.careerRow.isSelected {
  background: linear-gradient(90deg, #fff1ee, #fff8f6);
  border-left: 3px solid var(--c-coral);
}
.careerIndex { padding-left: 29px; color: #97999a; font-size: 29px; line-height: 1; }
.isSelected .careerIndex { color: var(--c-coral); }
.careerPeriod { color: var(--c-navy); font-size: 18px; }
.careerCompany { font-size: 20px; font-weight: 700; }
.careerRole { color: var(--c-copy); font-size: 15px; }
.careerAction { justify-self: end; padding-right: 29px; color: var(--c-copy); font-size: 15px; }
.isSelected .careerAction { color: var(--c-coral); }
```

행을 rounded card로 만들거나 hover elevation을 주지 않는다.

## 10. Resume CTA와 Footer

```css
.resumeCta {
  min-height: 113px; display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--c-border); padding: 13px 7px 17px 9px;
}
.resumeCta .label { font-size: 12px; }
.resumeCta h2 { margin: 13px 0 0; font-size: 35px; line-height: 1; letter-spacing: -.045em; }
.resumeCta a {
  width: 240px; height: 52px; display: inline-flex; align-items: center; justify-content: center;
  border-radius: 7px; color: #fff;
  background: linear-gradient(105deg, #be5844, #da8c7c); font-size: 16px;
}
.siteFooter { height: 82px; display: flex; align-items: center; justify-content: space-between; font-size: 12px; }
```

## 11. 상세 펼침 상태의 의미

`experience-detail-expanded.png`는 `ocube` 상세가 열린 상태에서 `career-row-ocube`로 스크롤된 화면이다.

| 영역 | Left | Top | Width | Height |
| --- | ---: | ---: | ---: | ---: |
| Header | `0` | `0` | `1536px` | `76px` |
| opened row | `70px` | `106px` | `1396px` | `59px` |
| detail body | `70px` | `165px` | `1396px` | `625px` |
| remaining rows | `70px` | `810px` | `1396px` | `174px` |

Hero와 Preview는 DOM에서 삭제된 것이 아니라 scroll 위로 벗어나 있다. 닫을 때 페이지 구조가 자연스럽게 복원되어야 한다.

## 12. 열린 Row와 Detail Shell

```css
.careerRow.isExpanded { min-height: 59px; }
.careerDetail {
  border-left: 1px solid var(--c-coral);
  border-right: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding: 32px 30px 26px;
  background: rgb(255 255 255 / 38%);
}
.careerDetailHeader { padding-bottom: 32px; border-bottom: 1px solid var(--c-border); }
.careerDetailLabel { color: var(--c-copy); font-size: 16px; }
.careerDetail h2 { margin: 13px 0 12px; font-size: 40px; line-height: 1.16; letter-spacing: -.045em; }
.careerDetailLead { margin: 0; color: var(--c-copy); font-size: 20px; line-height: 1.55; }
```

## 13. 상세 Section Grid

```css
.careerDetailSection {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  column-gap: 15px;
  padding: 23px 0;
  border-bottom: 1px solid var(--c-border);
}
.careerDetailSection > h3 { margin: 0; font-size: 21px; line-height: 1.4; }
.responsibilities { margin: 0; padding-left: 24px; color: var(--c-copy); font-size: 17px; line-height: 1.75; }
```

### 주요 프로젝트 Rows

```css
.careerProjectRow {
  min-height: 55px;
  display: grid;
  grid-template-columns: 335px 208px minmax(300px, 1fr) 125px;
  align-items: center;
  border-bottom: 1px solid var(--c-border-soft);
}
.careerProjectRow strong { font-size: 17px; }
.careerProjectRow span { color: var(--c-copy); font-size: 15px; }
.careerProjectRow a { justify-self: end; color: var(--c-coral); font-size: 15px; }
```

실제 연결 가능한 Project가 없으면 우측 링크를 렌더링하지 않는다.

### 기술 Chips

```css
.technologyList { display: flex; flex-wrap: wrap; gap: 10px; }
.technologyChip {
  min-width: 94px; height: 42px; padding: 0 22px;
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 999px; background: var(--c-chip); color: var(--c-navy); font-size: 15px;
}
```

## 14. 상태와 Motion

- Preview hover/focus 전환 `180~240ms` opacity.
- 자동 순환 금지.
- 상세 open/close `280~420ms`; height auto animation은 측정 후 수행하거나 CSS grid row transition 사용.
- 새로운 상세를 열면 기존 상세는 닫힌다.
- `scroll-margin-top: 96px`.
- reduced motion에서 즉시 open/close, scroll behavior auto.

## 15. 반응형

### 1024~1199px

- page inset `40px`.
- Hero title `clamp(76px, 9vw, 94px)`; Preview width 약 `52%`.
- career row grid 열 간격 축소.

### 768~1023px

- Hero copy → Career Preview 순서 stack.
- connector 숨김; Preview width `100%`, max `720px`.
- career row는 번호+기간 / 회사+role / action의 2~3행.
- detail section label column `160px`.

### 0~767px

- page inset `20px`; title `56~66px`, range `42~48px`.
- Preview rotation/floating/connector 제거.
- Preview row는 period 위, company/role 아래로 wrap.
- career list row는 단일 열이지만 번호와 action은 같은 첫 행에 둔다.
- detail section과 project rows는 1열.
- chips는 content 폭에 맞춰 wrap.
- 모든 조작 control 최소 `44×44px`; 가로 scroll 금지.

## 16. Visual QA

- [ ] 기본 1536×1024에서 Hero, Preview, 4개 rows, Resume CTA, Footer가 같은 화면에 보인다.
- [ ] `Experience.` 실제 온점에서 selected node로 연결된다.
- [ ] Preview 선택과 상세 open이 별도 동작이다.
- [ ] 상세가 행 바로 아래에서 다른 행을 아래로 밀어낸다.
- [ ] 상세 reference가 Hero 제거 상태가 아니라 scroll 상태로 구현된다.
- [ ] 가짜 Project link나 임의 경력 데이터를 추가하지 않았다.
- [ ] desktop 주요 box 오차가 ±8px 이내다.

