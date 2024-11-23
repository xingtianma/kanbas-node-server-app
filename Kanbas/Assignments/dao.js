import Database from "../Database/index.js";

export function findAllAssignments() {
  return Database.assignments;
}

export function findAssignmentsForCourse(courseID) {
  const { assignments } = Database;
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === courseID
  );
  return filteredAssignments;
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function deleteAssignment(assgId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter(
    (assignment) => assignment._id !== assgId
  );
}

export function updateAssignment(assgId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((assg) => assg._id === assgId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}
