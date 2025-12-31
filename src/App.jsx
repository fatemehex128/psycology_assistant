import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ChatInterface from './components/ChatInterface'
import PatientList from './components/PatientList'
import SessionNotes from './components/SessionNotes'
import Dashboard from './components/Dashboard'

function App() {
  const [activeView, setActiveView] = useState('dashboard')
  const [selectedPatient, setSelectedPatient] = useState(null)

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'patients':
        return <PatientList onSelectPatient={setSelectedPatient} />
      case 'chat':
        return <ChatInterface patient={selectedPatient} />
      case 'notes':
        return <SessionNotes patient={selectedPatient} />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App




