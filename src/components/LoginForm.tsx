"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <article className="login-form">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <aside className="login-form-container-top">
          <h1 className="login-form-heading">Welcome!</h1>
          <p className="login-form-subheading">Enter details to login.</p>
        </aside>
        <aside className="login-form-container-bottom">
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="login-form-email-input"
            required
          />

          <div className="login-form-password-container">
            <input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              className="login-form-password-input"
              maxLength={30}
              required
            />
            <button
              type="button"
              className="login-form-toggle-button"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? "HIDE" : "SHOW"}
            </button>
          </div>

          <p className="login-form-forgot-password">FORGOT PASSWORD?</p>

          <button type="submit" className="login-form-submit-button">
            LOG IN
          </button>
        </aside>
      </form>
    </article>
  );
};

export default LoginForm;
