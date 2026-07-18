// Run this ONCE to add sample bicycles to the database:
//   node server/config/seedBicycles.js

const mongoose = require('mongoose')
const dbPath = 'mongodb+srv://localhost/bicycleDb'

const options = { useNewUrlParser: true, useUnifiedTopology: true }

const bicycleSchema = mongoose.Schema({
    autoId:       { type: Number, default: 0 },
    bikeType:     { type: String, default: "" },
    description:  { type: String, default: "" },
    location:     { type: String, default: "" },
    pricePerHour: { type: Number, default: 0 },
    image:        { type: String, default: "default.png" },
    status:       { type: Boolean, default: true },
    isDelete:     { type: Boolean, default: false },
    userId:       { type: mongoose.Schema.Types.ObjectId, default: null, ref: 'user' },
    createdAt:    { type: Date, default: Date.now }
})
const Bicycle = mongoose.model('bicycle', bicycleSchema)

const sampleBicycles = [
    {
        autoId: 1,
        bikeType: "Mountain Bike",
        description: "Heavy-duty mountain bike with 21-speed Shimano gears and front suspension fork. Perfect for trails and off-road adventures.",
        location: "Connaught Place, Delhi",
        pricePerHour: 120,
        image: "bicycle/gallery1.jpg",
        status: true,
        isDelete: false
    },
    {
        autoId: 2,
        bikeType: "City Cruiser",
        description: "Comfortable upright city bike with a rear rack, fenders, and smooth 7-speed drivetrain. Ideal for commuting.",
        location: "Lajpat Nagar, Delhi",
        pricePerHour: 80,
        image: "bicycle/gallery3.jpg",
        status: true,
        isDelete: false
    },
    {
        autoId: 3,
        bikeType: "Road Bike",
        description: "Lightweight road bike built for speed. Drop handlebars, 18-speed gearing, and 700c wheels for maximum performance.",
        location: "Sector 18, Noida",
        pricePerHour: 200,
        image: "bicycle/gallery4.jpg",
        status: true,
        isDelete: false
    },
    {
        autoId: 4,
        bikeType: "Hybrid Bike",
        description: "Versatile hybrid bike that handles both paved roads and light trails. Flat handlebars and disc brakes for all-day comfort.",
        location: "Dwarka, Delhi",
        pricePerHour: 150,
        image: "bicycle/gallery5.jpg",
        status: true,
        isDelete: false
    },
    {
        autoId: 5,
        bikeType: "BMX Stunt Bike",
        description: "Durable 20-inch BMX bike for tricks and stunts. Chromoly frame, pegs included. Great for street and skatepark riding.",
        location: "Saket, Delhi",
        pricePerHour: 100,
        image: "bicycle/gallery6.jpg",
        status: true,
        isDelete: false
    },
    {
        autoId: 6,
        bikeType: "Electric Bike",
        description: "250W pedal-assist e-bike with 40km range per charge. Integrated LED lights and digital display. Commute effortlessly.",
        location: "Gurgaon Sector 29",
        pricePerHour: 250,
        image: "bicycle/gallery1.jpg",
        status: true,
        isDelete: false
    },
    {
        autoId: 7,
        bikeType: "Tandem Bike",
        description: "Two-seater tandem bicycle perfect for couples or friends. Features a strong frame, 21-speed gears, and comfortable saddles for a shared riding experience.",
        location: "India Gate, Delhi",
        pricePerHour: 180,
        image: "bicycle/gallery3.jpg",
        status: true,
        isDelete: false
    },
    {
        autoId: 8,
        bikeType: "Folding Bike",
        description: "Compact folding bike that easily fits in a car trunk or under a desk. Ideal for multi-modal commutes and easy storage in small spaces.",
        location: "Cyber Hub, Gurgaon",
        pricePerHour: 110,
        image: "bicycle/gallery4.jpg",
        status: true,
        isDelete: false
    },
    {
        autoId: 9,
        bikeType: "Fat Tire Bike",
        description: "Off-road fat tire bike designed to handle sand, snow, and mud with ease. Extra-wide tires provide unmatched traction and stability on any terrain.",
        location: "Aravalli Trails, Gurgaon",
        pricePerHour: 160,
        image: "bicycle/gallery5.jpg",
        status: true,
        isDelete: false
    }
]

mongoose.connect(dbPath, options).then(async () => {
    console.log("DB Connected")

    // Clear existing bicycles and reseed
    await Bicycle.deleteMany({})
    console.log("Cleared existing bicycles")

    await Bicycle.insertMany(sampleBicycles)
    console.log(`✓ Successfully added ${sampleBicycles.length} sample bicycles with images!`)
    mongoose.disconnect()

}).catch(err => {
    console.log("DB Connect Error:", err)
})
