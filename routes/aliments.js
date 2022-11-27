/**
 *  @swagger
 *  tags:
 *      name: Aliments
 *      description: API to manage your aliments.
 */

/**
 * @swagger
 * /aliments:
 *   get:
 *     tags: [Aliments]
 *     summary: Récupérer tous les aliments
*/
router.get('/aliments', function (req, res) {
});

/**
 * @swagger
 * /aliments/{id}:
 *   get:
 *     tags: [Aliments]
 *     summary: Chercher un aliment.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'id de l'aliment à rechercher.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         ...
 */
router.get("/aliments/:id", (req, res) => "");

/**
 * @swagger
 * /aliments/create:
 *   post:
 *     tags: [Aliments]
 *     summary: Créer un aliment.
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
router.post("/aliments/create", (req, res) =>
    ""
);

/**
 * @swagger
 * /aliments/update/{id}:
 *   put:
 *     tags: [Aliments]
 *     summary: Mettre à jour les infos d'un aliment.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'id de l'aliment à mettre à jour.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         ...
 */
app.put("/aliments/update/:id", (req, res) =>
    controllerAliment.updateAliment(req, res)
);

/**
 * @swagger
 * /aliments/delete/{id}:
 *   delete:
 *     tags: [Aliments]
 *     summary: Supprimer un aliment.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: L'id de l'aliment à supprimer.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         ...
 */
app.delete("/aliments/delete/:id", (req, res) =>
    controllerAliment.deleteAliment(req, res)
);