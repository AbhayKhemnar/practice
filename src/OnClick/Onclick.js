import { useState,useEffect} from "react";
import './Onclick.css'



export default function OnClick(){


  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message);
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
             
    
