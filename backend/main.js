// install libraries
const express = require ('express')
const cors = require('cors')


const cart = [
    {id: 'abc', item: 'apple' , quantity: 10},
    {id: 'def', item: 'orange' , quantity: 20},
    {id: 'ghi', item: 'pear' , quantity: 30},
    {id: 'jkl', item: 'grapes' , quantity: 40},

]
// configure environment variables
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

//create instance of express
const app = express()

// to prevent the CORS error
app.use (cors())
app.use (express.json())

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

app.put('/cart/:id', (req, resp)=>{
    const id = req.params['id']
    const payload = req.body

    resp.status(200)
    resp.type('application/json')
    resp.json({})


})


// start the app
app.listen(PORT, () =>{
    console.info(`Application started on port ${PORT} at ${new Date()}`)
})