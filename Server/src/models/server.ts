import express, { Application, Request, Response } from "express";
import cors from "cors";
import routesStu from "../routes/student";
import db from "../db/connection";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.midlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Aplicacion Corriendo en el puerto ${this.port}`);
    });
  }
  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        msg: "API Working",
      });
    });
    this.app.use("/api/students", routesStu);
  }

  midlewares() {
    this.app.use(express.json());

    this.app.use(cors());
  }

  async dbConnect() {
    await db.authenticate();
    console.log("te conectaste a la verga");
  }
}

export default Server;
