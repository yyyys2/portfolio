const strengths = [
  { index: "01", title: "제품 UI", description: <>기획 의도와 실제 사용 흐름을<br />확인하며 화면을 구현합니다.</>, icon: "screen" },
  { index: "02", title: "프론트엔드 구조", description: <>기능 추가와 변경에 대응하기 쉬운<br />컴포넌트 구조를 설계합니다.</>, icon: "code" },
  { index: "03", title: "접근성과 인터랙션", description: <>키보드 조작과 포커스 이동 등<br />기본적인 접근성을 확인합니다.</>, icon: "access" },
]

function StrengthIcon({ type }: { type: string }) {
  if (type === "screen") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="1" /><path d="M8 21h8M12 17v4" /></svg>
  if (type === "code") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 6-5 6 5 6M16 6l5 6-5 6M14 3l-4 18" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2" /><path d="M4 8h16M12 7v14M7 21l5-8 5 8" /></svg>
}

export default function CoreStrengths() {
  return (
    <section className="about-strengths" aria-labelledby="strengths-title">
      <h2 id="strengths-title" className="about-strengths__label">CORE STRENGTHS</h2>
      <div className="about-strengths__grid">
        {strengths.map((item) => (
          <article key={item.index} className="about-strength">
            <span className="about-strength__index">{item.index}</span>
            <span className="about-strength__icon"><StrengthIcon type={item.icon} /></span>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
