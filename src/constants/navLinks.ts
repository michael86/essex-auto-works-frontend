export type NavLinks = {
  [key: string]: {
    to: string;
    text: string;
    role: "admin" | "staff";
  }[];
};

export const navLinks: NavLinks = {
  pages: [
    {
      to: "/dashboard",
      text: "Dashboard",
      role: "staff",
    },
  ],
  invoices: [
    { to: "/invoices/generate", text: "Generate", role: "admin" },
    { to: "/invoices/view", text: "View", role: "staff" },
  ],
  customers: [
    { to: "/customers/add", text: "add", role: "admin" },
    { to: "/customers/manage", text: "manage", role: "staff" },
  ],
  users: [
    { to: "/users/manage", text: "Manage", role: "admin" },
    { to: "/users/add", text: "Add", role: "admin" },
  ],
};
