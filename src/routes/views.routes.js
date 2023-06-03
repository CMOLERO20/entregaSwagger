const { Router } = require("express");
const authMdw = require("../middleware/auth.middleware");

const router = Router();

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/register", async (req, res) => {
  res.render("register");
});
router.get("/forgot-pass", async (req, res) => {
  res.render("forgot-pass");
});

router.get("/create-pass/:token", async (req, res) => {
  res.render("create-pass");
});

router.get("/profile", authMdw, async (req, res) => {
  const user = req.session.user;
  console.log("🚀 ~ file: views.routes.js:16 ~ router.get ~ user:", user);
  res.render("profile", {
    user,
    carrito: { carritoId: 'carrito-1', productos: [{ productoId: '1', nombre: 'camisa'}]}
  });
});

module.exports = router;
