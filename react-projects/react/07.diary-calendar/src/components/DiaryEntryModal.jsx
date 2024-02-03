import React, { useState, useEffect } from 'react';

const DiaryEntryModal = ({ onSave, onClose, selectedDay, currentEntry }) => {
  const [entry, setEntry] = useState('');

  useEffect(() => {
    // Pre-populate the modal if editing an existing entry
    setEntry(currentEntry);
  }, [currentEntry, selectedDay]);

  const handleSave = () => {
    onSave(selectedDay, entry);
    setEntry('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-xl p-5 w-1/2" onClick={(e) => e.stopPropagation()}>
        <textarea
          className="w-full h-40 p-2 border border-gray-300 rounded"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <div className="mt-4 flex justify-between space-x-3">
          <button className="bg-green-400 text-white px-4 py-2" onClick={handleSave}>Save</button>
          <button className="bg-rose-700 text-white px-4 py-2" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DiaryEntryModal;
