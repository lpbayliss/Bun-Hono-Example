import createApp from "./infrastructure/app";

const app = createApp()

export default {
    port: 3000,
    host: '0.0.0.0',
    fetch: app.fetch
}