# Projects Visual Style Specification

이 문서는 `projects-list-final.png`와 `projects-expanded-final.png`를 React/CSS로 최대한 동일하게 재현하기 위한 **시각 전용 스펙**이다. 동작과 콘텐츠는 `PROJECTS_IMPLEMENTATION_GUIDE.md`를 따르며, 시각 충돌 시 이 문서를 우선한다.

## 1. Reference와 구현 우선순위

| 상태 | Reference | 기준 viewport |
| --- | --- | ---: |
| 기본 목록 | `projects-list-final.png` | `1586 × 992px` |
| AI Agent 상세 펼침 | `projects-expanded-final.png` | `1024 × 1536px` |

우선순위:

1. 기본 Hero와 Preview의 비대칭 배치
2. flat project rows의 높이·열 정렬·선택 상태
3. 작은 Preview가 상세 visual로 이동하는 상태 차이
4. 상세의 `문제 → 구현 → 결과` 세로 리듬
5. Frontend Decisions 표와 나머지 목록

금지 사항:

- 프로젝트 행을 개별 rounded card로 만들지 않는다.
- Hero Preview와 상세 visual을 동시에 중복 표시하지 않는다.
- 상세 설명을 3열 카드로 압축하지 않는다.
- `Selected Projects.` 줄바꿈을 바꾸지 않는다.
- Project Archive를 기본 상태에서 펼쳐놓지 않는다.
- 임의 성과 수치, 날짜, 로고를 넣지 않는다.

## 2. 공통 Token

```css
:root {
  --c-bg: #fbfaf8;
  --c-surface: #fff;
  --c-navy: #101f2f;
  --c-copy: #4c6480;
  --c-muted: #758497;
  --c-coral: #ef4939;
  --c-coral-deep: #c45946;
  --c-coral-light: #dc8a79;
  --c-coral-wash: #fff3f0;
  --c-border: #ced6dc;
  --c-border-soft: #e4e7e9;
  --c-chip: #f1efed;
  --c-shadow: 0 18px 42px rgb(21 40 59 / 12%);
}
```

Font stack: `"Pretendard Variable", Pretendard, Inter, system-ui, sans-serif`.

## 3. 기본 목록 Artboard

| 영역 | Left | Top | Width | Height |
| --- | ---: | ---: | ---: | ---: |
| page content | `67px` | `0` | `1452px` | `992px` |
| Header | `67px` | `28px` | `1452px` | `43px` |
| Hero copy | `68px` | `152px` | `600px` | `310px` |
| Preview | `742px` | `97px` | `778px` | `455px` |
| Connector | `480px` | `239px` | `285px` | `151px` |
| selected row | `67px` | `568px` | `1453px` | `69px` |
| project rows | `67px` | `637px` | `1453px` | `210px` |
| Other Projects | `67px` | `847px` | `1453px` | `64px` |
| Footer | `67px` | `911px` | `1453px` | `81px` |

주요 오차 허용값은 위치·크기 `±8px`, font `±2px`, connector `±4px`다.

## 4. Header

```css
.pageContainer { width: min(calc(100% - 134px), 1452px); margin-inline: auto; }
.siteHeader {
  height: 71px; padding-top: 28px; display: flex; justify-content: space-between;
  border-bottom: 1px solid #cfd6dc;
}
.logo { font-size: 22px; line-height: 1; font-weight: 700; letter-spacing: -.02em; }
.nav { display: flex; gap: 45px; }
.nav a { font-size: 14px; line-height: 1; font-weight: 500; position: relative; }
.nav a[aria-current="page"]::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -16px;
  height: 2px; background: var(--c-coral);
}
```

## 5. 기본 Hero

```css
.projectsHero { position: relative; height: 497px; }
.heroCopy { position: absolute; left: 0; top: 79px; width: 615px; z-index: 30; }
.previewWrap { position: absolute; right: 0; top: 26px; width: 778px; height: 455px; z-index: 20; }
.eyebrow { margin: 0 0 23px; color: var(--c-coral); font-size: 16px; line-height: 1; }
.title { margin: 0; font-size: 88px; line-height: .94; font-weight: 800; letter-spacing: -.06em; }
.title > span { display: block; }
.title .accent {
  margin-top: 11px; color: transparent;
  background: linear-gradient(100deg, #bd5742, #d98c7b); background-clip: text;
}
.description { margin: 30px 0 0; color: var(--c-copy); font-size: 22px; line-height: 1.55; }
```

- 1행 `Selected`, 2행 `Projects.` 고정.
- 온점은 제목 text node의 일부다.
- Hero description은 desktop에서 한 줄이다.

## 6. 기본 Preview

