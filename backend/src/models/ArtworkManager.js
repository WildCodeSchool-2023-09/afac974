const AbstractManager = require("./AbstractManager");

class ArtworkManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "artwork" as configuration
    super({ table: "artwork" });
  }

  // The C of CRUD - Create operation

  async create(artwork) {
    const { name, date, style, format, certified, idUser } = artwork;
    // Execute the SQL INSERT query to add a new artwork to the "artwork" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, date, style, format, certified, id_user) values (?, ?, ?, ?, ?, ?)`,
      [name, date, style, format, certified, idUser]
    );

    // Return the ID of the newly inserted artwork
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific artwork by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the artwork
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all artworks from the "artwork" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of artworks
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing artwork

  async update(artwork, id) {
    // Execute the SQL INSERT query to update the row with tie id on the "artwork" table
    const result = await this.database.query(
      `update ${this.table} set ? where id = ?`,
      [artwork, id]
    );

    return result;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an artwork by its ID
  async delete(id) {
    const result = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );

    return result;
  }
}

module.exports = ArtworkManager;
