import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { default as exampleController } from './controllers/example.controller'

const createApp = () => {
  const app = new Hono();

  app.use("*", cors());
  app.use("*", logger());

  app.route('/api', exampleController)

  return app;
};

export default createApp;
