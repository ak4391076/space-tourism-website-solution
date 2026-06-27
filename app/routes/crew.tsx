import { useState } from "react";
import { Tabs } from "@base-ui/react/tabs";

import type { Route } from "./+types/crew";
import { META } from "~/constants";
import Text from "~/components/text";
import { crew } from "~/data.json";
import PageTitle from "~/components/page-title";

export function meta({}: Route.MetaArgs) {
  return [{ title: META.CREW.title }];
}

export const Crew = () => {
  const [crewState, setCrewState] = useState(crew[0]);

  return (
    <main className="flex flex-col grow p-6 md:p-10 lg:py-12 lg:px-41.25">
      <div className="flex flex-col grow gap-6">
        <div className="flex justify-center md:justify-start">
          <PageTitle number="02" title="Meet your crew" />
        </div>
        <div className="flex flex-col grow">
          <div className="flex flex-col gap-8 lg:flex-row lg:h-183.5">
            <div className="flex flex-col pt-10 lg:pt-0">
              <Tabs.Root
                className="flex flex-col gap-6 lg:grow"
                value={crewState.name}
                onValueChange={(value) =>
                  setCrewState(
                    crew.find((member) => member.name === value) || crew[0],
                  )
                }
              >
                <div className="flex justify-center lg:grow lg:items-center">
                  {crew.map((member) => (
                    <Tabs.Panel
                      key={member.name}
                      className="flex flex-col gap-6 text-center md:max-w-lg lg:max-w-134.75 lg:text-left [[hidden]]:hidden"
                      value={member.name}
                    >
                      <div className="flex flex-col gap-2 md:gap-4">
                        <Text
                          className="opacity-50 uppercase"
                          mobile="preset-4"
                          tablet="preset-4"
                          desktop="preset-4"
                        >
                          {member.role}
                        </Text>
                        <Text
                          className="uppercase"
                          mobile="preset-3"
                          tablet="preset-3"
                          desktop="preset-3"
                        >
                          {member.name}
                        </Text>
                      </div>
                      <div className="min-h-41 md:min-h-29 lg:min-h-32">
                        <Text
                          mobile="preset-9"
                          tablet="preset-9"
                          desktop="preset-9"
                          color="blue-300"
                        >
                          {member.bio}
                        </Text>
                      </div>
                    </Tabs.Panel>
                  ))}
                </div>
                <Tabs.List className="relative flex justify-center gap-4 lg:gap-10 lg:justify-start lg:mb-12 lg:shrink">
                  {crew.map((member) => (
                    <Tabs.Tab
                      key={member.name}
                      className="flex h-2.5 w-2.5 lg:h-3.75 lg:w-3.75 items-center justify-center rounded-full select-none bg-white data-active:opacity-100 hover:data-active:opacity-100 not-data-selected:opacity-10 hover:not-data-selected:opacity-50 cursor-pointer"
                      value={member.name}
                    >
                      &nbsp;
                    </Tabs.Tab>
                  ))}
                </Tabs.List>
              </Tabs.Root>
            </div>
            <div className="flex justify-center lg:items-center">
              <picture className="h-auto max-w-3xs md:max-w-md lg:max-w-134.75 md:-mb-10 lg:mb-0 mask-alpha mask-b-from-77% mask-b-from-[#d9d9d9] mask-b-to-100%">
                <source srcSet={crewState.images.png} />
                <img
                  className=""
                  src={crewState.images.webp}
                  alt={crewState.name}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Crew;
