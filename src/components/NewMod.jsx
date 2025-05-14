const NewMod = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-100">
        <h2 className="text-xl font-bold mb-4">Edit Avatar</h2>
      <label>Enter First Name :</label>
       <input type="text" name="firstname" placeholder="Enter First Name" className="text-center border rounded border-gray-400 ms-2 me-2"/>
       <br></br> <br></br>
       <label>Enter Last Name :</label>
       <input type="text" name="firstname" placeholder="Enter Last Name" className="text-center border rounded  border-gray-400 ms-2 me-2"/>
       <br></br> <br></br>
      
        <button
          className="mt-2  ps-4 pe-4 pt-1 pb-1 bg-red-500 text-white  hover:bg-red-800 transition
          cursor-pointer border rounded-2xl float-end ms-1 me-1"
          onClick={onClose}
        >
          Close
        </button>
          <button
          className="mt-2  ps-4 pe-4 pt-1 pb-1 bg-green-500 text-white  hover:bg-green-800 transition
          cursor-pointer border rounded-2xl float-end ms-1 me-1"
          onClick={onClose}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default NewMod;
