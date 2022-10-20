const mongoose = require('mongoose');
const db_name = 'ip_db';
mongoose.connect(`mongodb://localhost/${db_name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>console.log('Database OK'))
    .catch(err=>console.log('Error connecting to database'));