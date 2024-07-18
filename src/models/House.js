export class House {
  constructor(data) {
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.id = data.id || data._id
    this.imgUrl = data.imgUrl
    this.price = data.price
    this.year = data.year
    this.updatesAt = data.updatesAt
    this.createdAt = data.createdAt
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.levels = data.levels
  }
}


// "bedrooms": {
//   "type": "Number",
//   "required": true
// },
// "bathrooms": {
//   "type": "Number",
//   "required": true
// },
// "levels": {
//   "type": "Number",
//   "required": true
// },
// "imgUrl": {
//   "type": "String",
//   "maxLength": 500
// },
// "year": {
//   "type": "Number",
//   "required": true
// },
// "price": {
//   "type": "Number",
//   "required": true
// },
