import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchRequest } from "./features/inventory/inventorySlice";
import CreateNewProduct from "./components/CreateNewProduct";
import { Button } from "./components/ui/button";

function App() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.inventory);

  useEffect(() => {
    dispatch(fetchRequest());
  }, []);

  useEffect(() => {
    // console.log(data);
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
      <div>
        <h2 style={{ color: "green" }}>Inventory Management</h2>
      </div>
      <div style={{ textAlign: "left" }}>
        {/* <button
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
          }}
          onClick={() => setOpen(true)}q
        >
          Create New Product
        </button> */}
        {/* <Button variant="outline" onClick={() => setOpen(true)}>
          Create new product
        </Button> */}
        <CreateNewProduct />
      </div>
      <DataTable columns={columns} data={data} pagination />

      {/* {open && <CreateNewProduct />} */}
    </>
  );
}

export default App;
