import React from "react";
import { Routes, Route } from 'react-router-dom';
import Basket from "../components/Basket";
import Login from '../components/Login';
import Register from '../components/Register';
import Cabinet from '../pages/Cabinet';
import SearchResults from '../pages/SearchResults';
import HomePage from '../pages/HomePage';
import Layout from '../components/Layout';
import Payment from '../pages/Payment'; // Якщо у тебе є цей компонент

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      items: [
         {
      id: 1,
      title: "Боксерські рукавички Venum",
      image: "/img/venum-gloves.webp",
      desc: "Професійні рукавички з натуральної шкіри для боксу та MMA.",
      category: "Бокс",
      price: "1899.00"
    },
    {
      id: 2,
      title: "Футбольний м'яч Adidas UEFA",
      image: "/Img/shopping (1).webp",
      desc: "Офіційний м'яч Ліги Чемпіонів сезону 2024.",
      category: "Футбол",
      price: "1299.00"
    },
    {
      id: 3,
      title: "Гантелі 10 кг (пара)",
      image: "/Img/shopping (2).webp",
      desc: "Гумові гантелі для домашнього та професійного використання.",
      category: "Фітнес",
      price: "1599.00"
    },
    {
      id: 4,
      title: "Кросівки Nike Air Zoom Pegasus",
      image: "/Img/shopping.webp",
      desc: "Універсальне спортивне взуття для бігу та фітнесу.",
      category: "Взуття",
      price: "3599.00"
    },
    {
      id: 5,
      title: "Скакалка зі сталевим тросом",
      image: "/Img/shopping (1).webp",
      desc: "Професійна скакалка для кардіо-тренувань та боксу.",
      category: "Аксесуари",
      price: "499.00"
    },
    {
      id: 6,
      title: "Термокофта для тренувань",
      image: "/Img/shopping (4).webp",
      desc: "Зберігає тепло тіла та забезпечує комфорт під час занять спортом.",
      category: "Одяг",
      price: "899.00"
    },
    {
      id: 7,
      title: "Фітнес-килимок 8 мм",
      image: "/Img/shopping (5).webp",
      desc: "М’який та нековзкий килимок для йоги та фітнесу.",
      category: "Фітнес",
      price: "699.00"
    },
    {
      id: 8,
      title: "Спортивна сумка Puma",
      image: "/Img/shopping (6).webp",
      desc: "Містка та зручна сумка для тренувань та подорожей.",
      category: "Аксесуари",
      price: "1099.00"
    },
    {
      id: 9,
      title: "Баскетбольний м’яч Spalding",
      image: "/Img/shopping (7).webp",
      desc: "Офіційний розмір, чудове зчеплення та довговічність.",
      category: "Баскетбол",
      price: "1599.00"
    },
    {
      id: 10,
      title: "Еспандер для рук",
      image: "/Img/shopping (8).webp",
      desc: "Для зміцнення м’язів передпліччя та кисті.",
      category: "Фітнес",
      price: "299.99"
    },
    {
      id: 11,
      title: "Тренувальні штани Nike Dri-FIT",
      image: "/Img/shopping (9).webp",
      desc: "Зручні, дихаючі штани для щоденних тренувань.",
      category: "Одяг",
      price: "1199.99"
    },
    {
      id: 12,
      title: "Штанга 20 кг з грифом",
      image: "/Img/shopping (10).webp",
      desc: "Металева штанга з гумовим покриттям.",
      category: "Силові тренажери",
      price: "2899.99"
    },
    {
      id: 13,
      title: "Спортивні навушники JBL Endurance",
      image: "/Img/shopping (11).webp",
      desc: "Водонепроникні навушники для бігу та тренувань.",
      category: "Аксесуари",
      price: "1399.00"
    },
    {
      id: 14,
      title: "Гімнастичний м’яч 65 см",
      image: "/Img/shopping (12).webp",
      desc: "Ідеально підходить для розтяжки та зміцнення м’язів.",
      category: "Фітнес",
      price: "599.00"
    },
    {
      id: 15,
      title: "Ролик для пресу",
      image: "/Img/shopping (13).webp",
      desc: "Компактний тренажер для м'язів живота.",
      category: "Фітнес",
      price: "449.00"
    },
    {
      id: 16,
      title: "Спортивна пляшка 700 мл",
      image: "/Img/shopping (14).webp",
      desc: "Легка пляшка з носиком для пиття під час тренувань.",
      category: "Аксесуари",
      price: "199.00"
    },
    {
      id: 17,
      title: "Шкарпетки спортивні (3 пари)",
      image: "/Img/shopping (15).webp",
      desc: "Дихаючі, анатомічні, для активних навантажень.",
      category: "Одяг",
      price: "349.00"
    },
    {
      id: 18,
      title: "Набір резинок для фітнесу",
      image: "/Img/16 shopinmg.webp",
      desc: "Набір з 5 еспандерів з різною жорсткістю.",
      category: "Фітнес",
      price: "499.00"
    },
    {
      id: 19,
      title: "Ковдра для кемпінгу SportLine",
      image: "/Img/shopping (16).webp",
      desc: "Легка ковдра для активного відпочинку та подорожей.",
      category: "Туризм",
      price: "899.99"
    },
    {
      id: 20,
      title: "Налокітники захисні",
      image: "/Img/18shop.webp",
      desc: "Захист суглобів під час інтенсивних тренувань.",
      category: "Захист",
      price: "599.00"
    }
      ],
      currentItems: [],
      searchQuery: '',
      cart: [],
      isCartOpen: false,
      isAuthModalOpen: false,
      isLoggedIn: false,
      user: null,
      showLogin: false,
      showRegister: false
    };
    
