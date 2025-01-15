
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CardTable from "../CardTable";
import AddOrderForm from "./AddOrderForm";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@radix-ui/react-separator";
import { useQuery } from "@tanstack/react-query";

const dummyData = [
    {
        "quantity": null,
        "amount": "14",
        "date": "Last 7 days",
        "text": null,
        "title": "Categories"
    },
    {
        "quantity": "868",
        "amount": "25000",
        "date": "Last 7 days",
        "title": "Total Products",
        "text": "Revenue"
    },
    {
        "quantity": "5",
        "amount": "25000",
        "date": "Last 7 days",
        "title": "Top Selling",
        "text": "Cost"
    },
    {
        "quantity": "12",
        "amount": "2",
        "date": "Ordered",
        "title": "Low Stocks",
        "text": "Not in stock"
    },
]


const orderData = [
    {
        product: "Laptop",
        order_value: "$899.99",
        quantity: 25,
        orderId: "ORD001",
        expected_delivery: "2025-06-15",
        status: "In-stock",
    },
    {
        product: "Smartphone",
        order_value: "$499.99",
        quantity: 50,
        orderId: "ORD002",
        expected_delivery: "2025-09-01",
        status: "Limited",
    },
    {
        product: "Wireless Headphones",
        order_value: "$199.99",
        quantity: 75,
        orderId: "ORD003",
        expected_delivery: "2025-12-20",
        status: "In-stock",
    },
    {
        product: "Tablet",
        order_value: "$299.99",
        quantity: 40,
        orderId: "ORD004",
        expected_delivery: "2026-03-05",
        status: "Out-of-stock",
    },
    {
        product: "Smartwatch",
        order_value: "$149.99",
        quantity: 60,
        orderId: "ORD005",
        expected_delivery: "2025-11-30",
        status: "In-stock",
    },
];

export const OrderOverviewLoader = () => {
    return (
        <Skeleton className="w-full h-full">
            {/* Skeleton for the Sales Overview Header */}
            <Skeleton className="w-full h-8 mb-4 rounded" />

            {/* Skeleton for the content area */}
            <div className="flex items-center gap-5">
                {/* Placeholder for each item in the SalesOverview */}
                {Array(4).fill(null).map((_, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4 w-full">
                        {/* Skeleton for the icon */}
                        <Skeleton className="w-16 h-16 rounded-full" />
                        {/* Skeleton for the text */}
                        <Skeleton className="w-20 h-6" />
                        <Skeleton className="w-16 h-6" />
                    </div>
                ))}
            </div>
        </Skeleton>
    );
};


const Order = () => {
    const { isLoading, isError, error } = useQuery({
        queryKey: ["inventory"],
        queryFn: () =>
            new Promise((resolve) =>
                setTimeout(() => resolve({ overview: "Order Data Loaded!" }), 2000)
            ),
    });

    if (isLoading) {
        return <OrderOverviewLoader />;
    }

    if (isError) {
        return <span>Error: {error?.message || "Something went wrong!"}</span>;
    }

    return (
        <div className="space-y-5">
            <Card>
                <CardHeader>
                    <CardTitle>Overall Order</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-5 mt-3 justify-evenly">
                    {
                        dummyData.map((data, index) => (
                            <div key={index} className="flex items-center gap-5">
                                <div className="text-center flex flex-col items-center space-y-4">
                                    <div className="flex space-x-4 items-center">
                                        <span>{data.amount}</span>
                                        <span>{data.text}</span>
                                    </div>
                                </div>

                                {/* Ensure the separator spans full height of the container */}
                                {index !== dummyData.length - 1 && (
                                    <Separator orientation="vertical" className="bg-gray-500 text-gray-600 h-full" />
                                )}
                            </div>
                        ))
                    }
                </CardContent>
            </Card>


            <CardTable table_title={"Orders"} table_body={orderData} table_heading={["Products", "Order Value", "Quantity", "Order ID", "Expected Delivery", "Status"]} form={<AddOrderForm />} />

        </div>
    );
};

export default Order;




