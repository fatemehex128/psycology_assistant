import React, { useState, useRef, useEffect } from 'react'

function ChatInterface({ patient }) {
  const [messages, setMessages] = useState([
    { id: 1, text: 'سلام، چطور می‌تونم کمکتون کنم؟', sender: 'patient', time: '10:30' },
    { id: 2, text: 'سلام دکتر، من احساس اضطراب زیادی دارم.', sender: 'patient', time: '10:31' },
    { id: 3, text: 'متوجه شدم. می‌تونید بیشتر در موردش بگید؟', sender: 'therapist', time: '10:32' },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'therapist',
        time: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages([...messages, newMessage])
      setInputMessage('')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">گفتگو</h2>
        <p className="text-gray-600">
          {patient ? `گفتگو با ${patient.name}` : 'لطفاً یک بیمار را انتخاب کنید'}
        </p>
      </div>

      <div className="card p-0 overflow-hidden">
        <div className="bg-primary-600 text-white p-4">
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                {patient ? patient.name : 'انتخاب بیمار'}
              </h3>
              <p className="text-sm text-primary-100">
                {patient ? 'آنلاین' : 'لطفاً از لیست بیماران یک نفر را انتخاب کنید'}
              </p>
            </div>
          </div>
        </div>

        <div className="h-96 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'therapist' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'therapist'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-900 border border-gray-200'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'therapist' ? 'text-primary-100' : 'text-gray-500'
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
          <div className="flex space-x-2 space-x-reverse">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="پیام خود را بنویسید..."
              className="flex-1 input-field"
              disabled={!patient}
            />
            <button
              type="submit"
              disabled={!patient || !inputMessage.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ChatInterface

