const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://pedro_exercicio3:1234567890@cluster0-kh6zu.mongodb.net/test?retryWrites=true&w=majority'

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true })

module.exports = {
    openConnection,
}