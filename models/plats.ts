import mongoose, { Schema } from "mongoose";

const platSchema = new Schema({
  nom: String,
  type: String,
  quantite: String,
  aliments: [{ id: String, quantite: String }],
  prix: Number,
  description: String,
  image: String,
});

const PlatModel = mongoose.model("Plat", platSchema);

export class Plat {
  public static async getAllPlats(): Promise<Plat[]> {
    return new Promise(async (resolve) => {
      let listePlats: Plat[] = await PlatModel.find();
      resolve(listePlats);
    });
  }

  public static async getPlatsById(body: { type: string }): Promise<any> {
    return new Promise(async (resolve) => {
      let listeTypePlats: any[] = await PlatModel.find({ type: body.type });
      return listeTypePlats;
    });
  }

  public static async getOnePlat(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await PlatModel.findOne({ _id: id }));
    });
  }

  public static async insertPlat(body: {
    nom: String;
    type: String;
    prix: number;
    description: String;
    quantite: String;
    aliments: [{ id: String; quantite: String }];
    image: String;
  }) {
    const plat = new PlatModel({
      nom: body.nom,
      type: body.type,
      prix: body.prix,
      description: body.description,
      image: body.image,
      aliments: body.aliments,
      quantite: body.quantite,
    });

    return await plat.save();
  }

  public static async updatePlat(
    id: string,
    body: {
      nom: string;
      type: string;
      quantite: number;
      prix: number;
      aliments: [{ id: String; quantite: String }];
    }
  ): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(
        await PlatModel.findOneAndUpdate(
          { _id: id },
          {
            nom: body.nom,
            type: body.type,
            quantite: body.quantite,
            prix: body.prix,
            description: body.prix,
            image: body.prix,
            aliments: body.aliments,
          }
        )
      );
    });
  }

  public static async deletePlat(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await PlatModel.findByIdAndDelete({ _id: id }));
    });
  }
}
