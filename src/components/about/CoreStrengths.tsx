const strengths = [
  { index: "01", title: "서비스 중심의 UI", description: "실서비스와 관리자 시스템에서 사용자의 업무 흐름을 이해하고 화면으로 연결합니다.", icon: "screen" },
  { index: "02", title: "구조와 상태 관리", description: "React·TypeScript를 바탕으로 컴포넌트, 서버 데이터와 UI 상태의 역할을 정리합니다.", icon: "code" },
  { index: "03", title: "운영과 사용성", description: "데이터 동기화와 예외 처리, 키보드·리모컨 포커스까지 실제 사용 환경을 고려합니다.", icon: "access" },
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
