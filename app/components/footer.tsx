export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__text">  {/* меняем p на div */}
          <div>
            © 2016–2026 Добровольческий поисково-спасательный отряд «Лига Спас»
          </div>
          <div>
            Региональное отделение Национального центра помощи пропавшим и пострадавшим людям.
          </div>
        </div>
      </div>
    </footer>
  );
}