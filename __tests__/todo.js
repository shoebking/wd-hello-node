/* eslint-disable no-undef */
const todoList = require("../todo.js");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("TodoList test suite", () => {
  beforeAll(() => {
    // const formattedDate = (d) => {
    //   return d.toISOString().split("T")[0];
    // };
    // var dateToday = new Date();
    // const today = formattedDate(dateToday);
    // const yesterday = formattedDate(
    //   new Date(new Date().setDate(dateToday.getDate() - 1))
    // );
    // const tomorrow = formattedDate(
    //   new Date(new Date().setDate(dateToday.getDate() + 1))
    // );
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    add(
      {
        title: "Pay rent",
        dueDate: new Date(today.getTime() - 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
        completed: true,
      },
      {
        title: "Pay rent",
        dueDate: new Date().toLocaleDateString("en-CA"),
        completed: true,
      },
      {
        title: "Service Vehicle",
        dueDate: new Date(today.getTime() + 2 * oneDay).toLocaleDateString(
          "en-CA"
        ),
        completed: false,
      }
      // { title: "File taxes", dueDate: tomorrow, completed: false },
      // { title: "Pay electric bill", dueDate: tomorrow, completed: false }
    );
  });
  test("Should add new items", () => {
    const ItemsCount = all.length;
    add({
      title: "Pay rent",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: true,
    });
    expect(all.length).toBe(ItemsCount + 1);
  });
  test("Mark mark todo as completed", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Mark todo overdue items", () => {
    expect(overdue().length).toEqual(1);
  });
  test("Mark todo dueToday items", () => {
    expect(dueToday().length).toEqual(1);
  });
  test("Mark todo dueLater items", () => {
    expect(dueLater().length).toEqual(0);
  });
});
