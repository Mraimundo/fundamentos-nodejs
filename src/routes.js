import { randomUUID } from "node:crypto";
import { Database } from "./middlewares/database.js";
import { buildRoutePath } from "./utils/build-route-path.js";
const database = new Database();

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (_, res) => {
      const users = database.select("users");
      return res
        .setHeader("Content-type", "application/json")
        .end(JSON.stringify(users));
    },
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (_, res) => {
      const user = {
        id: randomUUID(),
        name: "John Doe",
        email: "exemple@gmail.com",
      };

      database.insert("users", user);

      return res.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users:id"),
    handler: (_, res) => {
      return res.end();
    },
  },
];
