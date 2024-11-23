import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.enrollUserInCourse(userId, courseId);
    res.status(200);
  });

  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    dao.unenrollUserFromCourse(userId, courseId);
    res.status(200);
  });
}
