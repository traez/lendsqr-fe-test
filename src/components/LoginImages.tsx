import Image from "next/image";

const LoginImages = () => {
  return (
    <article className="login-images">
      <div className="logo-lendsqr-container">
        <Image
          src="/logo-lendsqr.svg"
          alt="logo-lendsqr"
          fill
          sizes="(min-width: 400px) 100vw"
          className="logo-lendsqr"
        />
      </div>
      <div className="logo-entry-container">
        <Image
          src="/logo-entry.png"
          alt="logo-entry"
          fill
          sizes="(min-width: 400px) 100vw"
          className="logo-entry"
        />
      </div>
    </article>
  );
};

export default LoginImages;
