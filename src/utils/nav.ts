import { navLinks, type NavLinks } from "@/constants/navLinks";

export const generateNavLinks = (role: "admin" | "staff") => {
  const links: NavLinks = {};
  for (const group of Object.entries(navLinks)) {
    for (const link of group[1]) {
      if (role === link.role || role === "admin") {
        if (links[group[0]] === undefined) links[group[0]] = [];
        links[group[0]].push(link);
      }
    }
  }

  return links;
};
