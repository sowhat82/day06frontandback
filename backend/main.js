// install libraries
const express = require ('express')
const cors = require('cors')


const cart = [
    {id: 'abc', item: 'apple' , quantity: 10},
    {id: 'def', item: 'orange' , quantity: 10},
    {id: 'ghi', item: 'pear' , quantity: 10},
    {id: 'jkl', item: 'grapes' , quantity: 10},

]
// configure environment variables
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

//create instance of express
const app = express()

// to prevent the CORS error
app.use (cors())

//create resources


// GET cart
app.get('/cart',  (req, resp) => {

        resp.status(200)
//        resp.setHeader('Access-Control-Allow-Origin', '*')
        resp.type('application/json')
        resp.json(cart)

		// resp.format({
        //     'application/json': () => {
        //         resp.type('application/json')
        //         resp.json(cart)
        //     },
        // })
})

app.get('/cart/:id',  (req, resp) => {

    function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].id === nameKey) {
                return myArray[i];
            }
        }
    }
    resp.status(200)
    resp.type('application/json')
    resp.json(search (req.params.id, cart))
})



// start the app
app.listen(PORT, () =>{
    console.info(`Application started on port ${PORT} at ${new Date()}`)
})