const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Маршрут для обрабки форми зворотнього зв'язку
app.post("/feedback", async (req, res) => {
  const { name, phone, message } = req.body;

  // Валідація
  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Пожалуйста, заполните все поля." });
  }

  try {
    // Налаштування транспорту для nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Визначення листа
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // email для отримання повідомлень
      subject: "Новая заявка с сайта",
      text: `Имя: ${name}\nТелефон: ${phone}\nСообщение: ${message}`,
    };

    // Відправки листа
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Ваше сообщение успешно отправлено!" });
  } catch (error) {
    console.error("Ошибка при отправке письма:", error);
    res.status(500).json({ error: "Произошла ошибка при отправке сообщения." });
  }
});

// Запуск серверу
app.listen(PORT, () => {
  console.log(`Сервер запущено на порту ${PORT}`);
});
