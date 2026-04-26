export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white/10 rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold">Doppa Deepthi Reddy</h1>
          <p className="mt-3 text-cyan-300 text-lg">Aspiring Pharma-Tech Professional | AI, Data & Digital Healthcare</p>
          <p className="mt-2 text-sm text-slate-300">Sangareddy, Telangana, India</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3">Career Objective</h2>
            <p className="text-sm text-slate-200">Aspiring pharma-tech professional seeking to build AI-driven solutions for healthcare, drug safety, and pharmaceutical innovation.</p>
          </div>
          <div className="bg-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3">Education</h2>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>BVRIT (2023–2027) – B.Tech PHE / Minor in AI & ML</li>
              <li>Sri Chaitanya Junior Kalasala – 98.2%</li>
              <li>Sanghamitra High School – 10/10</li>
            </ul>
          </div>

          <div className="bg-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3">Skills</h2>
            <p className="text-sm text-slate-200">Python, SQL, GenAI, C, HTML, CSS, GitHub, DBMS, Pharmacology, QA/QC, Leadership</p>
          </div>
        </div>

        <div className="bg-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-3">Projects</h2>
          <p className="text-sm text-slate-200">• ADR Prediction Platform for Rheumatoid Arthritis – Drug interaction checker, ADR analytics, AI severity prediction using healthcare datasets.<br/>• AI Drug Dissolution Predictor – Predicts dissolution profile from formulation parameters using machine learning.<br/>• Portfolio & Web UI Projects – Responsive websites and Bootstrap-based sections.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
            <ul className="space-y-2 text-sm text-slate-200"><li>NPTEL - Joy of Computing using Python</li><li>NPTEL - Cloud Computing</li><li>Generative AI Workshop @ IIT</li><li>Industry 4.0 Training Program</li></ul>
          </div>
          <div className="bg-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold mb-3">Achievements</h2>
            <ul className="space-y-2 text-sm text-slate-200"><li>Selected for Smart India Hackathon 2025</li><li>President in Sanghamitra High School</li><li>Organizing Committee Member</li></ul>
          </div>
        </div>
        <div className="bg-white/10 rounded-3xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-sm text-slate-200">Email: deepthireddydoppa0508@gmail.com<br/>Phone: +91 9959099244<br/>LinkedIn: deepthi-reddy-doppa<br/>GitHub: ddr584</p>
        </div>
        <div className="text-center text-sm text-cyan-300 pt-4 animate-pulse">⚡ Complete Resume Portfolio Ready</div>
      </div>
    </div>
  );
}
