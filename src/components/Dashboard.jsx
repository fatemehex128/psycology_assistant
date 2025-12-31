import React from 'react'

function Dashboard() {
  const stats = [
    { label: 'بیماران فعال', value: '24', icon: '👥', color: 'bg-blue-500' },
    { label: 'جلسات امروز', value: '8', icon: '📅', color: 'bg-green-500' },
    { label: 'یادداشت‌های جدید', value: '12', icon: '📝', color: 'bg-yellow-500' },
    { label: 'پیام‌های خوانده نشده', value: '5', icon: '💬', color: 'bg-red-500' },
  ]

  const recentActivities = [
    { patient: 'علی احمدی', action: 'جلسه جدید ثبت شد', time: '2 ساعت پیش' },
    { patient: 'سارا محمدی', action: 'یادداشت جدید اضافه شد', time: '4 ساعت پیش' },
    { patient: 'محمد رضایی', action: 'پیام جدید دریافت شد', time: '6 ساعت پیش' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">داشبورد</h2>
        <p className="text-gray-600">خوش آمدید! اینجا می‌توانید وضعیت کلی کار خود را مشاهده کنید.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">فعالیت‌های اخیر</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 space-x-reverse pb-4 border-b border-gray-200 last:border-0">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600">👤</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.patient}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">یادآوری‌ها</h3>
          <div className="space-y-3">
            <div className="p-4 bg-yellow-50 border-r-4 border-yellow-400 rounded">
              <p className="font-medium text-gray-900">جلسه با علی احمدی</p>
              <p className="text-sm text-gray-600">امروز ساعت 14:00</p>
            </div>
            <div className="p-4 bg-blue-50 border-r-4 border-blue-400 rounded">
              <p className="font-medium text-gray-900">بررسی یادداشت‌های هفته</p>
              <p className="text-sm text-gray-600">فردا صبح</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

