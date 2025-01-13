import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@radix-ui/react-separator";
import { useQuery } from "@tanstack/react-query";

const dummyData = [
    {
        "amount": "832",
        "icon": "/Purchase.png",
        "text": "Purchase"
    },
    {
        "amount": "13,573",
        "icon": "/Cost (1).png",
        "text": "Cost"
    },
    {
        "amount": "5",
        "icon": "/Cancel.png",
        "text": "Cancel"
    },
    {
        "amount": "17,432",
        "icon": "/Profit.png",
        "text": "Return"
    },
]

export const PurchaseOverviewLoader = () => {
    return (
        <Skeleton className="w-full h-full">
            {/* Skeleton for the Purchase Overview Header */}
            <Skeleton className="w-full h-8 mb-4 rounded" />
            
            {/* Skeleton for the content area */}
            <div className="flex items-center gap-5">
                {/* Placeholder for each item in the PurchaseOverview */}
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


const PurchaseOverview = () => {
    const { isLoading, isError, error } = useQuery({
        queryKey: ["PurchaseOverview"],
        queryFn: () =>
            new Promise((resolve) =>
                setTimeout(() => resolve({ overview: "Purchase Data Loaded!" }), 4000)
            ),
    });

    if (isLoading) {
        return <PurchaseOverviewLoader />;
    }

    if (isError) {
        return <span>Error: {error?.message || "Something went wrong!"}</span>;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Purchase Overview</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-5 mt-3 justify-evenly">
                {
                    dummyData.map((data, index) => (
                        <div key={index} className="flex items-center gap-5">
                            <div className="text-center flex flex-col items-center space-y-4">
                                <img src={data.icon} alt={data.text} />
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
    );
};

export default PurchaseOverview;
