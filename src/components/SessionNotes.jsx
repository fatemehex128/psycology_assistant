import React, { useState } from 'react'

function SessionNotes({ patient }) {
  const [notes, setNotes] = useState([
    {
      id: 1,
      date: '1403/01/15',
      title: 'جلسه اول - ارزیابی اولیه',
      content: 'بیمار علائم اضطراب و استرس را گزارش کرد. نیاز به جلسات منظم دارد.',
      tags: ['اضطراب', 'ارزیابی'],
    },
    {
      id: 2,
      date: '1403/01/22',
      title: 'جلسه دوم - صحبت در مورد خانواده',
      content: 'بحث در مورد روابط خانوادگی و تأثیر آن بر وضعیت روانی بیمار.',
      tags: ['خانواده', 'روابط'],
    },
  ])

  const [newNote, setNewNote] = useState({ title: '', content: '', tags: '' })
  const [showAddForm, setShowAddForm] = useState(false)

  const handleAddNote = (e) => {
    e.preventDefault()
    if (newNote.title && newNote.content) {
      const note = {
        id: notes.length + 1,
        date: new Date().toLocaleDateString('fa-IR'),
        title: newNote.title,
        content: newNote.content,
        tags: newNote.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      }
      setNotes([note, ...notes])
      setNewNote({ title: '', content: '', tags: '' })
      setShowAddForm(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">یادداشت‌های جلسات</h2>
          <p className="text-gray-600">
            {patient ? `یادداشت‌های ${patient.name}` : 'مدیریت یادداشت‌های جلسات درمانی'}
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="btn-primary"
        >
          + یادداشت جدید
        </button>
      </div>

      {showAddForm && (
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">افزودن یادداشت جدید</h3>
          <form onSubmit={handleAddNote} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                عنوان
              </label>
              <input
                type="text"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                className="input-field"
                placeholder="عنوان یادداشت"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                محتوا
              </label>
              <textarea
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                className="input-field"
                rows="6"
                placeholder="محتوا و جزئیات جلسه..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                برچسب‌ها (با کاما جدا کنید)
              </label>
              <input
                type="text"
                value={newNote.tags}
                onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
                className="input-field"
                placeholder="مثال: اضطراب، خانواده، روابط"
              />
            </div>
            <div className="flex space-x-2 space-x-reverse">
              <button type="submit" className="btn-primary">
                ذخیره
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false)
                  setNewNote({ title: '', content: '', tags: '' })
                }}
                className="btn-secondary"
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="card">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {note.title}
                </h3>
                <p className="text-sm text-gray-500">{note.date}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{note.content}</p>
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SessionNotes

