# 컬러 토큰

색상 원본은 `src/styles/tokens.css`의 `:root`에서 관리한다. 페이지 CSS와
`tailwind.config.js`에서는 색상 리터럴 대신 이 토큰을 참조한다.

## 자주 변경하는 색상

| 토큰 | 용도 |
| --- | --- |
| `--color-accent` | 강조 라벨, 온점, 연결선, 선택 상태, 포커스 효과의 코랄 색상 |
| `--color-accent-gradient-start`, `--color-accent-gradient-end` | About·Projects·Experience hero 제목 그라데이션 |
| `--color-accent-home-gradient-*` | Home 제목과 기본 버튼 그라데이션 |
| `--color-accent-button-*` | About 데모와 경력 보기 버튼 그라데이션 |
| `--color-accent-contact-button-*` | Contact 버튼 그라데이션 |
| `--color-accent-resume-*` | Experience 이력서 버튼 그라데이션 |
| `--color-accent-text` | About 본문 링크와 섹션 라벨 |
| `--color-page` | 공통 페이지 배경 |
| `--color-text` | 공통 주요 텍스트 |
| `--color-text-copy`, `--color-text-copy-alt` | 본문 텍스트 |
| `--color-border`, `--color-border-panel` | 구분선과 패널 테두리 |

현재 디자인의 페이지별 색상 차이를 보존했다. 선명한 강조색, 차분한
그라데이션, 옅은 배경색은 서로 다른 역할이므로 별도 토큰이다. 브랜드 전체를
변경할 때는 `Brand accents and gradients`와 `Accent surfaces and borders`
그룹을 함께 조정한다. `--color-accent`만 바꾸면 그 색상을 사용하는 강조 요소와
해당 색상의 반투명 효과가 모든 페이지에서 함께 변경된다.

## 참조 규칙

```css
/* 페이지 별칭은 공통 원본을 참조한다. */
--about-accent-bright: var(--color-accent);

/* 투명도는 원본 색상을 다시 입력하지 않는다. */
background: color-mix(in srgb, var(--color-accent) 11%, transparent);
```

- 기존 `--portfolio-*`, `--home-*`, `--about-*`, `--pj-*`, `--ex-*`, `--ct-*`
  이름은 호환용 또는 페이지별 의미를 나타내는 별칭으로 유지한다.
- 같은 색상은 기존 토큰을 재사용한다. 새 색상이 꼭 필요하면 역할을 나타내는
  이름으로 `tokens.css`에 추가한다.
- 그림자의 색상도 공통 토큰에서 가져온다. 거리·블러·투명도는 각 효과가 정한다.
- 미리보기 창의 빨강·노랑·초록 표시는 `--color-window-*`로 관리하며
  브랜드 포인트 컬러와 분리한다.
- `--color-legacy-*`는 기존 Tailwind 유틸리티와 배경 효과의 호환용 팔레트다.
- 레이아웃·타이포그래피·모션 토큰과 반응형 규칙은 이번 색상 정리에서 변경하지 않았다.
