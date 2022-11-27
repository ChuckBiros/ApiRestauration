import { Aliment } from "../models/aliments";


export class ControllerALiment {

  public async getAliments(rep, res) {
    let listeAliments = await Aliment.getAllAliments();
    res.send(listeAliments);
  }

  public async getOneAliment(req, res) {
    let alimentId: string = req.params.id;
    let listeAliments = await Aliment.getOneAliment(alimentId);
    res.send(listeAliments)
  }

  private static verifierAcces(req) {
    if (req.authorization == true) {
      return true;
    }
    return false;
  }

  public async insertAliment(req, res) {
    console.log(req);
    await Aliment.insertAliment(req.body);
    res.status(201);
    res.send();
  }

  public async updateAliment(req, res) {
    await Aliment.updateAliment(req.params.id, req.body);
    res.status(201);
    res.send();
  }

  public async deleteAliment(req, res) {
    await Aliment.deleteAliment(req.params.id);
    res.status(204);
    res.send();
  }
}