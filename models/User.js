const mysql = require("mysql2");
const db = require("../config/db");

class User {
  static async create(username, password) {
    try {
      const [results] = await db.execute(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, password]
      );
      return results.insertId;
    } catch (error) {
      throw error;
    }
  }

  static async findByUsername(username) {
    try {
      console.log("Finding user by username:", username);
      const query = "SELECT * FROM users WHERE username = ?";
      const [rows] = await db.execute(query, [username]);
      console.log("Query result:", rows);
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.error("Error finding user:", error);
      return null;
    }
  }
}

module.exports = User;
