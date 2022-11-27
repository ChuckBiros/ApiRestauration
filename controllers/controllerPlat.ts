import { Plat } from "../models/plats";

export class ControllerPlat {
  public async getPlats(rep, res) {
    let listePlats = await Plat.getAllPlats();
    res.send(listePlats);
  }

  public async getOnePlat(req, res) {
    let platId: string = req.params.id;
    let listePlats = await Plat.getOnePlat(platId);
    res.send(listePlats);
  }

  public async insertPlat(req, res) {
    await Plat.insertPlat(req.body);
    res.status(201);
    res.send();
  }

  public async updatePlat(req, res) {
    await Plat.updatePlat(req.params.id, req.body);
    res.status(201);
    res.send();
  }

  public async deletePlat(req, res) {
    await Plat.deletePlat(req.params.id);
    res.status(204);
    res.send();
  }
}