```css
.previewWindow {
  width: 100%; height: 100%; overflow: hidden;
  border: 1px solid #cfd6dc; border-radius: 11px;
  background: #fff; box-shadow: var(--c-shadow);
}
.previewChrome { height: 47px; border-bottom: 1px solid var(--c-border); }
.liveBadge {
  position: absolute; right: 61px; top: 10px; height: 31px;
  padding: 0 14px; border-radius: 9px;
  display: inline-flex; align-items: center; color: var(--c-coral);
  background: var(--c-coral-wash); font-size: 12px;
}
```

- window body는 좌측 navigation `166px`, 중앙 content `410px`, 우측 canvas `170px` 비율.
- chrome dots `12px`, gap `8px`.
- window 내부 text는 `11~15px`; 외부 UI보다 작아야 한다.
- 내부 border `#dde2e6 1px`, card radius `5~7px`.
- Preview는 약간의 회전 없이 수평을 유지한다.

## 7. 기본 Connector

- 시작: `Projects.` 실제 온점 오른쪽 중앙, 약 `(492, 379)`.
- 종료: Preview 좌측 edge node, 약 `(749, 252)`.
- stroke `#ef4939`, `1.6px`, fill none.
- 종료 node outer ring 약 `14px`, inner fill coral.
- 온점과 선 사이 gap은 `0~2px`.
- description과 selected row를 가로지르지 않는다.

## 8. Project Row Grid

```css
.projectRow {
  min-height: 70px;
  display: grid;
  grid-template-columns: 94px 294px minmax(340px, 1fr) 440px 120px;
  align-items: center;
  border-bottom: 1px solid var(--c-border);
}
.projectRow.isPreviewed {
  background: linear-gradient(90deg, #fff2ef 0%, #fff8f6 100%);
  border-left: 3px solid var(--c-coral);
}
.projectIndex { padding-left: 30px; font-size: 36px; line-height: 1; color: #8f9396; }
.isPreviewed .projectIndex { color: var(--c-coral); }
.projectTitle { font-size: 21px; font-weight: 700; letter-spacing: -.035em; }
.projectSummary { color: var(--c-copy); font-size: 14px; line-height: 1.5; }
.tags { display: flex; gap: 10px; }
.tag { padding: 7px 14px; border-radius: 999px; background: var(--c-chip); font-size: 12px; color: #46566a; }
.projectAction { justify-self: end; padding-right: 28px; color: var(--c-copy); font-size: 15px; }
.isPreviewed .projectAction { color: var(--c-coral); }
```

- hover에서 row를 띄우거나 shadow를 만들지 않는다.
- selected background만 유지하고 scale 변화는 금지한다.
- 전체 행이 클릭 가능하더라도 action text는 우측에 같은 위치로 정렬한다.

## 9. Other Projects와 Footer

```css
.otherProjects {
  height: 64px; display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid var(--c-border); font-size: 15px;
}
.siteFooter {
  height: 81px; display: flex; align-items: center; justify-content: space-between;
  color: var(--c-copy); font-size: 12px;
}
```

- Other Projects 좌측 chevron과 label 사이 `20px`.
- 우측 `다른 프로젝트 보기 +`는 text button이며 큰 filled button으로 바꾸지 않는다.
- footer contact는 이 Projects reference의 일부다. Contact 전용 페이지의 중복 제거 규칙과 혼동하지 않는다.

## 10. 상세 펼침 Artboard

상세 reference는 폭 1024px, 전체 높이 1536px인 긴 문서다.

| 영역 | Left | Top | Width | Height |
| --- | ---: | ---: | ---: | ---: |
| Header | `49px` | `18px` | `927px` | `27px` |
| Hero copy | `49px` | `88px` | `460px` | `190px` |
| opened row | `49px` | `303px` | `927px` | `47px` |
| large visual | `49px` | `365px` | `927px` | `409px` |
| caption | `405px` | `785px` | `260px` | `16px` |
| Problem | `49px` | `825px` | `927px` | `99px` |
| Implementation | `49px` | `924px` | `927px` | `116px` |
| Result | `49px` | `1040px` | `927px` | `96px` |
| Decisions | `49px` | `1136px` | `927px` | `163px` |
| remaining rows | `49px` | `1318px` | `927px` | `123px` |
| Other Projects | `49px` | `1441px` | `927px` | `41px` |
| Footer | `49px` | `1482px` | `927px` | `54px` |

상세 reference에서는 Hero Preview가 없어지고 제목 connector가 열린 row/large visual 방향으로 내려온다. 동일 제품 화면을 Hero 위치에 남겨두지 않는다.

## 11. 상세 Hero와 열린 Row

