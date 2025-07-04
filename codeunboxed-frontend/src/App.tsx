import React from "react";
import CodeInput from "./components/CodeInput";

function App() {
  const handleExplain = (payload) => {
    console.log("User submitted:", payload);
    // We will call the backend in next step
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>CodeUnboxed 💡</h1>
      <CodeInput onSubmit={handleExplain} />
    </div>
  );
}

export default App;
