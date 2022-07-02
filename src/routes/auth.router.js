const express = require("express");
const passport = require("../utils/passport.util");

const authRouter = express.Router();

const auth = require("../middlewares/auth.middleware");
const logger = require("../utils/logger.js");

//*******************SIGN UP*****************************/
authRouter.get("/signup", async (req, res) => {
  res.render("signup");
});

authRouter.get("/login", async (req, res) => {
  res.render("login");
});

authRouter.post(
  "/signup",
  passport.authenticate("local-signup", { failureRedirect: "/api/user/fail" }),
  async (req, res) => {
    logger.info(req.user);
    res.redirect("login");
  }
);

authRouter.get("/fail", (req, res) => {
  res.send("El usuario ya existe");
});

//**************************LOG IN***********************/
authRouter.get("/login", (req, res) => {
  if (req.isAuthenticated()) {
    const user = req.user;
    logger.info("Usuario logueado");
    res.redirect("/api/user/home");
  } else {
    logger.info("Usuario no logueado");
    res.redirect("/login");
  }
});

authRouter.post(
  "/login",
  passport.authenticate("local-login", {
    failureRedirect: "/api/user/failLogin",
  }),
  async (req, res) => {
    logger.info(req.user);
    const user = req.user;
    res.redirect("/api/user/home");
  }
);

authRouter.get("/home", auth, async (req, res) => {
  res.render("home", { user: [req.user] });
});

authRouter.get("/failLogin", (req, res) => {
  res.send("Error");
});

//protegigo
authRouter.get("/protected", auth, (req, res) => {
  res.send("<h1>Autenticado</h1>");
});

//**************************LOG OUT*********************************//
authRouter.get("/logout", async (req, res) => {
  logger.info("logout");
  req.logOut();
  res.redirect("/api/user/login");
});

module.exports = authRouter;
