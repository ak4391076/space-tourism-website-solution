import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu";
import type { Dispatch, SetStateAction } from "react";

import NavigationMenuNavLink from "~/components/navigation-menu-nav-link";
import Text from "~/components/text";
import { ROUTES } from "~/constants";

const { HOME, DESTINATION, CREW, TECHNOLOGY } = ROUTES;

type NavigationMenuSmProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const NavigationMenuSm = ({ setOpen }: NavigationMenuSmProps) => (
  <NavigationMenuPrimitive.Root orientation="vertical">
    <NavigationMenuPrimitive.List className="flex flex-col gap-8 uppercase">
      <NavigationMenuPrimitive.Item className="h-full">
        <NavigationMenuNavLink to={HOME} onClick={() => setOpen(false)}>
          <Text as="span" mobile="preset-8-bold-from-desktop">
            00
          </Text>
          <Text as="span" mobile="preset-8-from-desktop">
            Home
          </Text>
        </NavigationMenuNavLink>
      </NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Item className="h-full">
        <NavigationMenuNavLink to={DESTINATION} onClick={() => setOpen(false)}>
          <Text as="span" mobile="preset-8-bold-from-desktop">
            01
          </Text>{" "}
          <Text as="span" mobile="preset-8-from-desktop">
            Destination
          </Text>
        </NavigationMenuNavLink>
      </NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Item className="h-full">
        <NavigationMenuNavLink to={CREW} onClick={() => setOpen(false)}>
          <Text as="span" mobile="preset-8-bold-from-desktop">
            02
          </Text>{" "}
          <Text as="span" mobile="preset-8-from-desktop">
            Crew
          </Text>
        </NavigationMenuNavLink>
      </NavigationMenuPrimitive.Item>
      <NavigationMenuPrimitive.Item className="h-full">
        <NavigationMenuNavLink to={TECHNOLOGY} onClick={() => setOpen(false)}>
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

export default NavigationMenuSm;