```css
.expandedPage { --expanded-inline: 49px; }
.expandedHero { min-height: 258px; padding-top: 42px; }
.expandedHero .title { font-size: 70px; line-height: .95; }
.openedProjectRow {
  height: 47px;
  display: grid;
  grid-template-columns: 63px 158px minmax(280px, 1fr) 344px 72px;
  align-items: center;
  background: var(--c-coral-wash);
  border-left: 2px solid var(--c-coral);
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
}
```

Expanded 1024px reference의 text는 기본 1586px reference보다 비례 축소하지 않는다. content 폭이 좁아진 만큼 열 폭만 줄인다.

## 12. Large Product Visual

```css
.expandedVisual {
  width: 100%; height: 409px; margin-top: 15px;
  border: 1px solid #cfd6dc; border-radius: 10px;
  overflow: hidden; background: #fff; box-shadow: 0 14px 34px rgb(21 40 59 / 10%);
}
.visualCaption { margin-top: 9px; text-align: center; color: var(--c-copy); font-size: 11px; }
```

- `LIVE PREVIEW` badge 유지.
- large visual 내부 UI는 비율을 유지해 확대하되 blur/low resolution이 없어야 한다.
- caption: `공개용 재구성 화면 · 실제 기능 흐름을 기준으로 제작`.

## 13. Problem / Implementation / Result

```css
.detailSection {
  display: grid;
  grid-template-columns: 172px minmax(0, 1fr);
  column-gap: 44px;
  padding: 25px 0 21px;
  border-bottom: 1px solid var(--c-border);
}
.detailNumber { color: var(--c-coral); font-size: 28px; line-height: 1; font-weight: 600; }
.detailLabel { margin-top: 5px; color: var(--c-copy); font-size: 12px; letter-spacing: .04em; }
.detailContent { border-left: 1px solid var(--c-border); padding-left: 45px; }
.detailContent h3 { margin: 0 0 8px; font-size: 24px; line-height: 1.25; letter-spacing: -.035em; }
.detailContent p { margin: 0; max-width: 690px; color: var(--c-copy); font-size: 15px; line-height: 1.6; }
```

세 section의 heading baseline과 본문 시작점을 동일하게 맞춘다.

## 14. Frontend Decisions

```css
.decisions { padding: 16px 0 21px; }
.decisions h3 { margin: 0 0 9px; font-size: 14px; }
.decisionRow {
  min-height: 31px; display: grid; grid-template-columns: 222px 1fr;
  align-items: center; border-top: 1px solid var(--c-border);
  font-size: 13px;
}
.decisionRow dt { font-weight: 600; padding-left: 14px; }
.decisionRow dd { margin: 0; color: var(--c-copy); }
```

rounded table card, alternate background, icon을 추가하지 않는다.

## 15. 전환 Motion

- Preview → detailed visual: `420~620ms`, opacity + scale `.985 → 1` 또는 shared layout.
- bounce, 3D flip, 큰 rotate 금지.
- connector endpoint가 visual transition과 같은 transform을 사용한다.
- reduced motion에서는 즉시 상태 변경.
- 상세 open 뒤 selected row는 `scroll-margin-top: 90px`.

## 16. 반응형

### 1024~1199px

- 기본 상태 preview 폭 `54%`, title `clamp(68px, 8vw, 82px)`.
- row grid를 `70px 230px 1fr 280px 100px` 수준으로 줄인다.

### 768~1023px

- Hero copy 위, Preview 아래 stack; connector 숨김.
- project row를 번호+제목 / 설명 / tags+action의 3행으로 재배치.
- 상세 section label column `140px`.

### 0~767px

- page inset `20px`, title `54~64px`.
- floating Preview 제거; project row 아래 small thumbnail 사용 가능.
- row는 단일 열이며 action 최소 높이 `44px`.
- 상세 section 1열; label 다음 heading/body.
- 제품 UI는 핵심 영역 crop 또는 2~3단계 이미지로 표시하고 가로 scroll 금지.
- Decisions는 `dt` 위, `dd` 아래의 1열.

## 17. Visual QA

- [ ] 기본 1586×992에서 Header부터 Footer까지 reference와 같은 밀도다.
- [ ] `Projects.` 실제 온점에서 Preview로 connector가 이어진다.
- [ ] 프로젝트 행은 flat rows이고 선택 행만 coral wash다.
- [ ] 상세 상태에 제품 visual이 한 번만 표시된다.
- [ ] 상세 정보가 3열 카드가 아니라 세로 section이다.
- [ ] 공개용 재구성 caption이 visual 바로 아래 있다.
- [ ] Other Projects는 기본적으로 닫혀 있다.
- [ ] desktop 오차가 ±8px 이내이며 mobile 가로 scroll이 없다.

