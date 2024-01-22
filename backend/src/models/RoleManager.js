const AbstractManager = require("./AbstractManager");

class RoleManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "role" as configuration
    super({ table: "role" });
  }

  // The C of CRUD - Create operation

  async create(role) {
    const { id, name } = role;
    // Execute the SQL INSERT query to add a new role to the "role" table
    const [result] = await this.database.query(
      `insert into ${this.table} (id, name) values (?, ?)`,
      [id, name]
    );

    // Return the ID of the newly inserted role
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific role by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the role
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all roles from the "role" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of roles
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing role

  async update(role, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "role" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [role, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an role by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = RoleManager;
