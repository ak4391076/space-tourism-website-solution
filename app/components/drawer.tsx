import { useState } from "react";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";

import NavigationMenuSm from "~/components/navigation-menu-sm";

const Drawer = (props: DrawerPrimitive.Trigger.Props) => {
  const [open, setOpen] = useState(false);

  return (
    <DrawerPrimitive.Root
      swipeDirection="right"
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerPrimitive.Trigger className="select-none" {...props} />
      <DrawerPrimitive.Portal className="md:hidden">
        <DrawerPrimitive.Viewport className="[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem] fixed inset-0 flex items-stretch justify-end p-(--viewport-padding)">
          <DrawerPrimitive.Popup className="[--bleed:3rem] supports-[-webkit-touch-callout:none]:[--bleed:0px] h-full w-[calc(20rem+3rem)] max-w-[calc(100vw-3rem+3rem)] -mr-[3rem] py-8 pl-8 pr-12 backdrop-blur-[80px] bg-[#0B0D17]/15 outline-none overflow-y-auto overscroll-contain touch-auto [transform:translateX(var(--drawer-swipe-movement-x))] transition-transform duration-[450ms] ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:select-none data-ending-style:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-starting-style:[transform:translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-3rem)] supports-[-webkit-touch-callout:none]:border supports-[-webkit-touch-callout:none]:pr-6">
            <DrawerPrimitive.Content className="mx-auto w-full max-w-[32rem]">
              <div className="flex justify-end pr-6 mb-20">
                <DrawerPrimitive.Close className="select-none">
                  <img src="/assets/shared/icon-close.svg" alt="Close menu" />
                </DrawerPrimitive.Close>
              </div>
              <NavigationMenuSm setOpen={setOpen} />
            </DrawerPrimitive.Content>
          </DrawerPrimitive.Popup>
        </DrawerPrimitive.Viewport>
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  );
};

export default Drawer;
