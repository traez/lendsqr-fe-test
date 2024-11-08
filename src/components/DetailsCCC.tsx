import { UserType } from "@/lib/dataUserType";

interface DetailsCCCProps {
  userInfo: UserType | undefined;
}

const DetailsCCC = ({ userInfo }: DetailsCCCProps) => {
  const personalInfo = {
    "FULL NAME": userInfo?.["Personal Information"]["FULL NAME"],
    "PHONE NUMBER": userInfo?.["Personal Information"]["PHONE NUMBER"],
    "EMAIL ADDRESS": userInfo?.["Personal Information"]["EMAIL ADDRESS"],
    BVN: userInfo?.["Personal Information"].BVN,
    GENDER: userInfo?.["Personal Information"].GENDER,
    "MARITAL STATUS": userInfo?.["Personal Information"]["MARITAL STATUS"],
    CHILDREN: userInfo?.["Personal Information"].CHILDREN,
    "TYPE OF RESIDENCE":
      userInfo?.["Personal Information"]["TYPE OF RESIDENCE"],
  };

  const educationEmployment = {
    "LEVEL OF EDUCATION":
      userInfo?.["Education and Employment"]["LEVEL OF EDUCATION"],
    "EMPLOYMENT STATUS":
      userInfo?.["Education and Employment"]["EMPLOYMENT STATUS"],
    "SECTOR OF EMPLOYMENT":
      userInfo?.["Education and Employment"]["SECTOR OF EMPLOYMENT"],
    "DURATION OF EMPLOYMENT":
      userInfo?.["Education and Employment"]["DURATION OF EMPLOYMENT"],
    "OFFICE EMAIL": userInfo?.["Education and Employment"]["OFFICE EMAIL"],
    "MONTHLY INCOME": userInfo?.["Education and Employment"]["MONTHLY INCOME"],
    "LOAN REPAYMENT": userInfo?.["Education and Employment"]["LOAN REPAYMENT"],
  };

  const socials = {
    TWITTER: userInfo?.Socials.TWITTER,
    FACEBOOK: userInfo?.Socials.FACEBOOK,
    INSTAGRAM: userInfo?.Socials.INSTAGRAM,
  };

  const guarantor1 = {
    "FULL NAME": userInfo?.Guarantor["Guarantor 1"]["FULL NAME"],
    "PHONE NUMBER": userInfo?.Guarantor["Guarantor 1"]["PHONE NUMBER"],
    "EMAIL ADDRESS": userInfo?.Guarantor["Guarantor 1"]["EMAIL ADDRESS"],
    RELATIONSHIP: userInfo?.Guarantor["Guarantor 1"].RELATIONSHIP,
  };

  const guarantor2 = {
    "FULL NAME": userInfo?.Guarantor["Guarantor 2"]["FULL NAME"],
    "PHONE NUMBER": userInfo?.Guarantor["Guarantor 2"]["PHONE NUMBER"],
    "EMAIL ADDRESS": userInfo?.Guarantor["Guarantor 2"]["EMAIL ADDRESS"],
    RELATIONSHIP: userInfo?.Guarantor["Guarantor 2"].RELATIONSHIP,
  };

  return (
    <section className="detailsccc">
      <article>
        <nav>Personal Information</nav>
        <aside>
          {Object.entries(personalInfo).map(([key, value]) => (
            <menu key={key}>
              <p>{key}</p>
              <b>{value}</b>
            </menu>
          ))}
        </aside>
      </article>
      <article>
        <nav>Education and Employment</nav>
        <aside>
          {Object.entries(educationEmployment).map(([key, value]) => (
            <menu key={key}>
              <p>{key}</p>
              <b>{value}</b>
            </menu>
          ))}
        </aside>
      </article>
      <article>
        <nav>Socials</nav>
        <aside>
          {Object.entries(socials).map(([key, value]) => (
            <menu key={key}>
              <p>{key}</p>
              <b>{value}</b>
            </menu>
          ))}
        </aside>
      </article>
      <article>
        <nav>Guarantor</nav>
        <aside>
          {Object.entries(guarantor1).map(([key, value]) => (
            <menu key={key}>
              <p>{key}</p>
              <b>{value}</b>
            </menu>
          ))}
        </aside>
      </article>
      <article>
        <aside>
          {Object.entries(guarantor2).map(([key, value]) => (
            <menu key={key}>
              <p>{key}</p>
              <b>{value}</b>
            </menu>
          ))}
        </aside>
      </article>
    </section>
  );
};

export default DetailsCCC;
