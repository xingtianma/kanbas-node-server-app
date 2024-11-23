import db from "../Database/index.js";
import Database from "../Database/index.js";
let { users } = db;
export const createUser = (user) => {
  const newUser = { ...user, _id: Date.now().toString() };
  users = [...users, newUser];
  return newUser;
};
export const findAllUsers = () => users;
export const findUserById = (userId) =>
  users.find((user) => user._id === userId);
export const findUserByUsername = (username) =>
  users.find((user) => user.username === username);
export const findUserByCredentials = (username, password) =>
  users.find(
    (user) => user.username === username && user.password === password
  );
export const updateUser = (userId, user) =>
  (users = users.map((u) => (u._id === userId ? user : u)));
export const deleteUser = (userId) =>
  (users = users.filter((u) => u._id !== userId));
export function findAllCourses() {
  return Database.courses;
}
export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
  return enrolledCourses;
}
