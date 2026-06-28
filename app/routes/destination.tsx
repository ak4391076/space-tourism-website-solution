import { Separator } from "@base-ui/react/separator";
import { Tabs } from "@base-ui/react/tabs";

import Text from "~/components/text";
import type { Route } from "./+types/destination";

import { destinations } from "~/data.json";
import { META } from "~/constants";
import { useState } from "react";
import PageTitle from "~/components/page-title";

export function meta({}: Route.MetaArgs) {
  return [{ title: META.DESTINATION.title }];
}

export const Destination = () => {
  const [destinationState, setDestinationState] = useState(destinations[0]);

  return (
    <main className="flex flex-col grow p-6 md:p-10 lg:py-12 lg:px-41.25">
      <div className="flex flex-col grow gap-8">
        <div className="flex justify-center md:justify-start">
          <PageTitle number="01" title="Pick your destination" />
        </div>
        <div className="flex flex-col grow">
          <div className="flex flex-col gap-8 lg:flex-row lg:h-183.5">
            <div className="flex justify-center lg:items-center lg:grow lg:max-w-[50%]">
              <picture>
                <source
                  srcSet={`${import.meta.env.BASE_URL}${destinationState.images.webp}`}
                />
                <img
                  className="h-auto max-w-37.5 md:max-w-75 lg:max-w-full my-6.5 md:my-10.5"
                  src={`${import.meta.env.BASE_URL}${destinationState.images.png}`}
                  alt=""
                />
              </picture>
            </div>
            <div className="flex flex-col pt-10 lg:pt-0 lg:justify-center lg:grow lg:max-w-[50%]">
              <Tabs.Root
                className="flex flex-col gap-6"
                value={destinationState.name}
                onValueChange={(value) =>
                  setDestinationState(
                    destinations.find(
                      (destination) => destination.name === value,
                    ) || destinations[0],
                  )
                }
              >
                <Tabs.List className="relative flex justify-center gap-8 lg:justify-start">
                  {destinations.map((destination) => (
                    <Tabs.Tab
                      key={destination.name}
                      className="flex h-8 items-start justify-center text-blue-300 font-barlow-condensed text-[0.875rem] leading-[normal] tracking-[15%] uppercase select-none border-b-3 border-transparent hover:not-data-selected:border-white/50 hover:not-data-selected:text-white data-active:text-white data-active:border-white hover:data-active:border-white cursor-pointer"
                      value={destination.name}
                    >
                      {destination.name}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
                <div className="md:flex md:justify-center lg:block">
                  {destinations.map((destination) => (
                    <Tabs.Panel
                      key={destination.name}
                      className="flex flex-col gap-6 md:max-w-128.5 lg:max-w-111.25 [[hidden]]:hidden"
                      value={destination.name}
                    >
                      <div className="flex flex-col gap-4 items-center lg:items-start">
                        <Text
                          className="uppercase"
                          mobile="preset-2"
                          tablet="preset-2"
                          desktop="preset-2"
                        >
                          {destination.name}
                        </Text>
                        <Text
                          className="text-center lg:text-start"
                          mobile="preset-9"
                          tablet="preset-9"
                          desktop="preset-9"
                        >
                          {destination.description}
                        </Text>
                      </div>
                      <Separator className="h-px bg-[#979797]/25" />
                      <div className="flex flex-col gap-6 md:flex-row md:justify-around lg:justify-start">
                        <div className="flex flex-col gap-3 items-center lg:items-start">
                          <Text
                            className="uppercase"
                            mobile="preset-7-from-desktop"
                            color="blue-300"
                          >
                            Avg. distance
                          </Text>
                          <Text
                            className="uppercase"
                            mobile="preset-6-from-desktop"
                          >
                            {destination.distance}
                          </Text>
                        </div>
                        <div className="flex flex-col gap-3 items-center lg:items-start">
                          <Text
                            className="uppercase"
                            mobile="preset-7-from-desktop"
                            color="blue-300"
                          >
                            Est. travel time
                          </Text>
                          <Text
                            className="uppercase"
                            mobile="preset-6-from-desktop"
                          >
                            {destination.travel}
                          </Text>
                        </div>
                      </div>
                    </Tabs.Panel>
                  ))}
                </div>
              </Tabs.Root>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
