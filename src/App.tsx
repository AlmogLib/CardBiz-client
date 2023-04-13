import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './components/About';
import AllCards from './components/AllCards';
import CreateNewCard from './components/CreateNewCard';
import Footer from './components/Footer';
import Home from './components/Home';
import MyCards from './components/MyCards';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import User from './interfaces/User';
import { getUserById } from './services/userServices';

const emptyUser: User = {
  name: "",
  email: "",
  password: "",
  isLoggedIn: false,
  isBusiness: false,
};

export const UserContext = createContext({
  userctx: emptyUser,
  changeUser: (value: User) => {
    console.log(value);
  },
});

export function App() {
  let [user, setUser] = useState<User>(emptyUser);

  useEffect(() => {
    const getUser = async () => {
      try {
        let userId: number = await JSON.parse(
          sessionStorage.getItem("userId") as string
        );

        if (!userId) return;

        getUserById(userId as any)
          .then((res) => {
            setUser({ ...res.data, isLoggedIn: true });
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <UserContext.Provider value={{ userctx: user, changeUser: setUser }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/newcard" element={<CreateNewCard />} />
            <Route path="/mycards" element={<MyCards />} />
            <Route path="/allcards" element={<AllCards />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </UserContext.Provider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
