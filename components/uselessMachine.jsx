"use client";
import React, { useState } from "react";
import Switch from "react-switch";
import useSound from "use-sound";

const UselessMachine = () => {
  const [totalSwitches, setTotalSwitches] = useState(8);
  const initialSwitchStates = new Array(totalSwitches).fill(false);
  const [switches, setSwitches] = useState(initialSwitchStates);
  const [play] = useSound("/Sound.mp3");

  const toggleSwitch = (index) => {
    play();
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);

    if (newSwitches.every((switchState) => switchState)) {
      setSwitches(initialSwitchStates);
    }
  };

  const handleSwitchesChange = (event) => {
    const newTotalSwitches = parseInt(event.target.value, 10);
    const limitedTotalSwitches = isNaN(newTotalSwitches)
      ? 1
      : Math.min(newTotalSwitches, 28);
    setTotalSwitches(limitedTotalSwitches);
    setSwitches(new Array(limitedTotalSwitches).fill(false));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="mb-6 text-center">
        <label className="block text-white text-2xl font-semibold mb-2">
          How Many Switches Do You Want to Play With?
        </label>
        <input
          type="number"
          value={totalSwitches}
          onChange={handleSwitchesChange}
          className="appearance-none w-16 py-2 px-3 text-gray-800 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {switches.map((isOn, index) => (
          <div
            key={index}
            onClick={() => toggleSwitch(index)}
            className="flex items-center justify-center w-16 h-16 transition duration-300 bg-gray-300 hover:filter hover:brightness-90 rounded-md"
          >
            <Switch
              checked={isOn}
              onChange={() => {}}
              offColor="#ff4c4c"
              onColor="#4caf50"
              offHandleColor="#fff"
              onHandleColor="#fff"
              handleDiameter={24}
              uncheckedIcon={false}
              checkedIcon={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UselessMachine;
