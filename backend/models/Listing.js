const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    title: {type: String, required: true },
    college:{type: String, required: true},
    rent: {type: Number, required: true},
    deposit:{type: Number, required: true},
    availableFrom: {type: Date, required: true},
    availableUntil:{type: Date, required: true},
    capcity: {type: String, required: true},
    propertyType: {type: String, required: true},
    bedrooms: {type: Number, required: true},
    Bathrooms: {type: Number, required: true},
    SquareFootage: {type: Number, required: false},
    amenities: {
    furnished: Boolean,
    petFriendly: Boolean,
    inUnitLaundry: Boolean,
    gymAccess: Boolean,
    utilitiesIncluded: Boolean,
    wifiIncluded: Boolean,
    parkingAvailable: Boolean,
    poolAccess: Boolean,},
    address: {
    street: {type: String, required : true},
    unit: {type: String, required : true},
    city: {type: String, required : true},
    state: {type: String, required : true},
    zip: {type: Number, required : true},
    distanceToCampus: {type: Number, required : true}},
    images: [String],
    description: String,
    rules: String,
    name: {type: String, required: true},
    number:{type: Number, required: false},
    email: {type: Number, required: true},

    createdAt: {type: Date, default: Date.now},});
    module.exports= mongoose.model('Listing',ListingSchema)
})