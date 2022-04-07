import React from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = React.useState<number[]>([]);

  const handleSelection = (index: number) => {
    let data = [...selected];

    if (data.length === 2) {
      data.push(index);
      data.splice(0, 1);
    } else {
      data.push(index);
    }

    if (selected.indexOf(index) > -1) {
      data = selected.filter((x) => x !== index);
    }

    setSelected(data);
  };

  return (
    <div className="App">
      {new Array(16).fill(null).map((x, index) => (
        <button
          style={{
            backgroundColor: selected.indexOf(index) > -1 ? "red" : "blue",
          }}
          key={`${index}`}
          onClick={() => handleSelection(index)}
        >{`Box ${index}`}</button>
      ))}
    </div>
  );
}

export default App;
