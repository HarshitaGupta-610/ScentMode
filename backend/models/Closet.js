const mongoose = require("mongoose");

const closetSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		brand: { type: String },
		notes: [{ type: String }],
		longevity: { type: String },
		sillage: { type: String },
		score: { type: Number },
        image: { type: String },
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Closet", closetSchema);
