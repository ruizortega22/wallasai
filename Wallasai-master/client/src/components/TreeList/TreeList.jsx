import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getPlants from "../../api/fetch_plants";
import "./TreeList.scss";

const TreeList = () => {
  useEffect(() => {
    formatPlants();
  }, []);

  const [plants, setPlants] = useState([]);

  const formatPlants = async () => {
    const plantdb = await getPlants();
    setPlants(plantdb.data.plants);
  };

  const trees = plants.filter(plant => plant.specie == "Tree")
  
  return (
    <div className="trees_container">
      <ul className="treesList">
        {trees.map((plant) => {
          return (
            <li key={JSON.stringify(plant)} className="li_tree">
              <div className="treeList__item">
               
              <Link to = {`/detail?plantName=${plant.name}`} >
                <img  className="img_card" src={plant.img} alt={plant.name}/>
                </Link>
                <h2>{plant.name}</h2>
                <p className="price_card" >{plant.price}</p>
                
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TreeList;

