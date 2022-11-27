import mongoose, { Schema } from "mongoose";

const alimentSchema = new Schema({
  nom: String,
  type: String,
  quantite: String,
  date: { type: Date, default: Date.now },
  image: String,
});

const AlimentModel = mongoose.model("Aliments", alimentSchema);

export class Aliment {
  public static async getAllAliments(): Promise<any> {
    return new Promise(async (resolve) => {
      let listeAliments: any[] = await AlimentModel.find();
      resolve(listeAliments);
    });
  }

  public static async getOneAliment(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.findOne({ _id: id }));
    });
  }

  public static async insertAliment(body: {
    nom: string;
    type: string;
    quantite: number;
    image: string;
  }) {
    const aliment = new AlimentModel({
      nom: body.nom,
      type: body.type,
      quantite: body.quantite,
      date: new Date(),
      image:
        "https://frenchvadrouilleur.fr/data/images/aucun.jpg",
    });

    return aliment.save();
  }

  public static async updateAliment(
    id: string,
    body: { nom: string; type: string; quantite: number; image: string }
  ): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(
        await AlimentModel.findOneAndUpdate(
          { _id: id },
          {
            nom: body.nom,
            type: body.type,
            quantite: body.quantite,
            image:
              body.image ??
              "https://www.davigel.fr/res/davigel/styles/product/public/media/2238017_720x720.jpg?itok=V0vVS19c",
          }
        )
      );
    });
  }

  public static async deleteAliment(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.findByIdAndDelete({ _id: id }));
    });
  }
}
