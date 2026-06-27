import { NavLink, type NavLinkProps } from "react-router";
import { NavigationMenu } from "@base-ui/react/navigation-menu";

import { cn } from "~/utils";

const NavigationMenuNavLink = ({ className, ...props }: NavLinkProps) => {
  return (
    <NavigationMenu.Link
      render={
        <NavLink
          className={({ isActive }) =>
            cn(
              className,
              "flex gap-3 md:gap-2 h-full items-center md:border-y-3 md:border-r-0 border-r-3 border-transparent transition-colors",
              isActive
                ? "md:border-b-white border-r-white"
                : "md:hover:border-b-white/50 hover:border-r-white/50",
            )
          }
          {...props}
        />
      }
    />
  );
};

export default NavigationMenuNavLink;
