import model from "./model.js";

export function findAllAssignments() {
  return model.find();
}

export function findAssignmentsForCourse(courseID) {
  return model.find({courseID})
}

export function createAssignment(assignment) {
  return model.create(assignment);
}

export function deleteAssignment(assgId) {
  return model.deleteOne({ _id: assgId})
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  return AssignmentModel.updateOne({ _id: assignmentId }, { $set: assignmentUpdates }); 
}
