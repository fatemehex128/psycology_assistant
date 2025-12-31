import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">
              کمک درمانگر
            </h1>
            <span className="mr-3 text-sm text-gray-500">Psychology Assistant</span>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-semibold">د</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">دکتر درمانگر</p>
                <p className="text-xs text-gray-500">درمانگر</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

