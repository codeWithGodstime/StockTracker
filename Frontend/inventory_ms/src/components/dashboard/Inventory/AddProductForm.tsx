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


const productSchema = z.object({
  productName: z.string().min(3, {
    message: "Product name must be at least 3 characters.",
  }),
  category: z.string().min(3, {
    message: "Category must be at least 3 characters.",
  }),
  buyingPrice: z.number().positive({
    message: "Buying price must be a positive number.",
  }),
  quantity: z.number().int().positive({
    message: "Quantity must be a positive integer.",
  }),
  unit: z.string().min(1, {
    message: "Unit is required.",
  }),
  expiryDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Expiry date must be a valid date in ISO 8601 format.",
    }),
  threshold: z.number().nonnegative({
    message: "Threshold must be a non-negative number.",
  }),
});

const AddProductForm = () => {

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: "",
      category: "",
      buyingPrice: 0,
      quantity: 0,
      unit: "",
      expiryDate: "",
      threshold: 0,
    },
  });

  function onSubmit(values: z.infer<typeof productSchema>) {
    console.log(values); // Handle form submission
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Product Name */}
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter product name"
                  {...field}
                />
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
                <Input
                  placeholder="Enter unit (e.g., kg, liter)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Expiry Date */}
        <FormField
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expiry Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  placeholder="Enter expiry date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Threshold */}
        <FormField
          control={form.control}
          name="threshold"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Threshold</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter threshold value"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default AddProductForm