// методи для обробки стану
    this.setCategory = this.setCategory.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
toggleAuthModal = () => {
    this.setState(prev => ({ isAuthModalOpen: !prev.isAuthModalOpen }));
  };

 componentDidMount() {
    const storedUser = localStorage.getItem('user');
    try {
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && typeof parsedUser === 'object') {
          this.setState({ user: parsedUser });
        }
      }
    } catch (e) {
      console.warn('Помилка при читанні user з localStorage:', e);
      localStorage.removeItem('user');
    }

    this.setState({ currentItems: this.state.items });
  }

  setCategory(category) {
    if (category === 'Всі') {
      this.setState({ currentItems: this.state.items });
    } else {
      const filtered = this.state.items.filter(item => item.category === category);
      this.setState({ currentItems: filtered });
    }
  }

  handleSearch(event) {
    const query = event.target.value.toLowerCase();
    const filtered = this.state.items.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query)
    );

    this.setState({
      searchQuery: query,
      currentItems: filtered
    });
  }

  addToCart(item) {
    this.setState(prev => {
      const inCart = prev.cart.find(el => el.id === item.id);
      if (inCart) {
        return {
          cart: prev.cart.map(el =>
            el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
          )
        };
      } else {
        return {
          cart: [...prev.cart, { ...item, quantity: 1 }]
        };
      }
    });
  }

  removeFromCart(id) {
    this.setState(prev => ({
      cart: prev.cart.filter(item => item.id !== id)
    }));
  }

  toggleCart() {
    this.setState(prevState => ({
      isCartOpen: !prevState.isCartOpen
    }));
  }

  toggleLogin() {
    this.setState({ showLogin: !this.state.showLogin, showRegister: false });
  }

  toggleRegister() {
    this.setState({ showRegister: !this.state.showRegister, showLogin: false });
  }

  handleFakePayment() {
    console.log('Fake payment made!');
    this.setState({ cart: [] });
  }

  handleLogin(user) {
    localStorage.setItem('user', JSON.stringify(user)); 
    this.setState({ user, showLogin: false, showRegister: false });
  }

  handleLogout() {
    this.setState({ user: null });
  }

  handleRegister(user) {
    this.setState({ user, showRegister: false });
  }

  handleLoginSuccess() {
    this.setState({ isLoggedIn: true, isAuthModalOpen: false });
  }

  render() {
    const categories = ['Всі', ...new Set(this.state.items.map(item => item.category))];

    return (
      <div className="wrapper">
        {/* Модальні вікна для входу та реєстрації */}
        {(this.state.showLogin || this.state.showRegister) && (
          <div className="modal-overlay" onClick={() => this.setState({ showLogin: false, showRegister: false })}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {this.state.showLogin ? (
                <Login onLogin={this.handleLogin} />
              ) : (
                <Register onRegister={this.handleRegister} />
              )}
            </div>
          </div>
        )}

        {/* Модальне вікно кошика */}
        {this.state.isCartOpen && (
          <div className="modal-overlay" onClick={this.toggleCart}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Basket
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
                onFakePayment={this.handleFakePayment}
              />
            </div>
          </div>
        )}

        {/* Маршрутизація */}
        <Routes>
          <Route element={
  <Layout
    toggleLogin={() => this.toggleLogin()}
    toggleRegister={() => this.toggleRegister()}
    toggleCart={this.toggleCart}
    cartItemCount={this.state.cart.length}
    user={this.state.user}
  />
}>
            <Route path="/" element={<HomePage items={this.state.currentItems} addToCart={this.addToCart} setCategory={this.setCategory} />} />
            <Route path="/search" element={<SearchResults items={this.state.items} />} />
            <Route path="/cabinet" element={<Cabinet user={this.state.user} />} />
            <Route path="/payment" element={<Payment />} />
          </Route>
        </Routes>

      </div>
    );
  }
}

export default App;