const Bottom = () => {
  return (
    <footer className="bottom">
      <a
        href="https://github.com/traez/lendsqr-fe-test"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__link"
      >
        Lendsqr Frontend Test
      </a>
      <b className="footer__copyright">
        <span>© {new Date().getFullYear()}</span> Trae Zeeofor
      </b>
    </footer>
  );
};

export default Bottom;
