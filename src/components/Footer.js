import React from 'react'

export default function Footer() {
  return (
  <footer class="bg-dark text-light py-4 mt-5">
  <div className="container text-center">
    <h5>Наші соцмережі</h5>
    <div className="d-flex justify-content-center mb-3">
      <a href="https://t.me/yourtelegram" class="text-light mx-2" target="_blank">Telegram </a>
      <a href="https://facebook.com/yourfacebook" class="text-light mx-2" target="_blank">Facebook </a>
      <a href="https://instagram.com/yourinstagram" class="text-light mx-2" target="_blank">Instagram</a>
    </div>
    <p>Телефон: <a href="tel:+380969168312" class="text-light">+38 (096) 916 83 12</a></p>
    <p>Графік роботи: Пн-Пт з 9:00 до 20:00</p>
    <p>Вихідні: не працюємо</p>
  </div>
</footer>

  )
}
