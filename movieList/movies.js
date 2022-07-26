const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Avengers')

    await driver.findElement(By.xpath('//button')).click()

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()

}

const deleteMovie = async (driver) => {
    await driver.findElement(By.id('Avengers')).click()
}

const crossMovie = async (driver) => {
    await driver.findElement(By.xpath('//span')).click()
}

const uncrossMovie = async (driver) => {
    await driver.findElement(By.className('checked')).click()
}

module.exports = {
    addMovie,
    deleteMovie,
    crossMovie,
    uncrossMovie
}