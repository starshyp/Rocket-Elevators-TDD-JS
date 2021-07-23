const streamer = require('./elevator_media');
var axios = require("axios").default;

test('return data (not null)', async () => {
  expect(await streamer()).not.toBe(null);
  // console.log("⚡⚡⚡⚡⚡RETURN DATA (not null) ⚡⚡⚡⚡⚡")
});

test('return stock (truthy)', async () => {
  expect(await streamer()).toBeTruthy();
  // console.log("⚡⚡⚡⚡⚡RETURN STOCK (truthy) ⚡⚡⚡⚡⚡")
});

test('return html (contains)', async () => {
  expect(await streamer()).toContain('<div>');
  expect(await streamer()).toContain('</div>');
  // console.log("⚡⚡⚡⚡⚡RETURN HTML (contains) ⚡⚡⚡⚡⚡")
});

// test('GET request successful', async (done) => {
//   const response = await streamer().get('https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/TSLA');
//   expect(response).toBe(200);
//   done();
// });
