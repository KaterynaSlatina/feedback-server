const nodemailer = require("nodemailer");
require("dotenv").config();

// Маршрут для обробки форми зворотнього зв'язку
module.exports = async (req, res) => {
  if (reg.method != "POST") {
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
      to: process.env.RECEIVER_EMAIL, // email для отримання повідомлень
      subject: "Нова заявка з сайту",
      text: `Ім'я: ${name}\nТелефон: ${phone}\nПовідомлення: ${message}`,
    };

    // Відправки листа
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Ваше повідомлення успішно відправлено!" });
  } catch (error) {
    console.error("Помилка при відправці листа:", error);
    res
      .status(500)
      .json({ error: "Сталася помилка при відправці повідомлення." });
  }
};
