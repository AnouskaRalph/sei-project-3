

const mongoose = require('mongoose')

const locationsSchema = new mongoose.Schema({
  
  placeName: { type: String, unique: true },
  feature: [{ type: String }],
  local: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

locationsSchema.set('toJSON', { virtuals: true })
locationsSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('Location', locationsSchema)