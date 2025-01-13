
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { AddProductButton } from "./Form";
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

const productData = [
    {
        product: "INV001",
        buying_price: "Paid",
        quantity: "$250.00",
        threshhold_value: "Credit Card",
        expiry_date: "12/02/2024",
        availability: "In-stock"
    },
    {
        product: "INV001",
        buying_price: "Paid",
        quantity: "$250.00",
        threshhold_value: "Credit Card",
        expiry_date: "12/02/2024",
        availability: "In-stock"
    },
    {
        product: "INV001",
        buying_price: "Paid",
        quantity: "$250.00",
        threshhold_value: "Credit Card",
        expiry_date: "12/02/2024",
        availability: "In-stock"
    }

]

export const InventoryOverviewLoader = () => {
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


const Inventory = () => {
    const { isLoading, isError, error } = useQuery({
        queryKey: ["inventory"],
        queryFn: () =>
            new Promise((resolve) =>
                setTimeout(() => resolve({ overview: "Inventory Data Loaded!" }), 2000)
            ),
    });

    if (isLoading) {
        return <InventoryOverviewLoader />;
    }

    if (isError) {
        return <span>Error: {error?.message || "Something went wrong!"}</span>;
    }

    return (
        <div className="space-y-5">
            <Card>
                <CardHeader>
                    <CardTitle>Overall Inventory</CardTitle>
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


            <Card>
                <CardHeader className="grid grid-cols-2 gap-2 justify-between">
                    <CardTitle className="inline">Products</CardTitle>

                    <span className="flex justify-end space-x-3 gap-3">
                        <AddProductButton />
                        <Button className="inline">Filters</Button>
                        <Button className="inline">Download all</Button>
                    </span>
                </CardHeader>
                
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Products</TableHead>
                                <TableHead>Buying Price</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead className="text-right">Threshold Value</TableHead>
                                <TableHead className="text-right">Expiry Date</TableHead>
                                <TableHead className="text-right">Availability</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {productData.map((product) => (
                                <TableRow key={product.product}>
                                    <TableCell className="font-medium">{product.buying_price}</TableCell>
                                    <TableCell>{product.quantity}</TableCell>
                                    <TableCell>{product.threshhold_value}</TableCell>
                                    <TableCell className="text-right">{product.expiry_date}</TableCell>
                                    <TableCell className="text-right">{product.availability}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
    );
};

export default Inventory;




