import { Hono } from "hono";
import { z } from "zod";
import { default as exampleUsecase } from "../../application/usecases/example.usecase";
import { default as examplePresenter } from "../presenters/example.presenter";

const app = new Hono();

app.get("/example", async (c) => {
  return c.json(
    examplePresenter(
      exampleUsecase(z.string().default("World").parse(c.req.query("name")))
    )
  );
});

export default app;
