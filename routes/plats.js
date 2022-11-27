/**
 *  @swagger
 *  tags:
 *      name: Plats
 *      description: API to manage your plats.
 */

/**
 * @swagger
 * /plats:
 *   get:
 *     tags: [Plats]
 *     summary: Récupérer tous les plats
*/
app.get("/plats", (req, res) => controllerPlat.getPlats(req, res));

/**
 * @swagger
 * /plats/{id}:
 *   get:
 *     tags: [Plats]
 *     summary: Chercher un plat.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'id du plat à rechercher.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         ...
 */
app.get("/plats/:id", (req, res) => controllerPlat.getOnePlat(req, res));

/**
 * @swagger
 * /plats/create:
 *   post:
 *     tags: [Plats]
 *     summary: Créer un plat.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             nom:
 *              type:string
 *     responses:
 *       201:
 *         ...
*/
app.post("/plats/create", (req, res) => controllerPlat.insertPlat(req, res));

/**
 * @swagger
 * /plats/update/{id}:
 *   put:
 *     tags: [Plats]
 *     summary: Mettre à jour un plat.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'id du plat à mettre à jour.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         ...
 */
app.put("/plats/update/:id", (req, res) => controllerPlat.updatePlat(req, res));

/**
 * @swagger
 * /plats/delete/{id}:
 *   delete:
 *     tags: [Plats]
 *     summary: Supprimer un plat.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'id du plat à supprimer.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         ...
 */
app.delete("/plats/delete/:id", (req, res) => controllerPlat.deletePlat(req, res));