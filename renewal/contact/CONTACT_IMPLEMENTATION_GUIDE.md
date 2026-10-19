# Contact 페이지 구현 가이드

## 1. 목표

Contact는 포트폴리오의 마지막 화면이다. 한 화면에서 이메일, GitHub, 이력서 중 원하는 경로를 선택하고 바로 실행할 수 있게 한다.

- 문의 form과 별도 backend를 만들지 않는다.
- 동일한 연락처를 페이지 아래에 반복하지 않는다.
- 콘텐츠가 적다는 이유로 섹션을 추가하지 않는다.
- Hero와 `QUICK CONTACT` panel에 시선을 집중한다.

## 2. 참고 이미지

- `reference-images/contact-final.png`
- 이미지의 비율, 화면 밀도, Hero/Panel 관계, 색상과 여백을 참고한다.
- PNG 자체를 `<img>`로 삽입하지 않는다.
- 실제 UI와 connector는 HTML/CSS/SVG로 구현한다.

## 3. 고정 콘텐츠

### Header

- Logo: `KIM YUN YOUNG`
- Nav: `PROJECTS / EXPERIENCE / ABOUT / CONTACT`
- Active: `CONTACT`

### Hero

- Eyebrow: `CONTACT · GET IN TOUCH`
- Title: `Contact.`
- Description: `채용 및 프로젝트 관련 연락을 기다립니다.`

### Interactive panel

- Title: `QUICK CONTACT`
- Status: `● INTERACTIVE`
- Helper: `연락 방법을 선택하세요.`
- Tabs: `EMAIL / GITHUB / RESUME`

### Footer

- `© 2026 KIM YUN YOUNG. ALL RIGHTS RESERVED.`
- Footer에 이메일이나 Contact link를 다시 넣지 않는다.

## 4. 페이지 레이아웃

```text
ContactPage — min-height: 100svh
├─ PageHeader
├─ Main
│  ├─ ContactHero
│  │  ├─ HeroCopy
│  │  ├─ DotConnector
│  │  └─ QuickContactPanel
└─ CopyrightFooter
```

### Desktop

- Header, main, Footer를 grid 또는 flex column으로 배치한다.
- main은 남은 높이를 채우고 내부 Hero/Panel을 세로 중앙에 둔다.
- 좌측 Hero와 우측 Panel의 비율은 약 `1fr / 1.15fr`이다.
- Panel이 Hero 일부와 시각적으로 겹치지만 텍스트를 가리지 않는다.
- 배경 원은 CSS pseudo-element나 장식 div로 만들고 `aria-hidden=true`를 적용한다.

### 제거 상태 유지

다음 요소는 최종 시안에서 의도적으로 제거했다.

- 하단 `01 EMAIL / 02 GITHUB / 03 RESUME` 목록
- `궁금한 점은 이메일로 남겨주세요.` 섹션
- Footer의 Contact link와 이메일
- 문의 form

구현 중 페이지가 비어 보인다는 이유로 다시 추가하지 않는다.

## 5. Hero 온점 Connector

- `Contact.`의 실제 마지막 온점이 시작점이다.
- 별도의 시작 dot을 제목 옆에 만들지 않는다.
- connector는 SVG overlay를 사용한다.
- 시작점: title dot 오른쪽 중앙
- 종료점: Panel 왼쪽의 coral ring node 중앙
- `pointer-events:none`, `aria-hidden=true`
- Home/About/Projects/Experience의 공통 connector hook이 있다면 재사용한다.

### 좌표 갱신

- `document.fonts.ready`
- Hero/Panel `ResizeObserver`
- viewport resize
- Panel 크기 변경 완료

scroll 또는 animation frame마다 `getBoundingClientRect()`를 호출하지 않는다. Panel floating은 layout을 다시 측정하지 않고 connector endpoint에 같은 transform 값을 적용한다.

## 6. Quick Contact 상태

```ts
export type ContactMethod = 'email' | 'github' | 'resume';

export type ContactMethodItem = {
  id: ContactMethod;
  tabLabel: string;
  label: string;
  value: string;
  description: string;
  primaryAction: {
    label: string;
    href?: string;
    download?: boolean;
  };
};
```

초기 상태는 `email`이다. 선택 상태는 URL에 저장할 필요가 없으며 local component state로 충분하다.

## 7. Tab 접근성

기존 프로젝트에 접근 가능한 Tabs component가 있다면 우선 재사용한다. 직접 구현할 경우 WAI-ARIA tabs pattern을 따른다.

```tsx
<div role="tablist" aria-label="연락 방법">
  <button role="tab" aria-selected={active === 'email'} aria-controls="contact-email" />
  <button role="tab" aria-selected={active === 'github'} aria-controls="contact-github" />
  <button role="tab" aria-selected={active === 'resume'} aria-controls="contact-resume" />
</div>

<section role="tabpanel" id={`contact-${active}`} aria-labelledby={`contact-tab-${active}`}>
  {/* selected content */}
</section>
```

- ArrowLeft/ArrowRight: 이전·다음 tab
- Home/End: 첫·마지막 tab
- Tab: tablist에서 panel의 다음 focusable element로 이동
- 자동 activation 또는 manual activation은 기존 UI 규칙을 따른다.
- 선택 tab은 색상뿐 아니라 `aria-selected`와 명확한 border/fill로 구분한다.

## 8. EMAIL panel

