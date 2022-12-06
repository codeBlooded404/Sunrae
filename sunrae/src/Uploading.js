//https://www.npmjs.com/package/uuid

/*
import "./Uploading.css";
// import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { storage } from "./firebaseStorage";
//to randomize letters after image name
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  //   list,
} from "firebase/storage";
import Header from "./Header";

function Uploading() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imagesListRef = ref(storage, "images/");

  const uploadImage = () => {
    //if nothing uploaded jump out
    if (imageUpload == null) return;

    //use firebase - add random letters after image name to prevent duplicate names
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    //upload now to firebase
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      alert("Image uploaded");
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  //to display on screen
  useEffect(() => {
    //list of all products in images folder
    listAll(imagesListRef).then((response) => {
      //console.log(response)
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          //add to list
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <img
        className="home__image"
        src={process.env.PUBLIC_URL + "images/banner1.jpg"}
      />

      <Link to="/">
        <img
          className="header__logo"
          src={process.env.PUBLIC_URL + "images/logo.jpg"}
          alt="logo"
        />
      </Link>
      <input
        className="form-control mt-5"
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button
        className="btn btn-outline-success mt-3 btn-md mybtn"
        onClick={uploadImage}
      >
        Click to Upload Image
      </button>

      {/* {imageList.map((url) => {
        return <img src={url} />;
      })} */

/*
    </div>
  );
}

export default Uploading;
*/
