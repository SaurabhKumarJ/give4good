const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://give4good:give4good@cluster0.81sf9.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
const connectTomongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('connected to mongo')
        const fetched_data = mongoose.connection.db.collection("products");
        const data = await fetched_data.find({}).toArray();
        global.shop_items = data;
        // console.log(global.shop_products);
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectTomongo;