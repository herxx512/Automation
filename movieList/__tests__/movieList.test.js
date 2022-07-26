const { Builder, Capabilities } = require("selenium-webdriver")

const {addMovie, deleteMovie, crossMovie, uncrossMovie} = require('../movies.js')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('cross a movie', async () => {
    await addMovie(driver)
    await crossMovie(driver)
    await driver.sleep(2000)
});


test('delete a movie', async () => {
    await addMovie(driver)
    await deleteMovie(driver)
    await driver.sleep(2000)
});


test('uncross a movie', async () => {
    await addMovie(driver)
    await crossMovie(driver)
    await uncrossMovie(driver)
    await driver.sleep(2000)
})




