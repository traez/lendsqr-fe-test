const DetailsCCC = () => {
  const personalInfo = {
    "FULL NAME": "Grace Effiom",
    "PHONE NUMBER": "97012345678",
    "EMAIL ADDRESS": "grace@gmail.com",
    BVN: "12345678901",
    GENDER: "Female",
    "MARITAL STATUS": "Single",
    CHILDREN: 0,
    "TYPE OF RESIDENCE": "Renting",
  };

  const educationEmployment = {
    "LEVEL OF EDUCATION": "Degree",
    "EMPLOYMENT STATUS": "Employed",
    "SECTOR OF EMPLOYMENT": "Medical",
    "DURATION OF EMPLOYMENT": "1 - 2 years",
    "OFFICE EMAIL": "bob@trump.com",
    "MONTHLY INCOME": "N50,000 - N100,000",
    "LOAN REPAYMENT": "9000",
  };

  const socials = {
    "TWITTER": "@janesmith",
    "FACEBOOK": "Jane Smith",
    "INSTAGRAM": "@jane_smith_official",
  };

  const guarantor1 = {
    "FULL NAME": "Michael Brown",
    "PHONE NUMBER": "3456789012",
    "EMAIL ADDRESS": "michaelbrown@example.com",
    "RELATIONSHIP": "Brother",
  };

  const guarantor2 = {
    "FULL NAME": "Emily Green",
    "PHONE NUMBER": "3453849012",
    "EMAIL ADDRESS": "emilygreen@example.com",
    "RELATIONSHIP": "Colleague",
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
