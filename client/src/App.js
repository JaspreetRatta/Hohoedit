import "antd/dist/antd.min.css";
import "./resourses/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword"

import Profile from "./pages/Profile";
import ContactForm from "./pages/ContactForm";

import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import AdminHome from "./pages/Admin/AdminHome";
import AdminBuses from "./pages/Admin/AdminBuses";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminTour  from "./pages/Admin/AdminTour";

import BookNow from "./pages/BookNow";
import TourBookNow from "./pages/TourBookNow";
import House from "./pages/House";
import Bookings from "./pages/Bookings";
import AdminBookings from "./pages/Admin/AdminBookings";
import AddMemory from "./Diary/AddMemory";
import MemoryList from "./Diary/MemoryList";


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../src/en.json';
import thTranslation from '../src/th.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      th: {
        translation: thTranslation,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });


function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-now/:id"
            element={
              <ProtectedRoute>
                <BookNow />
              </ProtectedRoute>
            }
          />

<Route
            path="/TourBookNow/:id"
            element={
              <ProtectedRoute>
                <TourBookNow />
              </ProtectedRoute>
            }
          />


          <Route
            path="/bookings"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />

<Route
            path="/client/src/pages/House"
            element={
              <ProtectedRoute>
                <House />
              </ProtectedRoute>
            }
          />

<Route
            path="/client/src/pages/Profile"
            element={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }
          />

<Route
            path="/client/src/Diary/AddMemory"
            element={
              <ProtectedRoute>
                <AddMemory/>
              </ProtectedRoute>
            }
          />
<Route
            path="/client/src/Diary/MemoryList"
            element={
              <ProtectedRoute>
                <MemoryList/>
              </ProtectedRoute>
            }
          />
<Route
            path="/client/src/pages/ContactForm"
            element={
              <ProtectedRoute>
                <ContactForm />
              </ProtectedRoute>
            }
          />

<Route
            path="/admin/AdminHome"
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/buses"
            element={
              <ProtectedRoute>
                <AdminBuses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <ProtectedRoute>
                <AdminBookings />
              </ProtectedRoute>
            }
          />

         <Route
            path="/admin/AdminTour"
            element={
              <ProtectedRoute>
                <AdminTour />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

<Route
            path="/ResetPassword"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


