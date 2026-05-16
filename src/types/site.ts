export type Service = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export type PortfolioProject = {
  title: string;
  description: string;
  category: "Web" | "Automation" | "SaaS" | "Commerce";
  image: string;
  tech: string[];
  live: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};
