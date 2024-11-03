import Image from "next/image";
import { arrayBox } from "@/lib/dataBox";

const Box = () => {
  return (
    <section className="box">
      {arrayBox.map(({ icon, utext, unumber }) => (
        <aside key={icon}>
          <span className="span1">
            <div className="span1-container">
              <Image
                src={`/${icon}`}
                alt={`${utext}`}
                fill
                sizes="(min-width: 400px) 100vw"
                className="span1-icon"
              />
            </div>
          </span>
          <span className="span2">{utext}</span>
          <span className="span3">{unumber}</span>
        </aside>
      ))}
    </section>
  );
};

export default Box;
