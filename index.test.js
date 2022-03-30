const {sum, square, cube} = require("./index")

describe("Should contain tests for sum",() => {
    it("should add 2 numbers", () => {
        const a = 4
        const b = 6
        const expectedResult = 10
        const actual = sum(a, b)
        expect(actual).toBe(expectedResult)
    })
})
it("should return an error for invalid inputs", () => {
 const a = null
 const b = 6
 const expectedResult = "Invalid Input"
 const actual = sum(a, b)
 expect(actual).toBe(expectedResult)
})


describe("Should contain tests for square", () => {
    it("should square a number", () => {
        const num = 8
        const expectedResult = 64
        const actual = square(num)
        expect(actual).toBe(expectedResult)
    })
})
it("should return an error for invalid inputs", () => {
    const a = null
    const expectedResult = "Invalid Input"
    const actual = square(a)
    expect(actual).toBe(expectedResult)
   })


describe("Should contain tests for cubed number",() => {
    it("should cube a number", () => {
        const num = 2
        const expectedResult = 8
        const actual = cube(num)
        expect(actual).toBe(expectedResult)
    })
})
it("should return an error for invalid inputs", () => {
    const a = null
    const expectedResult = "Invalid Input"
    const actual = cube(a)
    expect(actual).toBe(expectedResult)
   })