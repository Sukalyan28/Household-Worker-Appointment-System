import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import Users from "./pages/admin/Users";
import Workers from "./pages/admin/Workers";
import ApplyWorker from "./pages/ApplyWorker";
import Profile from "./pages/worker/Profile";
import NotificationPage from "./pages/NotificationPage";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import WorkerAppointments from "./pages/worker/WorkerAppointments";
function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/apply-worker"
              element={
                <ProtectedRoutes>
                  <ApplyWorker />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/admin/users"
              element={
                <ProtectedRoutes>
                  <Users />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/workers"
              element={
                <ProtectedRoutes>
                  <Workers />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/worker/profile/:id"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/worker/book-appointment/:workerId"
              element={
                <ProtectedRoutes>
                  <BookingPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoutes>
                  <NotificationPage />
                </ProtectedRoutes>
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
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="/appointments"
              element={
                <ProtectedRoutes>
                  <Appointments />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/worker-appointments"
              element={
                <ProtectedRoutes>
                  <WorkerAppointments />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <Homepage />
                </ProtectedRoutes>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
