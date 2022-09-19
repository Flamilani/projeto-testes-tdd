const app = require('../../app'); // Link to your app file
const request = require('supertest');

describe("Check all person endpoint requests were expected", () => {

  it('Gets the endpoint test', async () => {
    const response = await request(app).get('/test');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('test pass!');
  });

  it('Gets the endpoint get persons', async () => {
    const response = await request(app).get('/get');

    expect(response.status).toBe(200);
  });

  it('Should to post the endpoint person and returns status 201', async () => {
    const data = {
      name: "Flavio",
      age: 30,
      city: "São Paulo"
    }
    const response = await request(app)
      .post('/post')
      .send(data);

    expect(response.statusCode).toEqual(201);
  });

  it('Should to put the endpoint person and returns status 200', function () {
    const data = {
      name: "Flavio M.",
    }

    return request(app)
      .put('/update/1')
      .send(data)
      .expect(200);
  });

  it('Should to delete the endpoint person and returns status 200', function () {
    return request(app)
      .delete('/delete/1')
      .expect(200);
  });

});
