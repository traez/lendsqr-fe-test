export interface DataTypeUserInfo {
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
    "account number": number;
    bank: string;
  };
  "Personal Information": {
    "FULL NAME": string;
    "PHONE NUMBER": number;
    "EMAIL ADDRESS": string;
    BVN: number;
    "MARITAL STATUS": "Single" | "Married" | "Divorced" | "Widowed";
    CHILDREN: number;
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

export const arrayCard: Array<DataTypeUserInfo> = [
  {
    L: "I",
    ORGANIZATION: "Tech Innovations Inc.",
    USERNAME: "johndoe123",
    EMAIL: "johndoe@example.com",
    "PHONE NUMBER": "08012345678",
    "DATE JOINED": "May 15, 2023 10:15 AM",
    STATUS: "Inactive",
    Summary: {
      name: "John Doe",
      key: "account001",
      balance: 1500.75,
      "account number": 9987654321,
      bank: "Example Bank",
    },
    "Personal Information": {
      "FULL NAME": "Johnathan Doe",
      "PHONE NUMBER": 9876543210,
      "EMAIL ADDRESS": "johnathan.doe@example.com",
      BVN: 12345678901,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Technology",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "john.doe@techinnovations.com",
      "MONTHLY INCOME": "N101,000 - N500,000",
      "LOAN REPAYMENT": 200,
    },
    Socials: {
      TWITTER: "@johndoe",
      FACEBOOK: "John Doe",
      INSTAGRAM: "@johndoe",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Jane Smith",
        "PHONE NUMBER": 1234567890,
        "EMAIL ADDRESS": "janesmith@example.com",
        RELATIONSHIP: "Sister",
      },
      "Guarantor 2": {
        "FULL NAME": "Robert Doe",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "robertdoe@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Future Solutions Ltd.",
    USERNAME: "janesmith456",
    EMAIL: "janesmith@example.com",
    "PHONE NUMBER": "08123456789",
    "DATE JOINED": "June 20, 2023 11:30 AM",
    STATUS: "Pending",
    Summary: {
      name: "Jane Smith",
      key: "account002",
      balance: 3200.5,
      "account number": 8899776655,
      bank: "NextGen Bank",
    },
    "Personal Information": {
      "FULL NAME": "Jane Alicia Smith",
      "PHONE NUMBER": 8765432109,
      "EMAIL ADDRESS": "jane.alicia@example.com",
      BVN: 23456789012,
      "MARITAL STATUS": "Married",
      CHILDREN: 2,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Self-Employed",
      "SECTOR OF EMPLOYMENT": "Finance",
      "DURATION OF EMPLOYMENT": "5 - 9 years",
      "OFFICE EMAIL": "jane.smith@futuresolutions.com",
      "MONTHLY INCOME": "N501,000 - N1,000,000",
      "LOAN REPAYMENT": 1500,
    },
    Socials: {
      TWITTER: "@janesmith",
      FACEBOOK: "Jane Smith",
      INSTAGRAM: "@jane_smith_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Michael Brown",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "michaelbrown@example.com",
        RELATIONSHIP: "Brother",
      },
      "Guarantor 2": {
        "FULL NAME": "Emily Green",
        "PHONE NUMBER": 4567890123,
        "EMAIL ADDRESS": "emilygreen@example.com",
        RELATIONSHIP: "Colleague",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Digital Solutions Co.",
    USERNAME: "robertsmith789",
    EMAIL: "robertsmith@example.com",
    "PHONE NUMBER": "09012345678",
    "DATE JOINED": "July 05, 2023 09:00 AM",
    STATUS: "Active",
    Summary: {
      name: "Robert Smith",
      key: "account003",
      balance: 2900.0,
      "account number": 1234567890,
      bank: "First National Bank",
    },
    "Personal Information": {
      "FULL NAME": "Robert Michael Smith",
      "PHONE NUMBER": 1234567890,
      "EMAIL ADDRESS": "robert.m@example.com",
      BVN: 34567890123,
      "MARITAL STATUS": "Single",
      CHILDREN: 1,
      "TYPE OF RESIDENCE": "Parents' Apartment",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Engineering",
      "DURATION OF EMPLOYMENT": "3 - 5 years",
      "OFFICE EMAIL": "robert.smith@digitalsolutions.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 100,
    },
    Socials: {
      TWITTER: "@robertsmith",
      FACEBOOK: "Robert Smith",
      INSTAGRAM: "@robertsmith_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Alice Smith",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "alicesmith@example.com",
        RELATIONSHIP: "Sister",
      },
      "Guarantor 2": {
        "FULL NAME": "James Brown",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "jamesbrown@example.com",
        RELATIONSHIP: "Colleague",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Creative Minds Ltd.",
    USERNAME: "emilyjohnson111",
    EMAIL: "emilyjohnson@example.com",
    "PHONE NUMBER": "08012345679",
    "DATE JOINED": "August 01, 2023 08:15 AM",
    STATUS: "Blacklisted",
    Summary: {
      name: "Emily Johnson",
      key: "account004",
      balance: 1500.0,
      "account number": 1122334455,
      bank: "Standard Bank",
    },
    "Personal Information": {
      "FULL NAME": "Emily Anne Johnson",
      "PHONE NUMBER": 3456789012,
      "EMAIL ADDRESS": "emily.j@example.com",
      BVN: 45678901234,
      "MARITAL STATUS": "Divorced",
      CHILDREN: 1,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Diploma",
      "EMPLOYMENT STATUS": "Unemployed",
      "SECTOR OF EMPLOYMENT": "Art",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "emily.johnson@creativeminds.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 300,
    },
    Socials: {
      TWITTER: "@emilyjohnson",
      FACEBOOK: "Emily Johnson",
      INSTAGRAM: "@emily_johnson_art",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Anna White",
        "PHONE NUMBER": 4567890123,
        "EMAIL ADDRESS": "annawhite@example.com",
        RELATIONSHIP: "Friend",
      },
      "Guarantor 2": {
        "FULL NAME": "David Brown",
        "PHONE NUMBER": 5678901234,
        "EMAIL ADDRESS": "davidbrown@example.com",
        RELATIONSHIP: "Colleague",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Global Tech Solutions",
    USERNAME: "charlesbrown222",
    EMAIL: "charlesbrown@example.com",
    "PHONE NUMBER": "09123456789",
    "DATE JOINED": "September 12, 2023 03:45 PM",
    STATUS: "Active",
    Summary: {
      name: "Charles Brown",
      key: "account005",
      balance: 4500.25,
      "account number": 2233445566,
      bank: "United Bank",
    },
    "Personal Information": {
      "FULL NAME": "Charles Michael Brown",
      "PHONE NUMBER": 1234567890,
      "EMAIL ADDRESS": "charles.m@example.com",
      BVN: 56789012345,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Self-Employed",
      "SECTOR OF EMPLOYMENT": "Technology",
      "DURATION OF EMPLOYMENT": "3 - 5 years",
      "OFFICE EMAIL": "charles.brown@globaltech.com",
      "MONTHLY INCOME": "N101,000 - N500,000",
      "LOAN REPAYMENT": 600,
    },
    Socials: {
      TWITTER: "@charlesbrown",
      FACEBOOK: "Charles Brown",
      INSTAGRAM: "@charles_brown_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Sarah Green",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "sarahgreen@example.com",
        RELATIONSHIP: "Sister",
      },
      "Guarantor 2": {
        "FULL NAME": "Henry Black",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "henryblack@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "InnovateTech Ltd.",
    USERNAME: "karenwhite333",
    EMAIL: "karenwhite@example.com",
    "PHONE NUMBER": "07012345678",
    "DATE JOINED": "October 10, 2023 04:20 PM",
    STATUS: "Active",
    Summary: {
      name: "Karen White",
      key: "account006",
      balance: 3700.15,
      "account number": 3344556677,
      bank: "City Bank",
    },
    "Personal Information": {
      "FULL NAME": "Karen Elizabeth White",
      "PHONE NUMBER": 1234567890,
      "EMAIL ADDRESS": "karen.e@example.com",
      BVN: 67890123456,
      "MARITAL STATUS": "Married",
      CHILDREN: 3,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Marketing",
      "DURATION OF EMPLOYMENT": "3 - 5 years",
      "OFFICE EMAIL": "karen.white@innovatetech.com",
      "MONTHLY INCOME": "N501,000 - N1,000,000",
      "LOAN REPAYMENT": 400,
    },
    Socials: {
      TWITTER: "@karenwhite",
      FACEBOOK: "Karen White",
      INSTAGRAM: "@karen_white_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Lily Adams",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "lilyadams@example.com",
        RELATIONSHIP: "Sister",
      },
      "Guarantor 2": {
        "FULL NAME": "Jack Johnson",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "jackjohnson@example.com",
        RELATIONSHIP: "Colleague",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Alpha Tech Inc.",
    USERNAME: "lindasmith444",
    EMAIL: "lindasmith@example.com",
    "PHONE NUMBER": "08012345680",
    "DATE JOINED": "November 01, 2023 02:00 PM",
    STATUS: "Pending",
    Summary: {
      name: "Linda Smith",
      key: "account007",
      balance: 2200.5,
      "account number": 4455667788,
      bank: "Nationwide Bank",
    },
    "Personal Information": {
      "FULL NAME": "Linda Marie Smith",
      "PHONE NUMBER": 3456789012,
      "EMAIL ADDRESS": "linda.m@example.com",
      BVN: 78901234567,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Unemployed",
      "SECTOR OF EMPLOYMENT": "Research",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "linda.smith@alphatech.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 200,
    },
    Socials: {
      TWITTER: "@lindasmith",
      FACEBOOK: "Linda Smith",
      INSTAGRAM: "@lindasmith_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Max Brown",
        "PHONE NUMBER": 4567890123,
        "EMAIL ADDRESS": "maxbrown@example.com",
        RELATIONSHIP: "Brother",
      },
      "Guarantor 2": {
        "FULL NAME": "Sara Johnson",
        "PHONE NUMBER": 5678901234,
        "EMAIL ADDRESS": "sarajohnson@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Future Vision Corp.",
    USERNAME: "thomastaylor555",
    EMAIL: "thomastaylor@example.com",
    "PHONE NUMBER": "08123456780",
    "DATE JOINED": "December 12, 2023 11:00 AM",
    STATUS: "Active",
    Summary: {
      name: "Thomas Taylor",
      key: "account008",
      balance: 3000.75,
      "account number": 5566778899,
      bank: "Trust Bank",
    },
    "Personal Information": {
      "FULL NAME": "Thomas Samuel Taylor",
      "PHONE NUMBER": 9876543210,
      "EMAIL ADDRESS": "thomas.s@example.com",
      BVN: 89012345678,
      "MARITAL STATUS": "Married",
      CHILDREN: 2,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Self-Employed",
      "SECTOR OF EMPLOYMENT": "Consulting",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "thomas.taylor@futurevision.com",
      "MONTHLY INCOME": "N501,000 - N1,000,000",
      "LOAN REPAYMENT": 500,
    },
    Socials: {
      TWITTER: "@thomastaylor",
      FACEBOOK: "Thomas Taylor",
      INSTAGRAM: "@thomas_taylor_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "James White",
        "PHONE NUMBER": 1234567890,
        "EMAIL ADDRESS": "jameswhite@example.com",
        RELATIONSHIP: "Friend",
      },
      "Guarantor 2": {
        "FULL NAME": "Linda Johnson",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "lindajohnson@example.com",
        RELATIONSHIP: "Colleague",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Pinnacle Innovations",
    USERNAME: "elizabethharris666",
    EMAIL: "elizabethharris@example.com",
    "PHONE NUMBER": "07012345681",
    "DATE JOINED": "January 15, 2024 01:30 PM",
    STATUS: "Active",
    Summary: {
      name: "Elizabeth Harris",
      key: "account009",
      balance: 1800.0,
      "account number": 6677889900,
      bank: "Central Bank",
    },
    "Personal Information": {
      "FULL NAME": "Elizabeth Anne Harris",
      "PHONE NUMBER": 3456789012,
      "EMAIL ADDRESS": "elizabeth.a@example.com",
      BVN: 90123456789,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Healthcare",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "elizabeth.harris@pinnacleinnovations.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 150,
    },
    Socials: {
      TWITTER: "@elizabethharris",
      FACEBOOK: "Elizabeth Harris",
      INSTAGRAM: "@elizabeth_harris_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Anna Lee",
        "PHONE NUMBER": 4567890123,
        "EMAIL ADDRESS": "annalee@example.com",
        RELATIONSHIP: "Sister",
      },
      "Guarantor 2": {
        "FULL NAME": "Mark Thompson",
        "PHONE NUMBER": 5678901234,
        "EMAIL ADDRESS": "markthompson@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Quantum Solutions",
    USERNAME: "adamjones777",
    EMAIL: "adamjones@example.com",
    "PHONE NUMBER": "08123456789",
    "DATE JOINED": "February 28, 2024 10:00 AM",
    STATUS: "Pending",
    Summary: {
      name: "Adam Jones",
      key: "account010",
      balance: 2400.0,
      "account number": 7788990011,
      bank: "State Bank",
    },
    "Personal Information": {
      "FULL NAME": "Adam Michael Jones",
      "PHONE NUMBER": 5678901234,
      "EMAIL ADDRESS": "adam.j@example.com",
      BVN: 23456789012,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Unemployed",
      "SECTOR OF EMPLOYMENT": "Finance",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "adam.jones@quantumsolutions.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 100,
    },
    Socials: {
      TWITTER: "@adamjones",
      FACEBOOK: "Adam Jones",
      INSTAGRAM: "@adam_jones_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Peter White",
        "PHONE NUMBER": 6789012345,
        "EMAIL ADDRESS": "peterwhite@example.com",
        RELATIONSHIP: "Brother",
      },
      "Guarantor 2": {
        "FULL NAME": "Jane Adams",
        "PHONE NUMBER": 7890123456,
        "EMAIL ADDRESS": "janeadams@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },

  {
    L: "I",
    ORGANIZATION: "Tech Fusion",
    USERNAME: "emilyjames888",
    EMAIL: "emilyjames@example.com",
    "PHONE NUMBER": "09012345671",
    "DATE JOINED": "March 05, 2024 09:15 AM",
    STATUS: "Active",
    Summary: {
      name: "Emily James",
      key: "account011",
      balance: 1500.25,
      "account number": 2233445566,
      bank: "Metro Bank",
    },
    "Personal Information": {
      "FULL NAME": "Emily Anne James",
      "PHONE NUMBER": 3456789012,
      "EMAIL ADDRESS": "emily.a@example.com",
      BVN: 12345678901,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Education",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "emily.james@techfusion.com",
      "MONTHLY INCOME": "N501,000 - N1,000,000",
      "LOAN REPAYMENT": 300,
    },
    Socials: {
      TWITTER: "@emilyjames",
      FACEBOOK: "Emily James",
      INSTAGRAM: "@emily_james_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Robert Green",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "robertgreen@example.com",
        RELATIONSHIP: "Friend",
      },
      "Guarantor 2": {
        "FULL NAME": "Anna Brown",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "annabrown@example.com",
        RELATIONSHIP: "Sister",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Next Gen Solutions",
    USERNAME: "michaelclark555",
    EMAIL: "michaelclark@example.com",
    "PHONE NUMBER": "09123456782",
    "DATE JOINED": "March 12, 2024 11:45 AM",
    STATUS: "Pending",
    Summary: {
      name: "Michael Clark",
      key: "account012",
      balance: 3200.0,
      "account number": 5566778899,
      bank: "Future Bank",
    },
    "Personal Information": {
      "FULL NAME": "Michael Adam Clark",
      "PHONE NUMBER": 1234567890,
      "EMAIL ADDRESS": "michael.c@example.com",
      BVN: 23456789012,
      "MARITAL STATUS": "Married",
      CHILDREN: 1,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Self-Employed",
      "SECTOR OF EMPLOYMENT": "Finance",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "michael.clark@nextgensolutions.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 700,
    },
    Socials: {
      TWITTER: "@michaelclark",
      FACEBOOK: "Michael Clark",
      INSTAGRAM: "@michael_clark_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "George Smith",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "georgesmith@example.com",
        RELATIONSHIP: "Colleague",
      },
      "Guarantor 2": {
        "FULL NAME": "Julia White",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "juliawhite@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Future Tech Innovations",
    USERNAME: "sarahmiller999",
    EMAIL: "sarahmiller@example.com",
    "PHONE NUMBER": "08123456783",
    "DATE JOINED": "April 01, 2024 02:30 PM",
    STATUS: "Active",
    Summary: {
      name: "Sarah Miller",
      key: "account013",
      balance: 2400.8,
      "account number": 6677889900,
      bank: "National Bank",
    },
    "Personal Information": {
      "FULL NAME": "Sarah Jane Miller",
      "PHONE NUMBER": 9876543210,
      "EMAIL ADDRESS": "sarah.j@example.com",
      BVN: 34567890123,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Marketing",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "sarah.miller@futuretech.com",
      "MONTHLY INCOME": "N101,000 - N500,000",
      "LOAN REPAYMENT": 250,
    },
    Socials: {
      TWITTER: "@sarahmiller",
      FACEBOOK: "Sarah Miller",
      INSTAGRAM: "@sarah_miller_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Tom Green",
        "PHONE NUMBER": 6789012345,
        "EMAIL ADDRESS": "tomgreen@example.com",
        RELATIONSHIP: "Brother",
      },
      "Guarantor 2": {
        "FULL NAME": "Lily White",
        "PHONE NUMBER": 7890123456,
        "EMAIL ADDRESS": "lilywhite@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Digital Solutions",
    USERNAME: "benjaminmoore222",
    EMAIL: "benjaminmoore@example.com",
    "PHONE NUMBER": "09023456784",
    "DATE JOINED": "April 15, 2024 03:20 PM",
    STATUS: "Active",
    Summary: {
      name: "Benjamin Moore",
      key: "account014",
      balance: 5000.0,
      "account number": 3344556677,
      bank: "City Bank",
    },
    "Personal Information": {
      "FULL NAME": "Benjamin Ryan Moore",
      "PHONE NUMBER": 1234567890,
      "EMAIL ADDRESS": "benjamin.r@example.com",
      BVN: 45678901234,
      "MARITAL STATUS": "Married",
      CHILDREN: 2,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Self-Employed",
      "SECTOR OF EMPLOYMENT": "Consulting",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "benjamin.moore@digitalsolutions.com",
      "MONTHLY INCOME": "N101,000 - N500,000",
      "LOAN REPAYMENT": 800,
    },
    Socials: {
      TWITTER: "@benjaminmoore",
      FACEBOOK: "Benjamin Moore",
      INSTAGRAM: "@benjamin_moore_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Nancy Green",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "nancygreen@example.com",
        RELATIONSHIP: "Colleague",
      },
      "Guarantor 2": {
        "FULL NAME": "Robert Black",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "robertblack@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Advanced Tech Group",
    USERNAME: "lucywilliams333",
    EMAIL: "lucywilliams@example.com",
    "PHONE NUMBER": "08123456785",
    "DATE JOINED": "April 20, 2024 12:00 PM",
    STATUS: "Pending",
    Summary: {
      name: "Lucy Williams",
      key: "account015",
      balance: 3900.5,
      "account number": 9988776655,
      bank: "Global Bank",
    },
    "Personal Information": {
      "FULL NAME": "Lucy Anne Williams",
      "PHONE NUMBER": 8765432109,
      "EMAIL ADDRESS": "lucy.a@example.com",
      BVN: 56789012345,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "IT",
      "DURATION OF EMPLOYMENT": "3 - 5 years",
      "OFFICE EMAIL": "lucy.williams@advancedtech.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 450,
    },
    Socials: {
      TWITTER: "@lucywilliams",
      FACEBOOK: "Lucy Williams",
      INSTAGRAM: "@lucy_williams_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Martin Red",
        "PHONE NUMBER": 4567890123,
        "EMAIL ADDRESS": "martinred@example.com",
        RELATIONSHIP: "Cousin",
      },
      "Guarantor 2": {
        "FULL NAME": "Emma Stone",
        "PHONE NUMBER": 5678901234,
        "EMAIL ADDRESS": "emmastone@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Innovative Systems",
    USERNAME: "charlesadams444",
    EMAIL: "charlesadams@example.com",
    "PHONE NUMBER": "09012345676",
    "DATE JOINED": "April 25, 2024 10:30 AM",
    STATUS: "Active",
    Summary: {
      name: "Charles Adams",
      key: "account016",
      balance: 2900.0,
      "account number": 1122334455,
      bank: "Premier Bank",
    },
    "Personal Information": {
      "FULL NAME": "Charles David Adams",
      "PHONE NUMBER": 1234567890,
      "EMAIL ADDRESS": "charles.d@example.com",
      BVN: 67890123456,
      "MARITAL STATUS": "Married",
      CHILDREN: 3,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Healthcare",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "charles.adams@innovativesystems.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 500,
    },
    Socials: {
      TWITTER: "@charlesadams",
      FACEBOOK: "Charles Adams",
      INSTAGRAM: "@charles_adams_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Richard Brown",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "richardbrown@example.com",
        RELATIONSHIP: "Colleague",
      },
      "Guarantor 2": {
        "FULL NAME": "Jessica White",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "jessicawhite@example.com",
        RELATIONSHIP: "Sister",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Smart Solutions Inc.",
    USERNAME: "katherinelee111",
    EMAIL: "katherinelee@example.com",
    "PHONE NUMBER": "08123456789",
    "DATE JOINED": "May 01, 2024 09:00 AM",
    STATUS: "Pending",
    Summary: {
      name: "Katherine Lee",
      key: "account017",
      balance: 3700.75,
      "account number": 7766554433,
      bank: "Liberty Bank",
    },
    "Personal Information": {
      "FULL NAME": "Katherine Marie Lee",
      "PHONE NUMBER": 4987654321,
      "EMAIL ADDRESS": "katherine.m@example.com",
      BVN: 78901234567,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Unemployed",
      "SECTOR OF EMPLOYMENT": "Marketing",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "katherine.lee@smartsolutions.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 100,
    },
    Socials: {
      TWITTER: "@katherinelee",
      FACEBOOK: "Katherine Lee",
      INSTAGRAM: "@katherine_lee_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Simon King",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "simonking@example.com",
        RELATIONSHIP: "Brother",
      },
      "Guarantor 2": {
        "FULL NAME": "Rachel Green",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "rachelgreen@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Tech Edge Solutions",
    USERNAME: "andrewwhite888",
    EMAIL: "andrewwhite@example.com",
    "PHONE NUMBER": "09012345678",
    "DATE JOINED": "May 10, 2024 02:45 PM",
    STATUS: "Active",
    Summary: {
      name: "Andrew White",
      key: "account018",
      balance: 4100.0,
      "account number": 6655443322,
      bank: "Eagle Bank",
    },
    "Personal Information": {
      "FULL NAME": "Andrew Thomas White",
      "PHONE NUMBER": 1357924680,
      "EMAIL ADDRESS": "andrew.t@example.com",
      BVN: 89012345678,
      "MARITAL STATUS": "Married",
      CHILDREN: 1,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Engineering",
      "DURATION OF EMPLOYMENT": "3 - 5 years",
      "OFFICE EMAIL": "andrew.white@techedgesolutions.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 600,
    },
    Socials: {
      TWITTER: "@andrewwhite",
      FACEBOOK: "Andrew White",
      INSTAGRAM: "@andrew_white_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Gary Black",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "garyblack@example.com",
        RELATIONSHIP: "Colleague",
      },
      "Guarantor 2": {
        "FULL NAME": "Emily Brown",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "emilybrown@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Global Innovations",
    USERNAME: "oliviasmith777",
    EMAIL: "oliviasmith@example.com",
    "PHONE NUMBER": "08123456790",
    "DATE JOINED": "May 20, 2024 11:10 AM",
    STATUS: "Pending",
    Summary: {
      name: "Olivia Smith",
      key: "account019",
      balance: 5200.5,
      "account number": 1122334455,
      bank: "Summit Bank",
    },
    "Personal Information": {
      "FULL NAME": "Olivia Grace Smith",
      "PHONE NUMBER": 2143658790,
      "EMAIL ADDRESS": "olivia.g@example.com",
      BVN: 90123456789,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Unemployed",
      "SECTOR OF EMPLOYMENT": "Design",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "olivia.smith@globalinnovations.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 150,
    },
    Socials: {
      TWITTER: "@oliviasmith",
      FACEBOOK: "Olivia Smith",
      INSTAGRAM: "@olivia_smith_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "James Brown",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "jamesbrown@example.com",
        RELATIONSHIP: "Father",
      },
      "Guarantor 2": {
        "FULL NAME": "Sophia White",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "sophiawhite@example.com",
        RELATIONSHIP: "Sister",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Visionary Technologies",
    USERNAME: "emilyjohnson222",
    EMAIL: "emilyjohnson@example.com",
    "PHONE NUMBER": "07012345678",
    "DATE JOINED": "May 30, 2024 03:15 PM",
    STATUS: "Active",
    Summary: {
      name: "Emily Johnson",
      key: "account020",
      balance: 3100.25,
      "account number": 9988776655,
      bank: "Pinnacle Bank",
    },
    "Personal Information": {
      "FULL NAME": "Emily Rose Johnson",
      "PHONE NUMBER": 1234567891,
      "EMAIL ADDRESS": "emily.r@example.com",
      BVN: 91234567890,
      "MARITAL STATUS": "Married",
      CHILDREN: 2,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Finance",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "emily.johnson@visionarytech.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 350,
    },
    Socials: {
      TWITTER: "@emilyjohnson",
      FACEBOOK: "Emily Johnson",
      INSTAGRAM: "@emily_johnson_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "David Wilson",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "davidwilson@example.com",
        RELATIONSHIP: "Friend",
      },
      "Guarantor 2": {
        "FULL NAME": "Laura Taylor",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "laurataylor@example.com",
        RELATIONSHIP: "Colleague",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Dynamic Ventures",
    USERNAME: "davidmartin555",
    EMAIL: "davidmartin@example.com",
    "PHONE NUMBER": "08123456791",
    "DATE JOINED": "June 01, 2024 01:45 PM",
    STATUS: "Pending",
    Summary: {
      name: "David Martin",
      key: "account021",
      balance: 6000.0,
      "account number": 5544332211,
      bank: "Future Bank",
    },
    "Personal Information": {
      "FULL NAME": "David Michael Martin",
      "PHONE NUMBER": 1098765432,
      "EMAIL ADDRESS": "david.m@example.com",
      BVN: 12345678901,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Unemployed",
      "SECTOR OF EMPLOYMENT": "Consulting",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "david.martin@dynamicventures.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 200,
    },
    Socials: {
      TWITTER: "@davidmartin",
      FACEBOOK: "David Martin",
      INSTAGRAM: "@david_martin_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Tommy Lee",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "tommylee@example.com",
        RELATIONSHIP: "Cousin",
      },
      "Guarantor 2": {
        "FULL NAME": "Rachel Adams",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "racheladams@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Nexus Group",
    USERNAME: "michealclark777",
    EMAIL: "michealclark@example.com",
    "PHONE NUMBER": "09012345679",
    "DATE JOINED": "June 15, 2024 12:00 PM",
    STATUS: "Active",
    Summary: {
      name: "Micheal Clark",
      key: "account022",
      balance: 4800.0,
      "account number": 3344556677,
      bank: "Nexus Bank",
    },
    "Personal Information": {
      "FULL NAME": "Micheal Andrew Clark",
      "PHONE NUMBER": 2143658709,
      "EMAIL ADDRESS": "micheal.a@example.com",
      BVN: 23456789012,
      "MARITAL STATUS": "Married",
      CHILDREN: 1,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Telecommunications",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "micheal.clark@nexusgroup.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 400,
    },
    Socials: {
      TWITTER: "@michealclark",
      FACEBOOK: "Micheal Clark",
      INSTAGRAM: "@micheal_clark_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Linda Carter",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "lindacarter@example.com",
        RELATIONSHIP: "Friend",
      },
      "Guarantor 2": {
        "FULL NAME": "Kevin Harris",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "kevinharris@example.com",
        RELATIONSHIP: "Colleague",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Synergy Solutions",
    USERNAME: "jessicawilliams333",
    EMAIL: "jessicawilliams@example.com",
    "PHONE NUMBER": "08012345678",
    "DATE JOINED": "June 25, 2024 04:30 PM",
    STATUS: "Pending",
    Summary: {
      name: "Jessica Williams",
      key: "account023",
      balance: 3500.25,
      "account number": 5566778899,
      bank: "Alliance Bank",
    },
    "Personal Information": {
      "FULL NAME": "Jessica Anne Williams",
      "PHONE NUMBER": 1234567890,
      "EMAIL ADDRESS": "jessica.a@example.com",
      BVN: 34567890123,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Unemployed",
      "SECTOR OF EMPLOYMENT": "Art",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "jessica.williams@synergysolutions.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 100,
    },
    Socials: {
      TWITTER: "@jessicawilliams",
      FACEBOOK: "Jessica Williams",
      INSTAGRAM: "@jessica_williams_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Tom Brown",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "tombrown@example.com",
        RELATIONSHIP: "Colleague",
      },
      "Guarantor 2": {
        "FULL NAME": "Lily Adams",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "lilyadams@example.com",
        RELATIONSHIP: "Sister",
      },
    },
  },

  {
    L: "I",
    ORGANIZATION: "Innovation Labs",
    USERNAME: "sarahjames444",
    EMAIL: "sarahjames@example.com",
    "PHONE NUMBER": "07123456789",
    "DATE JOINED": "July 01, 2024 10:20 AM",
    STATUS: "Active",
    Summary: {
      name: "Sarah James",
      key: "account024",
      balance: 7200.5,
      "account number": 6677889900,
      bank: "Innovation Bank",
    },
    "Personal Information": {
      "FULL NAME": "Sarah Elizabeth James",
      "PHONE NUMBER": 3456789012,
      "EMAIL ADDRESS": "sarah.e.james@example.com",
      BVN: 98765432101,
      "MARITAL STATUS": "Married",
      CHILDREN: 3,
      "TYPE OF RESIDENCE": "Own House",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Degree",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Technology",
      "DURATION OF EMPLOYMENT": "1 - 2 years",
      "OFFICE EMAIL": "sarah.james@innovationlabs.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 500,
    },
    Socials: {
      TWITTER: "@sarahjames",
      FACEBOOK: "Sarah James",
      INSTAGRAM: "@sarahjames_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Michael Green",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "michaelgreen@example.com",
        RELATIONSHIP: "Friend",
      },
      "Guarantor 2": {
        "FULL NAME": "Anna White",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "annawhite@example.com",
        RELATIONSHIP: "Sister",
      },
    },
  },
  {
    L: "I",
    ORGANIZATION: "Global Solutions",
    USERNAME: "peterparker555",
    EMAIL: "peterparker@example.com",
    "PHONE NUMBER": "08098765432",
    "DATE JOINED": "July 15, 2024 09:10 AM",
    STATUS: "Pending",
    Summary: {
      name: "Peter Parker",
      key: "account025",
      balance: 8500.75,
      "account number": 1122334455,
      bank: "Global Bank",
    },
    "Personal Information": {
      "FULL NAME": "Peter Benjamin Parker",
      "PHONE NUMBER": 5678901234,
      "EMAIL ADDRESS": "peter.b.parker@example.com",
      BVN: 67890123456,
      "MARITAL STATUS": "Single",
      CHILDREN: 0,
      "TYPE OF RESIDENCE": "Renting",
    },
    "Education and Employment": {
      "LEVEL OF EDUCATION": "Masters",
      "EMPLOYMENT STATUS": "Employed",
      "SECTOR OF EMPLOYMENT": "Media",
      "DURATION OF EMPLOYMENT": "3 - 5 years",
      "OFFICE EMAIL": "peter.parker@globalsolutions.com",
      "MONTHLY INCOME": "N50,000 - N100,000",
      "LOAN REPAYMENT": 600,
    },
    Socials: {
      TWITTER: "@peterparker",
      FACEBOOK: "Peter Parker",
      INSTAGRAM: "@peter_parker_official",
    },
    Guarantor: {
      "Guarantor 1": {
        "FULL NAME": "Mary Jane",
        "PHONE NUMBER": 2345678901,
        "EMAIL ADDRESS": "maryjane@example.com",
        RELATIONSHIP: "Girlfriend",
      },
      "Guarantor 2": {
        "FULL NAME": "Harry Osborn",
        "PHONE NUMBER": 3456789012,
        "EMAIL ADDRESS": "harryosborn@example.com",
        RELATIONSHIP: "Friend",
      },
    },
  },
];
