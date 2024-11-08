import Image from "next/image";
import { UserType } from "@/lib/dataUserType";

interface DetailsBBBProps {
  userInfo: UserType | undefined;
}

const DetailsBBB = ({ userInfo }: DetailsBBBProps) => {

  const formattedBalance = userInfo?.Summary.balance
    ? new Intl.NumberFormat("en-US").format(userInfo.Summary.balance)
    : "0";

  return (
    <>
      <section className="detailsbbb">
        <article className="article-top">
          <aside className="aside-a">
            <div className="icon-user-pp-container">
              <Image
                src="/icon-user-ppp.svg"
                alt="icon-user-pp"
                /*   fill */
                sizes="(min-width: 400px) 100vw"
                width={40}
                height={40}
                className="icon-user-pp"
              />
            </div>
            <nav>
              <b>{userInfo?.Summary.name}</b>
              <p>{userInfo?.Summary.key}</p>
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
              <span>N</span>
              {formattedBalance}
            </b>
            <p>
              <span className="numba">{userInfo?.Summary["account number"]}</span>
              <span className="slash">/</span>
              <span className="bank">{userInfo?.Summary.bank}</span>
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
