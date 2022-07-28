const express = require('express')
const control = require('./controller/control')


const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.get('/', (req, res)=>{
    res.json([
        {
          "id": 1,
          "name ": "headphone - 1",
          "category_id": 1,
          "description": "Product of a phone details",
          "price": 100,
          "is_available": false,
          "rating": 4
        },
        {
          "id": 1,
          "name ": "Laptop - 1",
          "category_id": 2,
          "description": "Product of a Laptop details",
          "price": 10000,
          "is_available": true,
          "rating": 5
        },
        {
          "id": 1,
          "name ": "GetForce - 1",
          "category_id": 3,
          "description": "Product of a graphics detail details",
          "price": 20000,
          "is_available": true,
          "rating": 5
        },
        {
          "id": 4,
          "name ": "Laptop - 1",
          "category_id": 4,
          "description": "Product of a Laptop details",
          "price": 10000,
          "is_available": true,
          "rating": 5
        }
      ]
)      
})

app.post('/test', (req, res)=>{
    console.log(req.body);
    return res.send(true)
})


app.listen(5000)
