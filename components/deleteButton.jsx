const DeleteButton = ({ onClick }) => {
  return (
    <button
      className=" bg-yellow-500 rounded-md absolute top-4 right-4 cursor-pointer transition-colors hover:bg-yellow-600 sm:w-32 sm:h-16 sm:text-lg md:w-40 md:h-16 md:text-lg lg:w-44 lg:h-16 lg:text-xl xl:w-48 xl:h-16 xl:text-xl"
      onClick={onClick}
    >
      Delete All Boxes
    </button>
  );
};

export default DeleteButton;
