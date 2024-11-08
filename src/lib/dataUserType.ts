export interface UserType {
    L: string;
    ORGANIZATION: string;
    USERNAME: string;
    EMAIL: string;
    "PHONE NUMBER": string;
    "DATE JOINED": string;
    STATUS: "Inactive" | "Pending" | "Blacklisted" | "Active";
    Summary: {
      name: string;
      key: string;
      balance: number;
      "account number": string;
      bank: string;
    };
    "Personal Information": {
      "FULL NAME": string;
      "PHONE NUMBER": string;
      "EMAIL ADDRESS": string;
      BVN: string;
      GENDER: "Male" | "Female";
      "MARITAL STATUS": "Single" | "Married" | "Divorced" | "Widowed";
      CHILDREN: string;
      "TYPE OF RESIDENCE":
        | "Parents' Apartment"
        | "Friend or Family's"
        | "Renting"
        | "Own House"
        | " Work Accommodation";
    };
    "Education and Employment": {
      "LEVEL OF EDUCATION":
        | "Primary"
        | "Secondary"
        | "Diploma"
        | "Degree"
        | "Masters"
        | "Doctorate"
        | "Vocational";
      "EMPLOYMENT STATUS":
        | "Employed"
        | "Self-Employed"
        | "Unemployed"
        | "Student"
        | "Retired";
      "SECTOR OF EMPLOYMENT": string;
      "DURATION OF EMPLOYMENT":
        | "1 - 2 years"
        | "3 - 5 years"
        | "5 - 9 years"
        | "10 years plus";
      "OFFICE EMAIL": string;
      "MONTHLY INCOME":
        | "N50,000 - N100,000"
        | "N101,000 - N500,000"
        | "N501,000 - N1,000,000"
        | "Above N1,000,000";
      "LOAN REPAYMENT": number;
    };
    Socials: {
      TWITTER: string;
      FACEBOOK: string;
      INSTAGRAM: string;
    };
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": string;
        "PHONE NUMBER": number;
        "EMAIL ADDRESS": string;
        RELATIONSHIP: string;
      };
      "Guarantor 2": {
        "FULL NAME": string;
        "PHONE NUMBER": number;
        "EMAIL ADDRESS": string;
        RELATIONSHIP: string;
      };
    };
  }
  