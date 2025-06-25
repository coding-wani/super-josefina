const defaults = {
  companyName: "Your Company Name",
};

export const config = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || defaults.companyName,
} as const;
