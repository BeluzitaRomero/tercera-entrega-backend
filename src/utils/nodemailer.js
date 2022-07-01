const { createTransport } = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const logger = require("../utils/logger.js");

const transporterGmail = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.PASS_GMAIL,
  },
});

async function sendMailGmail(html) {
  const mailOptions = {
    from: process.env.USER,
    to: [process.env.USER_GMAIL, process.env.USER],
    subject: "Nuevo usuario registrado",
    //   text: "Este es el mail de prueba",
    html: html,
    attachments: [
      {
        // path:"podria poner archivo.docx",
        // filename:"cambia el nombre del archivo"
      },
    ],
  };

  try {
    const response = await transporterGmail.sendMail(mailOptions);
    logger.info(`Contenido email:${response}`);
  } catch (error) {
    logger.error(error);
  }
}

//   sendMailGmail();
module.exports = sendMailGmail;
