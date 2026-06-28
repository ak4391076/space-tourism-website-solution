import { Button } from "@base-ui/react/button";
import { Separator } from "@base-ui/react/separator";
import { Link, Outlet, useLocation } from "react-router";
import Drawer from "~/components/drawer";
import Logo from "~/components/logo";

import NavigationMenu from "~/components/navigation-menu";
import { ROUTES } from "~/constants";

const { HOME, DESTINATION, CREW, TECHNOLOGY } = ROUTES;

const backgrounds: Record<string, string> = {
  [HOME]:
    "bg-(image:--bg-home-mobile) md:bg-(image:--bg-home-tablet) lg:bg-(image:--bg-home-desktop)",
  [DESTINATION]:
    "bg-(image:--bg-destination-mobile) md:bg-(image:--bg-destination-tablet) lg:bg-(image:--bg-destination-desktop)",
  [CREW]:
    "bg-(image:--bg-crew-mobile) md:bg-(image:--bg-crew-tablet) lg:bg-(image:--bg-crew-desktop)",
  [TECHNOLOGY]:
    "bg-(image:--bg-technology-mobile) md:bg-(image:--bg-technology-tablet) lg:bg-(image:--bg-technology-desktop)",
};

export const Layout = () => {
  const location = useLocation();

  const background = backgrounds[location.pathname] || backgrounds[HOME];

  return (
    <div
      className={`flex flex-col min-h-screen min-h-dvh bg-blue-900 bg-center bg-no-repeat bg-fixed bg-cover ${background}`}
    >
      <header className="flex items-center justify-between p-6 md:p-0 md:pl-10 lg:mt-10 lg:pl-16">
        <Link to={HOME}>
          <Logo />
        </Link>
        <Separator className="hidden lg:block grow h-px bg-[#979797]/25 translate-x-8 z-10" />
        <NavigationMenu />
        <Drawer
          render={
            <Button className="md:hidden">
              <img
                src={`${import.meta.env.BASE_URL}assets/shared/icon-hamburger.svg`}
                alt="Hamburger icon to open navigation menu"
              />
            </Button>
          }
        />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
