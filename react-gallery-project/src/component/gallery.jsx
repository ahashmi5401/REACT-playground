import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Cards from "./cards.jsx";

const Gallery = () => {
  const [userData, setuserData] = useState(" ");
  const [index, setindex] = useState(1)
  function handlePrev(){
    if(index>0){
      setindex(index-1)
    }
  }
  function handleNext(){
    setindex(index+1)
  }

  useEffect(() => {
    fetchUserData(index);
  }, [index]);

  async function fetchUserData(index) {
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${index}&limit=30`
      );
      const data = await response.json();
      setuserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  

  return (
    <div className="w-full min-h-screen">
      {/* Grid */}
      <Cards userData={userData} />

      {/* Buttons (UI only) */}
      <Buttons handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  );
};

export default Gallery