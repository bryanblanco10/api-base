class BaseRepository {

	constructor(model, entity){
		this._model = model;
		this._entity = entity;
	}

	getAll() {
		return this._model[this._entity].findAll({
			attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] },
		});
	}

	get(uuid) {
		return this._model[this._entity].findOne({
			attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] }, 
			where: { uuid } 
		});
	}

	create(data) {
		return this._model[this._entity].create(data);
	}

	update(uuid, data) {
		delete data.createdAt;
		delete data.updatedAt;

		return this._model[this._entity].update(data, {
			attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] }, 
			where: { uuid } 
		});
	}

	delete(uuid) {
		return this._model[this._entity].delete({ where: { uuid } });
	}

}


export { BaseRepository };