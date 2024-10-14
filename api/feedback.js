const nodemailer = require("nodemailer");
require("dotenv").config();

// Маршрут для обробки форми зворотнього зв'язку
module.exports = async (req, res) => {
  // Додавання CORS заголовків
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Дозволяє запити з вашого локального фронтенду
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Логування для налагодження
  console.log("Request method:", req.method);
  console.log("Origin:", req.headers.origin);
  console.log("RECEIVER_EMAIL:", process.env.RECEIVER_EMAIL);

  // Обробка preflight запиту
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method != "POST") {
    return res.status(405).json({ error: "Метод не дозволений." });
  }

  const { name, phone, message } = req.body;

  // Валідація
  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Будь ласка, заповніть всі поля" });
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
      to: process.env.RECEIVER_EMAIL,
      subject: "Нова заявка з сайту",
      text: `Ім'я: ${name}\nТелефон: ${phone}\nПовідомлення: ${message}`,
    };
    console.log(mailOptions);

    // Відправка листа
    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully");

    res.setHeader("Content-Type", "application/json");

    res.status(200).json({ message: "Ваше повідомлення успішно відправлено!" });
  } catch (error) {
    console.error("Помилка при відправці листа:", error);
    res.setHeader("Content-Type", "application/json");
    return res
      .status(500)
      .json({ error: "Сталася помилка при відправці повідомлення." });
  }
};
