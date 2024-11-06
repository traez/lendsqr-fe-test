import Image from "next/image";

const DetailsBBB = () => {
  return (
    <>
      <section className="detailsbbb">
        <article className="article-top">
          <aside className="aside-a">
            <div className="icon-user-pp-container">
              <Image
                src="/icon-user-pp.png"
                alt="icon-user-pp"
                fill
                sizes="(min-width: 400px) 100vw"
                className="icon-user-pp"
              />
            </div>
            <nav>
              <b>Grace Effiom</b>
              <p>LSQFf587g90</p>
            </nav>
          </aside>
          <aside className="aside-b">
            <p>User’s Tier</p>
            <span>
              <div className="icon-star-yellow-container">
                <Image
                  src="/icon-star-yellow.svg"
                  alt="icon-star-yellow"
                  fill
                  sizes="(min-width: 400px) 100vw"
                  className="icon-star-yellow"
                />
              </div>
              <div className="icon-star-white-container">
                <Image
                  src="/icon-star-white.svg"
                  alt="icon-star-white"
                  fill
                  sizes="(min-width: 400px) 100vw"
                  className="icon-star-white"
                />
              </div>
              <div className="icon-star-white-container">
                <Image
                  src="/icon-star-white.svg"
                  alt="icon-star-white"
                  fill
                  sizes="(min-width: 400px) 100vw"
                  className="icon-star-white"
                />
              </div>
            </span>
          </aside>
          <aside className="aside-c">
            <b>
              <span>N</span>200,000.00
            </b>
            <p>
              <span className="numba">9912345678</span>
              <span className="slash">/</span>
              <span className="bank">Providus Bank</span>
            </p>
          </aside>
        </article>
        <article className="article-bottom">
          <aside className="aside-green">General Details</aside>
          <aside>Documents</aside>
          <aside>Bank Details</aside>
          <aside>Loans</aside>
          <aside>Savings</aside>
          <aside>App and System</aside>
        </article>
      </section>
    </>
  );
};

export default DetailsBBB;
