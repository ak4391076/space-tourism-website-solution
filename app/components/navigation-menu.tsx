import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";

import NavigationMenuNavLink from "~/components/navigation-menu-nav-link";
import Text from "~/components/text";
import { ROUTES } from "~/constants";

const { HOME, DESTINATION, CREW, TECHNOLOGY } = ROUTES;

const NavigationMenu = () => (
  <NavigationMenuPrimitive.Root className="hidden md:flex grow justify-end bg-white/5 backdrop-blur-[80px] h-24 md:px-10 lg:px-16 md:max-w-160 lg:max-w-184">
    <NavigationMenuPrimitive.List className="flex gap-12 items-center uppercase">
      <NavigationMenuPrimitive.Item className="h-full">
        <NavigationMenuNavLink to={HOME}>
          <Text as="span" mobile="preset-8-bold-from-desktop">
            00
          </Text>
          <Text as="span" mobile="preset-8-from-desktop">
            Home
          </Text>
        </NavigationMenuNavLink>
      </NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Item className="h-full">
        <NavigationMenuNavLink to={DESTINATION}>
          <Text as="span" mobile="preset-8-bold-from-desktop">
            01
          </Text>{" "}
          <Text as="span" mobile="preset-8-from-desktop">
            Destination
          </Text>
        </NavigationMenuNavLink>
      </NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Item className="h-full">
        <NavigationMenuNavLink to={CREW}>
          <Text as="span" mobile="preset-8-bold-from-desktop">
            02
          </Text>{" "}
          <Text as="span" mobile="preset-8-from-desktop">
            Crew
          </Text>
        </NavigationMenuNavLink>
      </NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Item className="h-full">
        <NavigationMenuNavLink to={TECHNOLOGY}>
          <Text as="span" mobile="preset-8-bold-from-desktop">
            03
          </Text>{" "}
          <Text as="span" mobile="preset-8-from-desktop">
            Technology
          </Text>
        </NavigationMenuNavLink>
      </NavigationMenuPrimitive.Item>
    </NavigationMenuPrimitive.List>
  </NavigationMenuPrimitive.Root>
);

export default NavigationMenu;
