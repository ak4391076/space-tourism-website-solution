import { META } from "~/constants";
import type { Route } from "./+types/technology";
import { useState } from "react";
import { technology } from "~/data.json";
import Text from "~/components/text";
import { Tabs } from "@base-ui/react/tabs";
import PageTitle from "~/components/page-title";

export function meta({}: Route.MetaArgs) {
  return [{ title: META.TECHNOLOGY.title }];
}

export const Technology = () => {
  const [technologyState, setTechnologyState] = useState(technology[0]);

  return (
    <main className="flex flex-col grow p-6 pb-12 md:p-10 lg:px-0 lg:pl-41.25 lg:py-12">
      <div className="flex flex-col grow gap-6">
        <div className="flex justify-center md:justify-start">
          <PageTitle number="03" title="Space launch 101" />
        </div>
        <div className="flex flex-col grow lg:justify-center">
          <div className="flex flex-col gap-8 lg:flex-row-reverse">
            <div className="pt-16 lg:pt-0">
              <img
                className="block lg:hidden h-64.5 md:h-89.5 -mx-6 md:-mx-10 max-w-none w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] object-cover"
                src={`${import.meta.env.BASE_URL}${technologyState.images.landscape}`}
                alt={technologyState.name}
              />
              <img
                className="hidden lg:block h-150 max-w-full"
                src={`${import.meta.env.BASE_URL}${technologyState.images.portrait}`}
                alt={technologyState.name}
              />
            </div>
            <Tabs.Root
              className="flex flex-col gap-10 lg:flex-row lg:gap-16"
              value={technologyState.name}
              onValueChange={(value) =>
                setTechnologyState(
                  technology.find((item) => item.name === value) ||
                    technology[0],
                )
              }
              orientation="vertical"
            >
              <Tabs.List className="relative flex justify-center gap-4 lg:flex-col lg:gap-8">
                {technology.map((item, index) => (
                  <Tabs.Tab
                    key={item.name}
                    className="flex h-10 w-10 md:h-14 md:w-14 lg:h-20 lg:w-20 items-center justify-center rounded-full select-none font-belle-fair text-[1.125rem] md:text-[1.5rem] lg:text-[2rem] leading-[normal] tracking-normal bg-white data-active:text-blue-900 data-active:bg-white hover:data-active:bg-white not-data-selected:bg-transparent not-data-selected:border not-data-selected:border-white/25 not-data-selected:text-white hover:not-data-selected:bg-transparent hover:not-data-selected:border-white cursor-pointer"
                    value={item.name}
                  >
                    {index + 1}
                  </Tabs.Tab>
                ))}
              </Tabs.List>
              <div className="flex justify-center">
                {technology.map((item) => (
                  <Tabs.Panel
                    key={item.name}
                    className="flex flex-col gap-4 lg:gap-6 text-center md:max-w-lg lg:text-left lg:justify-center [[hidden]]:hidden"
                    value={item.name}
                  >
                    <div className="flex flex-col gap-4">
                      <Text
                        className="opacity-50 uppercase"
                        mobile="preset-4"
                        tablet="preset-4"
                        desktop="preset-4"
                      >
                        The terminology...
                      </Text>
                      <Text
                        className="uppercase"
                        mobile="preset-3"
                        tablet="preset-3"
                        desktop="preset-3"
                      >
                        {item.name}
                      </Text>
                    </div>
                    <Text
                      mobile="preset-9"
                      tablet="preset-9"
                      desktop="preset-9"
                      color="blue-300"
                    >
                      {item.description}
                    </Text>
                  </Tabs.Panel>
                ))}
              </div>
            </Tabs.Root>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Technology;
