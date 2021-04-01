import { Engine, Render, World, Bodies } from "matter-js";

const engine = Engine.create();
const render = Render.create({
  element: document.body,
  engine,
});

World.add(engine.world, [
  Bodies.rectangle(400, 200, 80, 80),
  Bodies.rectangle(450, 50, 80, 80),
  Bodies.rectangle(400, 610, 810, 60, { isStatic: true }),
]);

Engine.run(engine);
Render.run(render);
