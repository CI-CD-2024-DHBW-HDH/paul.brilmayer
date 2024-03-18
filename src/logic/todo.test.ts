import { validateTodo } from "./todo";

describe("validateTodo", () => {
  it("longer than 255 characters", () => {
    const actual = validateTodo(
      {
        done: false,
        id: "test",
        value: "a".repeat(256),
      },
      [],
    );
    expect(actual).toBeFalsy();
  }),
    it("length zero", () => {
      const actual = validateTodo(
        {
          done: false,
          id: "test",
          value: "",
        },
        [],
      );
      expect(actual).toBeFalsy();
    }),
    it("already present", () => {
      const actual = validateTodo(
        {
          done: false,
          id: "test",
          value: "test",
        },
        [
          {
            done: false,
            id: "test2",
            value: "Test",
          },
        ],
      );
      expect(actual).toBeFalsy();
    }),
    it("success", () => {
      const actual = validateTodo(
        {
          done: false,
          id: "test",
          value: "test",
        },
        [],
      );
      expect(actual).toBeTruthy();
    });
});
