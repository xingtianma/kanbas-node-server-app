import Database from "../Database/index.js";
import model from "./model.js";

export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}

export function createModule(module) {
  delete module._id
 return model.create(module);
}

export function findModulesForCourse(courseId) {
  return model.find({ course: courseId });
}
export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}
 