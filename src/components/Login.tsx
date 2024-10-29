//import Image from "next/image";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Login = () => {
  return (
    <section className="login">
      <article className="login-divs login-images">Box 1</article>
      <article className="login-divs login-form">
        <div className="main-container">
          <Child1 />
          <Child2 />
        </div>
      </article>
    </section>
  );
};

export default Login;
