import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function ProductDetail() {
  return (
    <Tabs defaultValue="overview" className="bg-white">
      <TabsList className="grid w-full grid-cols-4 py-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="purchases">Purchases</TabsTrigger>
        <TabsTrigger value="adjustments">Adjustments</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="px-12 py-4 grid grid-cols-[2fr_1fr] gap-5">
        <div className=" bg-white w-full space-y-12">
          {/* primary details */}
          <div className="">
            <h3 className="font-bold text-gray-900 mb-5">Primary Details</h3>
            <div className="grid grid-cols-1 gap-7">
              <div className="flex justify-between ">
                <h4 className="font-light">{""}Product name</h4>
                <p>{""}Maggi</p>
              </div>

              <div className="flex justify-between ">
                <h4 className="font-light">{""}Product ID</h4>
                <p>{""}46000</p>
              </div>

              <div className="flex justify-between ">
                <h4 className="font-light">{""}Product Category</h4>
                <p>{""}Maggi</p>
              </div>

              <div className="flex justify-between ">
                <h4 className="font-light">{""}Expiry Date</h4>
                <p>{""}12/4/23</p>
              </div>

              <div className="flex justify-between ">
                <h4 className="font-light">{""}Threshold Value</h4>
                <p>{""}12</p>
              </div>
            </div>
          </div>

          {/* supplier Details */}
          <div>
            <h3 className="font-bold text-gray-900 mb-5">Supplier Details</h3>
            <div className="grid grid-cols-1 gap-7">
              <div className="flex justify-between ">
                <h4 className="font-light">{""}Supplier name</h4>
                <p>{""}Ronald Martin</p>
              </div>

              <div className="flex justify-between ">
                <h4 className="font-light">{""}Contact Number</h4>
                <p>{""}9399992993</p>
              </div>
            </div>
          </div>

          {/* stock */}
          <div className="">
          <h3 className="font-bold text-gray-900 mb-5">Stock Locations</h3>
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead>Store Name</TableHead>
                  <TableHead className="text-right">Stock in hand</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-light">INV001</TableCell>
                  <TableCell className="text-right font-light">Paid</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

        </div>

        <div className="justify-self-center space-y-10">
          <span className="p-2 rounded-md border border-dashed inline-block"><img src="/noodles-maggi.png" /></span>

          <div className="grid grid-cols-1 gap-7">
              <div className="flex justify-between ">
                <h4 className="font-light">{""}Opening Stock</h4>
                <p>{""}40</p>
              </div>

              <div className="flex justify-between ">
                <h4 className="font-light">{""}Remaining Stock</h4>
                <p>{""}34</p>
              </div>

              <div className="flex justify-between ">
                <h4 className="font-light">{""}On the way</h4>
                <p>{""}15</p>
              </div>

              <div className="flex justify-between ">
                <h4 className="font-light">{""}Threshold Value</h4>
                <p>{""}12</p>
              </div>

            </div>
        </div>
      </TabsContent>


      <TabsContent value="purchases">
        <div>

        </div>
      </TabsContent>
    </Tabs>
  )
}
