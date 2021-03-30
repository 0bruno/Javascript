const sequence = {
  _id: 1,
  get id() {
    //retorna sempre o proximo valor de id
    return this._id++;
  },
};
