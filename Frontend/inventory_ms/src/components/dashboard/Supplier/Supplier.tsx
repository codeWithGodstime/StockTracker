import AddSupplierForm from "./Form";
import CardTable from "../CardTable";


const SupplierData = [
    {
        name: "Richard Martin",
        product: "Kit Kat",
        contact_number: "7687764556",
        email: "richard@gmail.com",
        type: "Taking Return",
        on_the_way: 12
    },
    {
        name: "Susan Johnson",
        product: "Pepsi",
        contact_number: "9876543210",
        email: "susan.johnson@example.com",
        type: "Not Taking Return",
        on_the_way: 8
    },
    {
        name: "James Anderson",
        product: "Doritos",
        contact_number: "8956234781",
        email: "james.anderson@example.com",
        type: "Taking Return",
        on_the_way: 15
    },
    {
        name: "Linda Smith",
        product: "Pringles",
        contact_number: "7894561230",
        email: "linda.smith@example.com",
        type: "Not Taking Return",
        on_the_way: 20
    },
    {
        name: "Robert Brown",
        product: "Coca Cola",
        contact_number: "8123456789",
        email: "robert.brown@example.com",
        type: "Taking Return",
        on_the_way: 10
    },
    {
        name: "Patricia Davis",
        product: "Twix",
        contact_number: "9056741238",
        email: "patricia.davis@example.com",
        type: "Not Taking Return",
        on_the_way: 7
    },
    {
        name: "John Wilson",
        product: "Sprite",
        contact_number: "9321456780",
        email: "john.wilson@example.com",
        type: "Taking Return",
        on_the_way: 18
    },
    {
        name: "Emma Taylor",
        product: "Mars",
        contact_number: "7012345678",
        email: "emma.taylor@example.com",
        type: "Not Taking Return",
        on_the_way: 5
    }
];

const Supplier = () => {
  return (
    <CardTable table_body={SupplierData} table_title="Suppliers" table_heading={["Name", "Product", "Contact Number", "Email", "Type", "On The Way"]} form={<AddSupplierForm />} />
  )
}

export default Supplier