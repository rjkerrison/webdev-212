import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProjectListPage from './pages/ProjectPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import EditProjectPage from './pages/EditProjectPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import IsPrivate from './components/IsPrivate'
import IsAnonymous from './components/IsAnonymous'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route
          path="/projects/:projectId/edit"
          element={
            <IsPrivate>
              <EditProjectPage />
            </IsPrivate>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/login"
          element={
            <IsAnonymous>
              <LoginPage />
            </IsAnonymous>
          }
        />
      </Routes>
    </div>
  )
}

export default App
