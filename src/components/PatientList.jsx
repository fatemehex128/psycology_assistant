import React, { useState } from 'react'

function PatientList({ onSelectPatient }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [patients, setPatients] = useState([
    { id: 1, name: 'علی احمدی', age: 32, lastSession: '2 روز پیش', status: 'active' },
    { id: 2, name: 'سارا محمدی', age: 28, lastSession: '1 هفته پیش', status: 'active' },
    { id: 3, name: 'محمد رضایی', age: 45, lastSession: '3 روز پیش', status: 'active' },
    { id: 4, name: 'فاطمه کریمی', age: 35, lastSession: '1 ماه پیش', status: 'inactive' },
    { id: 5, name: 'حسن نوری', age: 29, lastSession: '5 روز پیش', status: 'active' },
  ])
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    phone: '',
    status: 'active'
  })

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddPatient = (e) => {
    e.preventDefault()
    if (newPatient.name && newPatient.age) {
      const patient = {
        id: patients.length + 1,
        name: newPatient.name,
        age: parseInt(newPatient.age),
        phone: newPatient.phone,
        lastSession: 'جلسه‌ای برگزار نشده',
        status: newPatient.status
      }
      setPatients([...patients, patient])
      setNewPatient({ name: '', age: '', phone: '', status: 'active' })
      setShowAddForm(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">لیست بیماران</h2>
          <p className="text-gray-600">مدیریت و مشاهده اطلاعات بیماران</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary"
        >
          {showAddForm ? 'لغو' : '+ بیمار جدید'}
        </button>
      </div>

      {showAddForm && (
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">افزودن بیمار جدید</h3>
          <form onSubmit={handleAddPatient} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                نام و نام خانوادگی *
              </label>
              <input
                type="text"
                value={newPatient.name}
                onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                className="input-field"
                placeholder="مثال: علی احمدی"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                سن *
              </label>
              <input
                type="number"
                value={newPatient.age}
                onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                className="input-field"
                placeholder="مثال: 25"
                min="1"
                max="120"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                شماره تلفن
              </label>
              <input
                type="tel"
                value={newPatient.phone}
                onChange={(e) => setNewPatient({ ...newPatient, phone: e.target.value })}
                className="input-field"
                placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                وضعیت
              </label>
              <select
                value={newPatient.status}
                onChange={(e) => setNewPatient({ ...newPatient, status: e.target.value })}
                className="input-field"
              >
                <option value="active">فعال</option>
                <option value="inactive">غیرفعال</option>
              </select>
            </div>
            <div className="md:col-span-2 flex space-x-2 space-x-reverse pt-4">
              <button type="submit" className="btn-primary">
                افزودن بیمار
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false)
                  setNewPatient({ name: '', age: '', phone: '', status: 'active' })
                }}
                className="btn-secondary"
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="card">
        <div className="mb-4">
          <input
            type="text"
            placeholder="جستجوی بیمار..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-right py-3 px-4 font-semibold text-gray-700">نام</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">سن</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">آخرین جلسه</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">وضعیت</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold">
                          {patient.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium text-gray-900">{patient.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{patient.age} سال</td>
                  <td className="py-4 px-4 text-gray-600">{patient.lastSession}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      patient.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {patient.status === 'active' ? 'فعال' : 'غیرفعال'}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => onSelectPatient(patient)}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      مشاهده جزئیات
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PatientList

