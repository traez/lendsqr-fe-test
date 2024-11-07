import Image from "next/image";
import Link from "next/link";

const DetailsAAA = () => {
  return (
    <>
      <section className="detailsaaa">
        <article className="article-left">
          <Link href="/dashboard" className="aside-left">
            <div className="icon-arrow-left-container">
              <Image
                src="/icon-arrow-left.svg"
                alt="icon-arrow-left"
                fill
                sizes="(min-width: 400px) 100vw"
                className="icon-arrow-left"
              />
            </div>
            <nav>Back to Users</nav>
          </Link>
          <aside className="aside-right">User Details</aside>
        </article>
        <article className="article-right">
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
        </article>
      </section>
    </>
  );
};

export default DetailsAAA;
