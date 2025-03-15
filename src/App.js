import "./styles.css";

import { useState } from "react";

/*
Resim kaynağı 'https://robohash.org/input-string' adresindedir. Robohash, herhangi bir metin için benzersiz resimler sağlar. Örneğin, tarayıcınıza https://robohash.org/hello yazın ve sol taraftaki resmi göreceksiniz. Başka bir dize yazın, farklı bir resim göreceksiniz.
*/

function App() {
  const [inputVal, setInputVal] = useState("");
  const [arr, setArr] = useState([]);

  function handleClick() {
    if (arr.includes(inputVal) === false) {
      arr.push(inputVal);
      setInputVal("");
    } //array'e link ekleyip inputu eski haline geri döndürmek için
    else {
      alert("Robot listede bulunmakta!");
    }
  }

  function handleRemove(index) {
    setArr((prev) => prev.filter((_, i) => i !== index)); // seçilen resmi kaldırmak için
  }

  return (
    <div className="m-[20px] flex flex-col  items-center">
      <div>
        <input
          type="text"
          className=" border border-black"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />{" "}
        <button onClick={handleClick} className="bg-gray-400 px-3">
          Enter
        </button>
      </div>{" "}
      <div className="flex flex-col items-center ">
        <h1 className="font-bold text-3xl ">Robot List</h1>
        <RobotList robot={arr} onRemove={handleRemove} />
      </div>
    </div>
  );
}

const RobotList = (props) => {
  const handleRemoveClick = (index) => {
    props.onRemove(index);
  };

  return (
    <div className="flex flex-wrap  gap-x-3 gap-y-2">
      {props.robot.map((robot, index) => (
        <div key={index} className="flex flex-col items-center basis-1/4 ">
          <img
            src={`https://robohash.org/${robot}`}
            alt={`Robot for ${robot}`}
            onClick={() => handleRemoveClick(index)}
            className="cursor-pointer border border-gray-300"
          />
          <button
            onClick={() => handleRemoveClick(index)}
            className="mt-2 bg-red-500 text-white px-2 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default App;
