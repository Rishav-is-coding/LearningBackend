import express from "express"

const app = express()

// app.get('/' , (req, res) => {
//     res.send('server is ready!')
// })

const port = process.env.PORT || 3000

app.get('/api/tests' , (req, res) => {
    const tests = [
        {
            id: 1,
            title : 'one test',
            content : 'This is test 1'
        },
        {
            id: 2,
            title : 'two test',
            content : 'This is test 2'
        },
        {
            id: 3,
            title : 'three test',
            content : 'This is test 3'
        },
        {
            id: 4,
            title : 'four test',
            content : 'This is test 4'
        },
        {
            id: 5,
            title : 'five test',
            content : 'This is test 5'
        }
    ]

    res.send(tests)
})

app.listen(port ,() => {
    console.log('server is running on : ' , port)
})

