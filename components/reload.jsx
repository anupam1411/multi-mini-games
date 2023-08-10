import { ReloadOutlined } from "@ant-design/icons";
const Reload = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="w-fit h-fit invert">
      Click here to Restart the Game:
      <button onClick={handleReload}>
        <ReloadOutlined className="text-2xl" />
      </button>
    </div>
  );
};

export default Reload;
