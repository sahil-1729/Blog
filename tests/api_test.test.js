const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const helper = require('./helper')
const blog = require('../models/blog')
const {info} = require('../utils/logger')

const examples = [
    {
        "title": "Heroes of Nothing",
    "author": "Rick Riordan",
    "url": "www.percyJackson.com",
    "likes": 2
},
{
    "title": "Heroes",
"author": "Rick Riordan",
"url": "www.percyJackson.com",
"likes": 12
}
]

beforeEach(async () => {
    await blog.deleteMany({})
    info(`deleted`)
    // examples.forEach(async (val) => {
    //     let tobeSaved = new blog(val)
    //     await tobeSaved.save()
    //     info(`saved`)
    // })

    const createdBlogs = examples.map(val => new blog(val))
    const promiseArr = createdBlogs.map(val => val.save())
    await Promise.all(promiseArr) 

    // let tobeSaved = new blog(examples[0])
    // await tobeSaved.save()
    // tobeSaved = new blog(examples[1])
    // await tobeSaved.save()
    info(`done`)
})

// test('check returned length is same', async () => {
//     const response = await api.get('/api/blogs')
//     expect(response.body).toHaveLength(examples.length)
// })

test('test1', async () => {
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type',/application\/json/)
})

test('unique id', async () => {
    const result = await api.get('/api/blogs/')
    // info(`This is the result`,result.body)
    const dummy = result.body
    // info(`The id `,dummy[0].id)
    // expect(dummy[0].id).toBeDefined()
    dummy.forEach((val) => {
        expect(val.id).toBeDefined()
    })
    // info(result)
})

// test('notes are returned as json', async () => {
//     await api
//       .get('/api/blogs')
//       .expect(200)
//       .expect('Content-Type', /application\/json/)
//   }, 100000)
test('post blog with valid content', async () => {
    info`test run starts`
    const nBlog = {
            "title": "dsfgsag",
            "author": "Ryan gosling",
            "url": "www.google.com",
            "likes": 32,
    }
    const old = await helper.blogsInDB()
    await api.post('/api/blogs').send(nBlog).expect(201)
    .expect('Content-Type',/application\/json/)
    
    const result = await api.get('/api/blogs')
    const arr = result.body
    //after get request
    info(`The length is ${arr.length}, and content is ${arr}`)
    expect(arr).toHaveLength(old.length + 1)
    const title = arr.map(val => val.title)
    // info(title)
    expect(title).toContain('dsfgsag')
})
afterAll(async () => {
    await mongoose.connection.close()
})