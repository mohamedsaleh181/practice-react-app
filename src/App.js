import "./App.css";
import MovieContextProvider from "./context/Movie";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Favorites from "./pages/favorites/Favorites";
import YoutubeForm from "./pages/form/YoutubeForm";
// import OldYoutubeForm from "./pages/form/OldYoutubeForm";
import Header from "./component/header/Header";
import { CartContextProvider } from "./context/CartContext";
import { SearchContextProvider } from "./context/Search";
import FormTest from "./pages/FormTest/FormTest";
import LoginForm from "./component/FormComponents/Login";
import Register from "./component/FormComponents/Register";
import Calculator from "./pages/calculator/Calculator";
function App() {
  return (
    <>
      <MovieContextProvider>
        <CartContextProvider>
          <SearchContextProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/practice-react-app/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/form" element={<YoutubeForm />} />
                <Route path="/formTest" element={<FormTest />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<Register />} />
                <Route path="/calculator" element={<Calculator />} />
                {/* <Route path="/oldForm" element={<OldYoutubeForm />} /> */}
              </Routes>
            </BrowserRouter>
          </SearchContextProvider>
        </CartContextProvider>
      </MovieContextProvider>
    </>
  );
}

export default App;
