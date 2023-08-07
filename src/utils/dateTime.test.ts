import { formatDuration, getDiffTime, parseDate } from "./dateTime";

describe("dateTime", () => {
  describe("parseDate", () => {
    test("it should convert ISO string date into a date object", () => {
      const validISODate = "2021-03-30T23:01:00.000Z";
      const date = parseDate(validISODate);
      expect(date.getTime()).not.toBeNaN();
    });
    test("it should convert ISO string date into a date object", () => {
      const invalidISODate = "2021-03-30T23:01:00000Z";
      const date = parseDate(invalidISODate);
      expect(date.getTime()).toBeNaN();
    });
  });
  describe("formatDuration", () => {
    test("it should format a duration into an 'HH:MM:SS' format", () => {
      const ms = 430182000;
      const formatedDuration = formatDuration(ms);
      expect(formatedDuration).toEqual(
        "4 days, 23 hours, 29 minutes, 42 seconds"
      );
    });
  });
  describe("getDiffTime", () => {
    test("it should return the diff time between two dates", () => {
      const start = new Date("2021-12-31T04:36:00.000Z");
      const end = new Date("2021-12-31T14:55:00.000Z");

      const diff = getDiffTime(start, end);
      expect(diff).toEqual(37140000);
    });
    test("it should return the a negative diff time", () => {
      const start = new Date("2021-12-31T14:55:00.000Z");
      const end = new Date("2021-12-31T04:36:00.000Z");

      const diff = getDiffTime(start, end);
      expect(diff).toEqual(-37140000);
    });
  });
});
