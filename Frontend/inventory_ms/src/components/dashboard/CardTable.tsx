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
import { AddButton } from "./AddModalTrigger";

type CardTableProp = {
    table_title: string,
    table_heading: string[],
    table_body: Record<string, any>[],
    form: React.ReactElement
}


const CardTable = (props: CardTableProp) => {
    return (
        <Card>
            <CardHeader className="grid grid-cols-2 gap-2 justify-between">
                <CardTitle className="inline">{props.table_title}</CardTitle>

                <span className="flex justify-end space-x-3 gap-3">
                    <AddButton form={props.form} text={`Add ${props.table_title}`} />
                    <Button variant={'outline'} className="inline">Filters</Button>
                    <Button variant={'outline'} className="inline">Download all</Button>
                </span>
            </CardHeader>

            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            {
                                props.table_heading.map((h) => (
                                    <>
                                        <TableHead >{h}</TableHead>
                                    </>
                                ))
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.table_body.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {Object.keys(row).map((key, cellIndex) => (
                                    <TableCell key={cellIndex}>{row[key]}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </CardContent>
        </Card>
    )
}

export default CardTable