import { siteConfig } from "../config/site";
export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description: string;
  url?: string;
  ogImage?: string;
  mainNav: MainNavItem[];
  links: {
    twitter: string;
    github: string;
    docs: string;
  };
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};
