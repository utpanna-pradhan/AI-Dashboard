import { useState } from 'react';
import Header from './components/Header';
import AvatarList from './components/AvatarList';
import Modal from './components/Modal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Header username="John Doe" />
      <AvatarList />

      {/* Floating Button */}
      <button
        className="cursor-pointer fixed bottom-6 right-6 bg-blue-950 text-white rounded-full p-4 shadow-lg hover:bg-green-500 transition animate-bounce"
        onClick={() => setIsModalOpen(true)}
      >
         Create New Avatar
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
