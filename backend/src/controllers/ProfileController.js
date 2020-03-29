const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ong_id = req.headers.authorization;

    const ongs = await connection("ongs").where("id", ong_id).first();
    if (!ongs) {
      return res.status('204').send();
    }

    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.json(incidents);
  }
};
