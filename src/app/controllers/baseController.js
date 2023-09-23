class BaseController {
  constructor(service) {
    this._service = service;
  }

  async getAll(req, res) {
    const data = await this._service.getAll();

    res.status(200).send(data);
  }

  async get(req, res) {
    const { uuid } = req.params;

    const data = await this._service.get(uuid);

    res.status(200).send(data);
  }

  async create(req, res) {
    const { body } = req;
    const data = await this._service.create(body);

    res.status(200).send(data);
  }

  async update(req, res) {
    const { uuid } = req.params;
    const { body } = req;

    await this._service.update(uuid, body);

    res.status(201).send({ message: "Updated record" });
  }

  async delete(req, res) {
    const { uuid } = req.params;

    await this._service.delete(uuid);

    res.status(201).send({ message: "Record deleted" });
  }
}

export { BaseController };
