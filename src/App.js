import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items_tems";
import Categories from './components/Categories';
import Basket from "./components/Basket";
import Login from './components/Login';
import Register from './components/Register';
import Cabinet from './components/Cabinet'; // <-- якщо він там лежить
import { Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAuthenticated: false,
      items: [
         {
      id: 1,
      title: "Боксерські рукавички Venum",
      image: "./img/venum-gloves.webp",
      desc: "Професійні рукавички з натуральної шкіри для боксу та MMA.",
      category: "Бокс",
      price: "1899.00"
    },
    {
      id: 2,
      title: "Футбольний м'яч Adidas UEFA",
      image: "./images/adidas-ball.webp",
      desc: "Офіційний м'яч Ліги Чемпіонів сезону 2024.",
      category: "Футбол",
      price: "1299.00"
    },
    {
      id: 3,
      title: "Гантелі 10 кг (пара)",
      image: "./images/dumbbells-10kg.webp",
      desc: "Гумові гантелі для домашнього та професійного використання.",
      category: "Фітнес",
      price: "1599.00"
    },
    {
      id: 4,
      title: "Кросівки Nike Air Zoom Pegasus",
      image: "./images/nike-pegasus.webp",
      desc: "Універсальне спортивне взуття для бігу та фітнесу.",
      category: "Взуття",
      price: "3599.00"
    },
    {
      id: 5,
      title: "Скакалка зі сталевим тросом",
      image: "./images/jump-rope.webp",
      desc: "Професійна скакалка для кардіо-тренувань та боксу.",
      category: "Аксесуари",
      price: "499.00"
    },
    {
      id: 6,
      title: "Термокофта для тренувань",
      image: "./images/thermal-shirt.webp",
      desc: "Зберігає тепло тіла та забезпечує комфорт під час занять спортом.",
      category: "Одяг",
      price: "899.00"
    },
    {
      id: 7,
      title: "Фітнес-килимок 8 мм",
      image: "./images/yoga-mat.webp",
      desc: "М’який та нековзкий килимок для йоги та фітнесу.",
      category: "Фітнес",
      price: "699.00"
    },
    {
      id: 8,
      title: "Спортивна сумка Puma",
      image: "./images/sport-bag.webp",
      desc: "Містка та зручна сумка для тренувань та подорожей.",
      category: "Аксесуари",
      price: "1099.00"
    },
    {
      id: 9,
      title: "Баскетбольний м’яч Spalding",
      image: "./images/basketball.webp",
      desc: "Офіційний розмір, чудове зчеплення та довговічність.",
      category: "Баскетбол",
      price: "1599.00"
    },
    {
      id: 10,
      title: "Еспандер для рук",
      image: "./images/hand-expander.webp",
      desc: "Для зміцнення м’язів передпліччя та кисті.",
      category: "Фітнес",
      price: "299.99"
    },
    {
      id: 11,
      title: "Тренувальні штани Nike Dri-FIT",
      image: "./images/training-pants.webp",
      desc: "Зручні, дихаючі штани для щоденних тренувань.",
      category: "Одяг",
      price: "1199.99"
    },
    {
      id: 12,
      title: "Штанга 20 кг з грифом",
      image: "./images/barbell.webp",
      desc: "Металева штанга з гумовим покриттям.",
      category: "Силові тренажери",
      price: "2899.99"
    },
    {
      id: 13,
      title: "Спортивні навушники JBL Endurance",
      image: "./images/sport-headphones.webp",
      desc: "Водонепроникні навушники для бігу та тренувань.",
      category: "Аксесуари",
      price: "1399.00"
    },
    {
      id: 14,
      title: "Гімнастичний м’яч 65 см",
      image: "./images/gym-ball.webp",
      desc: "Ідеально підходить для розтяжки та зміцнення м’язів.",
      category: "Фітнес",
      price: "599.00"
    },
    {
      id: 15,
      title: "Ролик для пресу",
      image: "./images/ab-roller.webp",
      desc: "Компактний тренажер для м'язів живота.",
      category: "Фітнес",
      price: "449.00"
    },
    {
      id: 16,
      title: "Спортивна пляшка 700 мл",
      image: "./images/sport-bottle.webp",
      desc: "Легка пляшка з носиком для пиття під час тренувань.",
      category: "Аксесуари",
      price: "199.00"
    },
    {
      id: 17,
      title: "Шкарпетки спортивні (3 пари)",
      image: "./images/sport-socks.webp",
      desc: "Дихаючі, анатомічні, для активних навантажень.",
      category: "Одяг",
      price: "349.00"
    },
    {
      id: 18,
      title: "Набір резинок для фітнесу",
      image: "./images/resistance-bands.webp",
      desc: "Набір з 5 еспандерів з різною жорсткістю.",
      category: "Фітнес",
      price: "499.00"
    },
    {
      id: 19,
      title: "Ковдра для кемпінгу SportLine",
      image: "./images/camping-blanket.webp",
      desc: "Легка ковдра для активного відпочинку та подорожей.",
      category: "Туризм",
      price: "899.99"
    },
    {
      id: 20,
      title: "Налокітники захисні",
      image: "./images/elbow-pads.webp",
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
  if (storedUser) {
    this.setState({ user: JSON.parse(storedUser) });
  }
  this.setState({ currentItems: this.state.items });
}


  setCategory(category) {
    if (category === 'Усі') {
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
    this.setState(prev => ({ isCartOpen: !prev.isCartOpen }));
  }
  
  handleLogin() {
  this.setState({ isAuthenticated: true });
}
toggleLogin = () => {
  this.setState({ showLogin: !this.state.showLogin, showRegister: false });
};

toggleRegister = () => {
  this.setState({ showRegister: !this.state.showRegister, showLogin: false });
};

handleLogin = (user) => {
  localStorage.setItem('user', JSON.stringify(user)); // Зберегти в localStorage
  this.setState({ user, showLogin: false, showRegister: false });
};


handleLogout = () => {
  this.setState({ user: null });
};

handleRegister = (user) => {
  this.setState({ user, showRegister: false });
};

handleLoginSuccess = () => {
  this.setState({ isLoggedIn: true, isAuthModalOpen: false });
};


 render() {
  const categories = ['Всі', ...new Set(this.state.items.map(item => item.category))];

  return (
    <div className="wrapper">
      <Header
        toggleCart={this.toggleCart}
        cartCount={this.state.cart.length}
        onLoginClick={this.toggleLogin}
        onRegisterClick={this.toggleRegister}
        user={this.state.user}
        onLogout={this.handleLogout}
      />

      {/* Модальні вікна */}
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

      {this.state.isCartOpen && (
        <div className="modal-overlay" onClick={this.toggleCart}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Basket
              cart={this.state.cart}
              removeFromCart={this.removeFromCart}
            />
          </div>
        </div>
      )}

     <Routes>
  <Route path="/" element={
    <>
      <Categories setCategory={this.setCategory} />
      <Items items={this.state.currentItems} onAdd={this.addToCart} />
    </>
  } />
  
  <Route path="/search" element={<SearchResults items={this.state.items} />} />
  
  <Route path="/cabinet" element={<Cabinet user={this.state.user} />} />
</Routes>

      <Footer />
    </div>
  );
}
}

export default App;