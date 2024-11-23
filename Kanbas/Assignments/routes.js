import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/assignments", (req, res) => {
    const assignment = req.body;
    const newAssignment = dao.createCourse(assignment); // Assuming 'createCourse' adds a new assignment
    res.send(newAssignment);
  });

  app.get("/api/assignments", (req, res) => {
    const assignments = dao.findAllAssignments();
    res.json(assignments);
  });

  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteCourse(assignmentId); 
    res.send(status);
  });

  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(updatedAssignment);
  });
}
