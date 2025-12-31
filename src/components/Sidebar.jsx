import React from 'react'

function Sidebar({ activeView, setActiveView }) {
  const menuItems = [
    { id: 'dashboard', label: 'داشبورد', icon: '📊' },
    { id: 'patients', label: 'بیماران', icon: '👥' },
    { id: 'chat', label: 'گفتگو', icon: '💬' },
    { id: 'notes', label: 'یادداشت‌ها', icon: '📝' },
  ]

  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen border-l border-gray-200">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center space-x-3 space-x-reverse p-3 rounded-lg transition-colors duration-200 ${
                  activeView === item.id
                    ? 'bg-primary-50 text-primary-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

