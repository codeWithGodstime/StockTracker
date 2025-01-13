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
        "icon": "/Sales.png",
        "text": "Sales"
    },
    {
        "amount": "18,300",
        "icon": "/Revenue.png",
        "text": "Revenue"
    },
    {
        "amount": "832",
        "icon": "/Profit.png",
        "text": "Profit"
    },
    {
        "amount": "17,432",
        "icon": "/Cost.png",
        "text": "Cost"
    },
]

export const SalesOverviewLoader = () => {
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


const SalesOverview = () => {
    const { isLoading, isError, error } = useQuery({
        queryKey: ["salesOverview"],
        queryFn: () =>
            new Promise((resolve) =>
                setTimeout(() => resolve({ overview: "Sales Data Loaded!" }), 2000)
            ),
    });

    if (isLoading) {
        return <SalesOverviewLoader />;
    }

    if (isError) {
        return <span>Error: {error?.message || "Something went wrong!"}</span>;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
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

export default SalesOverview;
