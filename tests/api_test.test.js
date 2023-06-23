const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const {info} = require('../utils/logger')
test('test1', async () => {
    await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type',/application\/json/)
})

test('unique id', async () => {
    const result = await api.get('/api/blogs/')
    info(`This is the result`,result.body)
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

afterAll(async () => {
    await mongoose.connection.close()
})