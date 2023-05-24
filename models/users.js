//users methods

const getAll = () => {
  return db.query("select * from users");
};

const createUser = ({
  name,
  surname,
  mail,
  user,
  password,
  user_type,
  status,
  entry_date,
  leaving_date,
}) => {
  return db.query(
    "insert into users (name,surname,mail,user,password,user_type,status,entry_date,leaving_date) values (?,?,?,?,?,?,?,?,?)",
    [
      name,
      surname,
      mail,
      user,
      password,
      user_type,
      status,
      entry_date,
      leaving_date,
    ]
  );
};

const updateUser = (
  idUser,
  {
    name,
    surname,
    mail,
    user,
    password,
    user_type,
    status,
    entry_date,
    leaving_date,
  }
) => {
  return db.query(
    "update users set name = ?, surname = ?, mail = ?, user = ?, password = ?,  user_type = ?, status = ?, entry_date = ?, leaving_date = ? where id=?",
    [
      name,
      surname,
      mail,
      user,
      password,
      user_type,
      status,
      entry_date,
      leaving_date,
      idUser,
    ]
  );
};

const deleteUserById = (idUser) => {
  return db.query("delete from users where id=?", [idUser]);
};

module.exports = { getAll, createUser, updateUser, deleteUserById };
