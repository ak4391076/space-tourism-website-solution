import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

import { ROUTES } from "./constants";

const { DESTINATION, CREW, TECHNOLOGY } = ROUTES;

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route(DESTINATION, "routes/destination.tsx"),
    route(CREW, "routes/crew.tsx"),
    route(TECHNOLOGY, "routes/technology.tsx"),
  ]),
] satisfies RouteConfig;
