class BaseService {

  constructor(repository) {
    this._repository = repository;
  }

  async getAllByEnterprise(enterpriseUuid) {
    return await this._repository.getAllByEnterprise(enterpriseUuid);
  }

  async get(id) {
    
    if(!id) {
      const error = new Error();
      error.status = 400;
      error.message = "Bad request";
      throw error;
    }

    const currentData = await this._repository.get(id);

    if(!currentData) {
      const error = new Error();
      error.status = 400;
      error.message = "Not found";
      throw error;
    }

    return currentData;
  }

  async getAll() {
    return await this._repository.getAll();
  }

  async create(data) {
    const currentData = await this._repository.create(data);
    return currentData;
  }

  async update(id, data) {
    const updateData = await this._repository.update(id, data);
    return updateData;
  }

  async delete(id) {
    const deleteData = await this._repository.update(id, { status: false, deleteAt: new Date()} );
    return deleteData;
  }

}

export { BaseService };