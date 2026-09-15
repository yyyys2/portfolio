# Portfolio Experience 구현 전달 패키지

## 파일 구성

- `EXPERIENCE_IMPLEMENTATION_GUIDE.md`: 화면 구성, 경력 데이터, 미리보기·상세 아코디언, 연결선, 반응형 및 접근성 사양
- `AI_IMPLEMENTATION_PROMPT.txt`: 코드 구현 AI에게 그대로 전달할 최종 명령문
- `reference-images/experience-default.png`: `CAREER PREVIEW`가 실제 선택 UI로 보이는 Experience 기본 화면
- `reference-images/experience-detail-expanded.png`: 오큐브 상세가 행 아래에 펼쳐진 화면

## 전달 방법

코드 구현 AI에게 이 폴더 전체를 전달하고 `AI_IMPLEMENTATION_PROMPT.txt`의 내용을 실행하도록 요청한다.

두 PNG는 시각 참고용이다. PNG 전체를 웹페이지에 삽입하지 말고 실제 HTML, React 컴포넌트, CSS, SVG로 재현한다. 이 문서의 동작·콘텐츠 사양이 이미지보다 우선하며, 기존 프로젝트의 공통 Header/Footer와 디자인 토큰을 재사용한다.

Hero 오른쪽 패널은 단순 이미지가 아니다. 회사 선택에 따라 요약이 바뀌는 `CAREER PREVIEW`이며, 패널 하단 CTA를 누르면 아래 경력 목록의 대응 항목으로 이동해 상세 accordion을 연다.
