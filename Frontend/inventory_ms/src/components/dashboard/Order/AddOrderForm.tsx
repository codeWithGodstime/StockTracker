import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const orderSchema = z.object({
  productName: z.string().min(3, {
    message: "Product name must be at least 3 characters.",
  }),
  category: z.string().min(3, {
    message: "Category must be at least 3 characters.",
  }),
  orderValue: z.number().positive({
    message: "Order value must be a positive number.",
  }),
  quantity: z.number().int().positive({
    message: "Quantity must be a positive integer.",
  }),
  unit: z.string().min(1, {
    message: "Unit is required.",
  }),
  buyingPrice: z.number().positive({
    message: "Buying price must be a positive number.",
  }),
  dateOfDelivery: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Date of delivery must be a valid date in ISO 8601 format.",
    }),
  notifyOnDateOfDelivery: z.boolean().optional(),
});


const AddOrderForm = () => {
  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      productName: "",
      category: "",
      orderValue: 0,
      quantity: 0,
      unit: "",
      buyingPrice: 0,
      dateOfDelivery: "",
      notifyOnDateOfDelivery: false,
    },
  });

  function onSubmit(values: z.infer<typeof orderSchema>) {
    console.log(values); // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Product Name */}
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter product name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Category */}
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Enter category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Order Value */}
        <FormField
          control={form.control}
          name="orderValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Order Value</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter order value"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quantity */}
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter quantity"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Unit */}
        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <FormControl>
                <Input placeholder="Enter unit (e.g., kg, liter)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Buying Price */}
        <FormField
          control={form.control}
          name="buyingPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Buying Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter buying price"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Delivery */}
        <FormField
          control={form.control}
          name="dateOfDelivery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Delivery</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Notify on Date of Delivery */}
        <FormField
          control={form.control}
          name="notifyOnDateOfDelivery"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notify on Date of Delivery</FormLabel>
              <FormControl>
                <input
                  type="checkbox"
                  checked={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddOrderForm;
