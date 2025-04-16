const db = require("../config/db");

class Task {
  // Create a new task
  static async create(title, description, status, dueDate, userId) {
    try {
      const [results] = await db.execute(
        "INSERT INTO tasks (title, description, status, dueDate, userId) VALUES (?, ?, ?, ?, ?)",
        [title, description, status, dueDate, userId]
      );
      return results.insertId;
    } catch (error) {
      throw error;
    }
  }

  // Find tasks by user ID
  static async findByUserId(userId, limit, offset, status) {
    let query = "SELECT * FROM tasks WHERE userId = ?"; // Base query to find tasks by user ID
    const params = [userId];

    if (status) {
      // Check if a status filter is provided
      query += " AND status = ?";
      params.push(status);
    }

    if (limit && offset !== undefined) {
      query += " LIMIT ? OFFSET ?"; // Add pagination to the query
      params.push(limit, offset);
    }

    try {
      const [results] = await db.query(query, params);
      return results;
    } catch (err) {
      throw err;
    }
  }
  // Update an existing task
  static async update(id, title, description, status, dueDate, userId) {
    try {
      const [results] = await db.execute(
        "UPDATE tasks SET title = ?, description = ?, status = ?, dueDate = ? WHERE id = ? AND userId = ?",
        [title, description, status, dueDate, id, userId]
      );
      return results.affectedRows;
    } catch (error) {
      throw error;
    }
  }

  // Delete a task
  static async delete(id, userId) {
    try {
      const [results] = await db.execute(
        "DELETE FROM tasks WHERE id = ? AND userId = ?",
        [id, userId]
      );
      return results.affectedRows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Task;
