import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { Categorias } from "./components/Categorias";
import { Encabezado } from "./components/Encabezado";

function GiftExpertApp() {

  const [categories, setCategories] = useState([]);

  return (
    <div className="container">
      <Encabezado categories={categories} setCategories={ setCategories } />
      <AddCategory categories={categories} setCategories={ setCategories } />   
      <Categorias categories={categories} />
    </div>
  );
}
export default GiftExpertApp;