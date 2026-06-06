require('dotenv').config()



// console.log("GROQ KEY:", process.env.GROQ_API_KEY);
const app = require('./src/app')

app.listen(3000,() => {
    console.log('server is running on http://localhost3000')
})