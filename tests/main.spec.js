import { expect } from "chai";
import fizzbuzz from "../src/main";

describe("FizzBuzz", () => {
  describe("Smoke tests", () => {
    it("should return fizzbuzz typeof", () => {
      expect(fizzbuzz).to.exist;
      expect(typeof fizzbuzz).to.eq("function");
    });
  });

  describe("Fizz", () => {
    it("should return ´Fizz´ when receive multiple of 3", () => {
      expect(fizzbuzz(3)).to.eq("Fizz");
      expect(fizzbuzz(9)).to.eq("Fizz");
    });
  });

  describe("Buzz", () => {
    it("should return ´Buzz´ when receive multiple of 5", () => {
      expect(fizzbuzz(5)).to.eq("Buzz");
      expect(fizzbuzz(25)).to.eq("Buzz");
    });
  });

  describe("FizzBuzz", () => {
    it("should return ´FizzBuzz´ when receive 15", () => {
      expect(fizzbuzz(15)).to.eq("FizzBuzz");
      expect(fizzbuzz(60)).to.eq("FizzBuzz");
    });
  });

  describe("Not multiple", () => {
    it("should return the number when receive not multiple of 3 and/or 5", () => {
      expect(fizzbuzz(0)).to.eq(0);
      expect(fizzbuzz(2)).to.eq(2);
      expect(fizzbuzz(97)).to.eq(97);
    });
  });

  describe("Not a number", () => {
    it("should return ´It is not a number´ when NOT receive a number", () => {
      expect(fizzbuzz("im not a number")).to.eq("It is not a number");
      expect(fizzbuzz(() => {})).to.eq("It is not a number");
    });
  });
});
