import React from "react";
import { Navigate } from 'react-router-dom';

function Basket({ cart, removeFromCart, onFakePayment, user }) {
  const total = cart
    .reduce((sum, item) => sum + item.quantity * parseFloat(item.price), 0)
    .toFixed(2);

  // Створимо state для редіректу
  const [redirectToPayment, setRedirectToPayment] = React.useState(false);

  const handlePayment = () => {
    // Тут можна викликати API для створення замовлення на сервері
    setRedirectToPayment(true);
  };

  if (redirectToPayment) {
    // Перенаправляємо на сторінку оплати
    return <Navigate to="/payment" />;
  }

  return (
    <div className="basket-container">
      <div className="basket-header">🛒 Ваша корзина</div>
      <button onClick={handlePayment} className="pay-button">
        Оплатити
      </button>

      {cart.length === 0 ? (
        <p>Корзина порожня.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="basket-item">
              <div>
                <span className="basket-title">{item.title}</span>
                <span className="basket-quantity"> — {item.quantity} шт.</span>
              </div>
              <div>
                <span className="basket-price">{item.price} грн</span>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Видалити
                </button>
              </div>
            </div>
          ))}
          <div className="total-amount">Сума: {total} грн</div>
        </>
      )}
    </div>
  );
}

export default Basket;



