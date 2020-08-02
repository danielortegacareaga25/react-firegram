import React from "react";

import UploadForm from "./components/UploadForm";
import Title from "./components/Title";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
