// Adapted from the previous portfolio's profile, skills and reliability content
// (bed3273: src/i18n/ko.ts, src/data/skills.ts) and current selected projects.
const skills = [
  { title: "UI 개발", stack: ["React", "TypeScript", "JavaScript", "HTML", "CSS / SCSS", "Tailwind CSS"], description: "컴포넌트의 역할과 인터페이스를 정리하고, 반응형 레이아웃과 재사용 가능한 UI를 구현합니다." },
  { title: "상태와 데이터", stack: ["TanStack Query", "Zustand"], description: "서버 데이터와 UI 상태를 구분하고, API 연동·캐싱·비동기 데이터 흐름을 관리합니다." },
  { title: "다양한 실행 환경", stack: ["Svelte", "webOS", "Vue", "Tauri"], description: "TV 오버레이의 리모컨 조작부터 업무 시스템 유지보수, Windows 메모 앱까지 환경에 맞는 화면을 개발해왔습니다." },
  { title: "협업과 품질", stack: ["Git / GitLab / GitHub", "Figma", "접근성", "성능 개선"], description: "디자인을 함께 검토하고 변경 이력을 관리합니다. 시맨틱 구조와 키보드 탐색, 렌더링 성능도 확인합니다." },
]

const principles = [
  { title: "사용 흐름부터 이해합니다", body: "화면을 구현하기 전에 사용자가 어떤 목적으로 진입하고, 무엇을 확인하고, 다음에 어떤 행동을 하는지 살핍니다. AI Agent에서는 질의부터 결과 확인, Canvas 편집과 메일 발송까지 이어지는 업무 흐름을 구현했습니다.", project: "ai-agent", link: "AI Agent UI" },
  { title: "상태의 책임을 명확히 나눕니다", body: "데이터를 조회하는 상태와 화면을 조작하는 상태를 구분합니다. 디지털 사이니지에서는 대시보드와 리스트의 동기화, 조회·수정 흐름, 수정 실패 시 되돌리는 규칙을 정리했습니다.", project: "digital-signage-management", link: "디지털 사이니지" },
  { title: "예외 상황까지 화면의 일부로 봅니다", body: "정상 응답뿐 아니라 로딩, 지연, 실패와 다시 시도하는 흐름도 함께 고려합니다. webOS 오버레이에서는 추천 데이터가 늦게 도착할 때의 대체 화면과 진입·종료 시 포커스 복귀를 다뤘습니다.", project: "tv-overlay-shopping", link: "webOS 오버레이 앱" },
]

export default function AboutProfile() {
  return <>
    <section className="about-section about-intro" aria-labelledby="about-intro-title">
      <header><p className="about-section__eyebrow">INTRODUCTION</p><h2 id="about-intro-title">화면 너머의 <br />사용 경험까지.</h2></header>
      <div className="about-intro__body">
        <p className="about-intro__lead">안녕하세요. 사용자 경험의 디테일을 놓치지 않는<br className="about-desktop-break" /> 프론트엔드 개발자 김윤영입니다.</p>
        <p>React와 TypeScript를 중심으로 실서비스와 관리자 시스템을 개발해왔습니다. 신규 구축부터 운영·유지보수까지 경험하며, 화면을 구현하는 일과 서비스가 안정적으로 동작하도록 다듬는 일을 함께 해왔습니다.</p>
        <p>복잡한 업무 UI의 컴포넌트 구조, 상태 관리, API 연동과 성능 개선에 관심이 있습니다. 웹뿐 아니라 Svelte 기반 webOS 프로젝트와 Tauri 기반 Windows 앱을 통해 서로 다른 환경의 사용 흐름도 경험했습니다.</p>
        <p className="about-intro__note">여행지의 순간을 사진으로 기록하는 것을 좋아합니다. 작은 차이를 관찰하는 습관은 화면의 디테일을 살피는 태도로 이어집니다.</p>
      </div>
    </section>

    <section className="about-section" aria-labelledby="about-skills-title">
      <header><p className="about-section__eyebrow">SKILLS & TOOLS</p><h2 id="about-skills-title">기술을 사용하는 방식</h2><p className="about-section__description">실무와 개인 프로젝트에서 활용한 기술을 <br className="about-desktop-break" /> 실제 사용 경험과 함께 정리했습니다.</p></header>
      <div className="about-skills">
        {skills.map(skill => <article className="about-skill" key={skill.title}>
          <h3>{skill.title}</h3><p>{skill.description}</p>
          <ul aria-label={`${skill.title} 기술`}>{skill.stack.map(item => <li key={item}>{item}</li>)}</ul>
        </article>)}
      </div>
    </section>

    <section className="about-section" aria-labelledby="about-working-title">
      <header><p className="about-section__eyebrow">HOW I WORK</p><h2 id="about-working-title">구현부터 운영까지</h2><p className="about-section__description">보기 좋은 화면에서 한 걸음 더 나아가,<br className="about-desktop-break" /> 실제 사용 중의 안정성을 생각합니다.</p></header>
      <ol className="about-principles">
        {principles.map((item, index) => <li key={item.title}>
          <span className="about-principles__index">0{index + 1}</span>
          <div><h3>{item.title}</h3><p>{item.body}</p><a href={`#/projects?project=${item.project}`}>{item.link} <span aria-hidden="true">↗</span></a></div>
        </li>)}
      </ol>
    </section>
  </>
}
