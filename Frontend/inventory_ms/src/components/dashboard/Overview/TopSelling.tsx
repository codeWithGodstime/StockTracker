import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const invoices = [
    {
        name: "INV001",
        soldQuantity: "Paid",
        remainingQuantity: "$250.00",
        price: "Credit Card",
    },
    {
        name: "INV001",
        soldQuantity: "Paid",
        remainingQuantity: "$250.00",
        price: "Credit Card",
    },
    {
        name: "INV001",
        soldQuantity: "Paid",
        remainingQuantity: "$250.00",
        price: "Credit Card",
    },
    {
        name: "INV001",
        soldQuantity: "Paid",
        remainingQuantity: "$250.00",
        price: "Credit Card",
    },

]

export function TopSellingStock() {
    return (
        <Card>
            <CardHeader className="flex gap-2 justify-between">
                <CardTitle className="inline">Top Selling Stock</CardTitle>

                <Button className="inline">Weekly</Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices.map((invoice) => (
                            <TableRow key={invoice.name}>
                                <TableCell className="font-medium">{invoice.name}</TableCell>
                                <TableCell>{invoice.soldQuantity}</TableCell>
                                <TableCell>{invoice.remainingQuantity}</TableCell>
                                <TableCell className="text-right">{invoice.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
