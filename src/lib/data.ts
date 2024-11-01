export interface DataType {
  icon: string;
  customer: string;
}

export interface DataTypeB {
  icon: string;
  business: string;
}

export interface DataTypeS {
  icon: string;
  setting: string;
}

export const arrayCustomers: Array<DataType> = [
  {
    icon: "icon-users.svg",
    customer: "Users",
  },
  {
    icon: "icon-guarantors.svg",
    customer: "Guarantors",
  },
  {
    icon: "icon-loans.svg",
    customer: "Loans",
  },
  {
    icon: "icon-decision-models.svg",
    customer: "Decision Models",
  },
  {
    icon: "icon-savings.svg",
    customer: "Savings",
  },
  {
    icon: "icon-loan-requests.svg",
    customer: "Loan Requests",
  },
  {
    icon: "icon-whitelist.svg",
    customer: "Whitelist",
  },
  {
    icon: "icon-karma.svg",
    customer: "Karma",
  },
];

export const arrayBusinesses: Array<DataTypeB> = [
  {
    icon: "icon-organization.svg",
    business: "Organization",
  },
  {
    icon: "icon-loan-products.svg",
    business: "Loan Products",
  },
  {
    icon: "icon-savings-products.svg",
    business: "Savings Products",
  },
  {
    icon: "icon-fees-and-charges.svg",
    business: "Fees and Charges",
  },
  {
    icon: "icon-transactions.svg",
    business: "Transactions",
  },
  {
    icon: "icon-services.svg",
    business: "Services",
  },
  {
    icon: "icon-service-account.svg",
    business: "Service Account",
  },
  {
    icon: "icon-settlements.svg",
    business: "Settlements",
  },
  {
    icon: "icon-reports.svg",
    business: "Reports",
  },
];

export const arraySettings: Array<DataTypeS> = [
  {
    icon: "icon-peferences.svg",
    setting: "Preferences",
  },
  {
    icon: "icon-fees-and-pricing.svg",
    setting: "Fees and Pricing",
  },
  {
    icon: "icon-audit-logs.svg",
    setting: "Audit Logs",
  },
];
