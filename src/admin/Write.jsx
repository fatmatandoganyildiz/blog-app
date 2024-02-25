import React, { useRef, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { VscAdd } from "react-icons/vsc";
// import { useClickAway } from "@uidotdev/usehooks";

function Write() {
  const [file, setFile] = useState(null);
  const [images, setImages] = useState({ img: null });
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // const ref = useRef();

  // useClickAway(ref, () => {
  //   setIsOpen(false);
  // });

  let navigate = useNavigate();

  const uploadFile = async () => {
    const newFileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, `image/${newFileName}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await addDoc(collection(db, "posts"), {
            title,
            postText,
            categories,
            image: downloadURL,
            author: {
              name: auth.currentUser.email,
              id: auth.currentUser.uid,
              timeStamp: serverTimestamp(),
            },
          });
          console.log("Document added successfully");
        } catch (error) {
          console.error("Error adding document: ", error);
        }
      }
    );
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      if (file) {
        await uploadFile();
      }
      resetForm();
      navigate("/");
      console.log("Document added successfully");
      // setFile(null)
    } catch (err) {
      console.log(err);
    }
  };

  const resetForm = () => {
    setFile(null);
    setImages({ img: null });
    setTitle("");
    setPostText("");
    setCategories([]);
  };

  const handleIcon = () => {
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Tell Your Story</h1>
      <form onSubmit={handleAdd} className="space-y-4">
        <div className="relative">
          <input
            // ref={ref}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onClick={handleIcon}
            className="w-full px-4 py-2 border-none focus:outline-none rounded-md"
          />
          {/* {isOpen && (
            <VscAdd className="absolute top-1/2 transform -translate-y-1/2 right-3 text-pink-500" />
          )} */}
        </div>
        <div className="">
          <textarea
            placeholder="Your Story"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="w-full h-48 px-4 py-2 border-none focus:outline-none rounded-md resize-none"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Category</h2>
          <div className="flex space-x-4">
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={categories.includes("Life-Style")}
                onChange={() =>
                  setCategories((prevCategories) => [
                    ...prevCategories,
                    "Life-Style",
                  ])
                }
              />
              <span className="text-blue-500 font-semibold">Life-Style</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={categories.includes("Travel")}
                onChange={() =>
                  setCategories((prevCategories) => [
                    ...prevCategories,
                    "Travel",
                  ])
                }
              />
              <span className="text-green-500 font-semibold">Travel</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                checked={categories.includes("Health")}
                onChange={() =>
                  setCategories((prevCategories) => [
                    ...prevCategories,
                    "Health",
                  ])
                }
              />
              <span className="text-yellow-500 font-semibold">Health</span>
            </label>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Add an Image</h2>
          <input
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </form>
    </div>
  );
}

export default Write;
