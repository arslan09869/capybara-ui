import { HeaderPro } from "@/components/landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <span className="hidden md:inline-flex items-center md:text-xl text-lg font-bold tracking-tight text-black dark:text-white">
          Capybara UI
        </span>
      </div>
    ),
  },
  links: [
    {
      text: "Pricing",
      url: "/pricing",
    },

    {
      type: "custom",
      children: <HeaderPro />,
    },
  ],
};
