import { Link } from "react-router";
import type { Route } from "./+types/home";

import Text from "~/components/text";
import { META, ROUTES } from "~/constants";

const { DESTINATION } = ROUTES;

export function meta({}: Route.MetaArgs) {
  return [{ title: META.HOME.title }];
}

export const Home = () => {
  return (
    <main className="flex flex-col grow p-6 md:px-10 md:py-32 md:items-center lg:flex-row lg:justify-center lg:items-end">
      <div className="flex flex-col grow lg:flex-row lg:justify-between lg:items-center lg:max-w-[80%]">
        <section className="flex flex-col gap-6 items-center md:max-w-lg lg:items-start lg:max-w-135">
          <Text
            as="h1"
            className="flex flex-col gap-6 items-center lg:items-start uppercase"
          >
            <Text
              as="div"
              mobile="preset-6"
              tablet="preset-5-from-desktop"
              color="blue-300"
            >
              so, you want to travel to
            </Text>
            <Text as="div" mobile="preset-1" tablet="preset-1">
              space
            </Text>
          </Text>
          <Text
            className="text-center lg:text-start"
            mobile="preset-9"
            tablet="preset-9"
            desktop="preset-9"
            color="blue-300"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Text>
        </section>
        <div className="flex flex-col grow items-center justify-center md:justify-end md:max-w-lg lg:items-end lg:max-w-135">
          <Link
            to={DESTINATION}
            className="flex items-center justify-center bg-white h-36 w-36 md:h-68 md:w-68 rounded-full outline-white/10 transition-[outline-width] duration-200 ease-out hover:outline-96"
          >
            <Text
              as="span"
              className="uppercase"
              mobile="preset-4"
              tablet="preset-4-from-desktop"
              desktop="preset-4"
              color="blue-900"
            >
              Explore
            </Text>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
