export class Pet {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.isVaccinated = data.isVaccinated;
    this.species = data.species;
    this.imgUrl = data.imgUrl;
  }
}

// name: String, required
// age: Number, required
// isVaccinated: Boolean, required
// species: String, required
// status: String,
//   imgUrl: String, required
// likes: undefined,
//   creatorId: SchemaObjectId, required

