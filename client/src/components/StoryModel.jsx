import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

const StoryModel = ({ setShowModal, fetchStories }) => {
  const bgColors = [
    "#4f46e5",
    "#7c3aed",
    "#db2777",
    "#e11d48",
    "#ca8a04",
    "#0d9488",
  ];
  const [mode, setmode] = useState("text");
  const [background, setBackground] = useState(bgColors[0]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleCreateStory = async () => {};

  return (
    <div className="fixed inset-0 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center z-110 p-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => setShowModal(false)}
          className="text-white p-2 cursor-pointer"
        >
          <ArrowLeft />
        </button>
        <h2 className="text-lg font-semibold">Create Story</h2>
        <span className="w-10"> </span>
      </div>
    </div>
  );
};

export default StoryModel;
