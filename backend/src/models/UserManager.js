const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create(user) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (firstname, lastname, email, password, image, id_role) values (?, ?, ?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.password, user.image, 3]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readUserByEmail(email) {
    const [[row]] = await this.database.query(
      `select * from ${this.table} where email = ? LIMIT 1`,
      [email]
    );

    return row;
  }

  async readUserById(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [[rows]] = await this.database.query(
      `select * from ${this.table} where id = ? LIMIT 1`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }
  async update(id, user) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [result] = await this.database.query(
      `update ${this.table} set firstname=?, lastname=?, email=?, image=?, id_role=? where id=?`,
      [user.firstname, user.lastname, user.email, user.image, user.id_role, id]
    );

    // Return the array of items
    return result;
  }

  async updateRole(id, user) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [result] = await this.database.query(
      `update ${this.table} set id_role=? where id=?`,
      [user.id_role, id]
    );

    // Return the array of items
    return result;
  }
  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
  // Execute the SQL SELECT query to retrieve all items from the "item" table

  async delete(id) {
    const [rows] = await this.database.query(
      `delete from ${this.table} where id = ? `,
      [id]
    );
    // Return the array of items
    return rows;
  }
}
module.exports = UserManager;
