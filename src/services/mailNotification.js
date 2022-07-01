const sendMail = require("../utils/nodemailer");
// const dotenv = require("dotenv");
// dotenv.config();

const mailNewUser = (user) => {
  let html = `
    <h2>Nuevo usuario registrado</h2>
    <ul>
    <li>Nombre: ${user.firstName}</li>
    <li>Apellido: ${user.lastName}</li>
    <li>Email: ${user.email}</li>
    <li>Edad: ${user.age}</li>
    <li>Telefono: ${user.phoneNumber}</li>
    </ul>`;
  sendMail(html);
};
module.exports = mailNewUser;
