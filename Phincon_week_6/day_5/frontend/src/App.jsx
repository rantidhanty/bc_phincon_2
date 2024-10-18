import { useEffect, useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "./features/inventory/inventorySlice";

function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  const columns = [
    {
      name: "id",
      selector: (row) => row.idProduct,
    },
    {
      name: "Name",
      selector: (row) => row.nameProduct,
    },
    {
      name: "Price",
      selector: (row) => row.priceProduct,
    },
    {
      name: "Stock",
      selector: (row) => row.stockProduct,
    },
    {
      name: "Category",
      selector: (row) => row.idCategorie,
    },
    {
      name: "Created",
      selector: (row) => row.createdAt,
    },
    {
      name: "Updated",
      selector: (row) => row.updatedAt,
    },
    {
      name: "Actions",
      cell: () => {
        return (
          <>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "5px",
                margin: "5px",
                borderRadius: "5px",
              }}
              onClick={() => alert("hallo")}
            >
              Edit
            </button>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "5px",
                margin: "5px",
                borderRadius: "5px",
              }}
            >
              Delete
            </button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          Create New Product
        </button>
      </div>

      <DataTable columns={columns} data={data} pagination />
    </>
  );
}

export default App;
