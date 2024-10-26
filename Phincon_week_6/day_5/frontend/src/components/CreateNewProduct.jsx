import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const CreateNewProduct = ({ setOpen }) => {
  const [open, setISOpen] = useState(true);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productStock, setProductStock] = useState(0);
  const [productCategory, setProductCategory] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productName === "" || productPrice <= 0 || productStock < 0) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const newProduct = {
      nameProduct: productName,
      descriptionProduct: productDescription,
      priceProduct: productPrice,
      stockProduct: productStock,
      idCategorie: productCategory,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    console.log(newProduct, "< ini product");

    dispatch({ type: "FETCH PRODUCTS", payload: newProduct });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="bg-green-500">Create New Product</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Form Product</DialogTitle>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <Label>Name :</Label>
              <Input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
              <br />
              <Label>Price :</Label>
              <Input
                type="text"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
              <br />
              <Label>Category :</Label>
              <Input
                type="text"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              />
              <br />
              <Label>Stock :</Label>
              <Input
                type="text"
                value={productStock}
                onChange={(e) => setProductStock(e.target.value)}
                required
              />
              <br />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNewProduct;
