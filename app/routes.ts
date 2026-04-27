import { type RouteConfig, index, route, layout, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("bot/invite", "routes/bot/invite.tsx"),
    route("*", "routes/$.tsx"),
] satisfies RouteConfig;