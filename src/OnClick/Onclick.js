import { useState,useEffect} from "react";
import axios from "axios";
import './Onclick.css'



export default function OnClick(){


  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setImageUrl(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [imageUrl]);

  return (
    <div>
      <img 
      height={200}
      src={imageUrl} alt="dog" />
    </div>
  );
}
             
    