const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
     
      <div
        className="absolute inset-0  backdrop-blur-sm"
        onClick={onClose}
      ></div>

     
      <div className="relative bg-white rounded-lg shadow-lg w-11/12 max-w-md mx-auto p-6 z-10">
     
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl transition-discrete"
          onClick={onClose}
        >
          &times;
        </button>

      
        <h2 className="text-xl font-bold mb-4">Create New Avatar</h2>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum expedita aperiam est temporibus fuga magni? Temporibus nihil aspernatur perspiciatis iusto ducimus corporis debitis fugiat, nesciunt quasi omnis aut alias.</p>
        <br></br>
          <label>Enter First Name :</label>
       <input type="text" name="firstname" placeholder="Enter First Name" className="text-center border rounded border-gray-400 ms-2 me-2"/>
        <br></br> <br></br>
          <label>Enter Last Name :</label>
       <input type="text" name="lastname" placeholder="Enter Last Name" className="text-center border rounded border-gray-400 ms-2 me-2"/>
       <br></br> <br></br>
         <label>Choose Avatar :</label>
       <input type="file"  className="text-center border rounded border-gray-400  w-50  ms-5 me-2"/>
       <br></br>
      
        <button className="bg-red-600 ps-4 pe-4 pt-1 pb-1 border rounded-2xl text-end text-white mt-5 mb-0
        cursor-pointer float-end  hover:bg-red-800 transition ms-1 me-1"  onClick={onClose}>Close</button>
           <button className="bg-green-600 ps-4 pe-4 pt-1 pb-1 border rounded-2xl text-end text-white mt-5 mb-0
        cursor-pointer float-end  hover:bg-green-800 transition ms-1 me-1"  onClick={onClose}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