- Label: `EMAIL`
- Value: `bellelaide1005@gmail.com`
- Primary: `이메일 작성 →`
- Secondary: `주소 복사`
- Note: `기본 메일 앱으로 연결됩니다.`

### 이메일 작성

```tsx
<a href="mailto:bellelaide1005@gmail.com">이메일 작성 →</a>
```

기본 mail client를 여는 동작이므로 `target="_blank"`를 강제하지 않는다. 제목이나 본문을 미리 채울 경우 `encodeURIComponent`를 사용하고, 사용자가 요청하지 않은 장문의 template은 넣지 않는다.

### 주소 복사

```ts
async function copyEmail() {
  try {
    await navigator.clipboard.writeText('bellelaide1005@gmail.com');
    setCopyStatus('success');
  } catch {
    setCopyStatus('error');
  }
}
```

- Success label: `복사됨 ✓`
- Error message: `복사하지 못했습니다. 이메일 주소를 직접 선택해 주세요.`
- feedback은 `aria-live="polite"`로 제공한다.
- 성공 label은 약 2초 후 `주소 복사`로 되돌린다.
- 중복 timer와 unmount cleanup을 처리한다.
- Clipboard API를 사용할 수 없는 환경에서는 email text selection 또는 안전한 fallback을 제공한다.

## 9. GITHUB panel

- Label: `GITHUB`
- Value: `github.com/yyyys2`
- Primary: `GitHub 보기 →`
- Note: `새 탭에서 열립니다.`
- URL: `https://github.com/yyyys2`

```tsx
<a href="https://github.com/yyyys2" target="_blank" rel="noreferrer noopener">
  GitHub 보기 →
</a>
```

GitHub 사용자명이나 URL을 다른 값으로 추정하지 않는다.

## 10. RESUME panel

- Label: `RESUME`
- Value: `김윤영 프론트엔드 이력서`
- Primary: `이력서 다운로드 ↓`
- Note: `PDF 파일로 다운로드됩니다.`

실제 PDF asset과 filename을 확인한 후 다음처럼 연결한다.

```tsx
<a href={resumeUrl} download={resumeFilename}>
  이력서 다운로드 ↓
</a>
```

- asset이 없으면 빈 파일, placeholder PDF, `href="#"`를 만들지 않는다.
- PDF가 외부 URL이고 CORS 또는 download attribute가 동작하지 않으면 같은 tab navigation 등 실제 환경에 맞는 방식을 사용한다.
- 최종 구현 결과에 미연결 이유와 필요한 asset을 보고한다.

## 11. Motion

- Panel floating: 5~7초 주기, translateY 4~6px 이내
- Panel `:hover` 또는 `:focus-within`: floating pause
- Tab 전환: 150~220ms opacity와 미세 translate
- Connector draw: 최초 진입 시 한 번만 허용
- 과한 spring, 흔들림, 자동 tab 전환 금지

`prefers-reduced-motion: reduce`에서는 floating, connector draw, smooth tab animation을 제거한다. 기능과 선택 상태는 그대로 유지한다.

## 12. 반응형

### 1024px 이상

- Hero/Panel 2열
- viewport 안에서 Header/Main/Footer 완결
- Panel 최대 폭을 제한하고 긴 email이 잘리지 않게 한다.

### 768~1023px

- Hero/Panel 간격을 줄이거나 세로 stack으로 전환한다.
- connector가 문구를 가리면 제거한다.
- Footer는 문서 흐름 안에서 하단에 배치한다.

### 767px 이하

- 단일 열: Header → Hero → Panel → Footer
- connector와 floating 제거
- Panel tilt 제거
- tabs는 3열을 우선 유지하되 글자가 잘리면 scrollable tablist 또는 세로 button group 사용
- email에 `overflow-wrap:anywhere`
- 모든 control 최소 44×44px
- fixed height 금지, 필요한 만큼 자연스럽게 scroll

## 13. 시각 토큰

새 값을 독립적으로 만들기보다 기존 Portfolio token을 재사용한다.

- Background: warm cream/off-white
- Primary text: deep navy
- Accent: coral red
- Secondary text: desaturated blue-gray
- Border: low-contrast navy/gray 1px
- Panel: white with subtle shadow
- Selected tab: coral fill and white text
- Focus ring: background과 3:1 이상 대비

## 14. 검증 조건

- [ ] Header에서 CONTACT가 활성화되어 있다.
- [ ] Hero 문구와 실제 마지막 온점이 정확하다.
- [ ] connector가 title dot과 Panel node를 연결한다.
- [ ] Panel floating과 endpoint가 함께 움직인다.
- [ ] EMAIL/GITHUB/RESUME tab이 pointer와 keyboard로 동작한다.
- [ ] EMAIL mailto 주소가 정확하다.
- [ ] 주소 복사 성공·실패와 2초 label 복구가 동작한다.
- [ ] GitHub URL, target, rel이 정확하다.
- [ ] Resume 실제 asset이 있을 때만 download를 제공한다.
- [ ] hover와 focus-within에서 floating이 멈춘다.
- [ ] reduced-motion에서 불필요한 animation이 제거된다.
- [ ] 모바일에서 connector/floating이 제거된다.
- [ ] 긴 email이 잘리지 않는다.
- [ ] 화면 아래에 중복 연락 목록이나 추가 Contact 섹션이 없다.
- [ ] Footer에는 저작권만 있다.
- [ ] 360/768/1024/1440px에서 콘텐츠가 겹치지 않는다.
- [ ] typecheck, lint, build가 통과한다.

