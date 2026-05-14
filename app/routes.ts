import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    ...prefix("bot", [
        route("invite", "routes/bot/invite.tsx"),
        route("github", "routes/bot/github.tsx"),
        route("docs", "routes/comingSoon/comingSoon.tsx"),
    ]),
    route("discord", "routes/discord/discordInvite.tsx"),
    route("*", "routes/$.tsx"),
] satisfies RouteConfig;