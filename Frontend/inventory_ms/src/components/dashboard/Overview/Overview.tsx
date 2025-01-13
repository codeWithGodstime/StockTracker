import { SalesAndPurchase } from "./SalesAndPurchase"
import { OrderSummary } from "./OrderSummary"
import {TopSellingStock} from "./TopSelling"
import LowQuantiyStock from "./LowQuantityStock"
import SalesOverview, { SalesOverviewLoader } from "./SalesOverview"
import InventoryOverview, { InventoryOverviewLoader } from "./InventorySummary"
import PurchaseOverview, { PurchaseOverviewLoader } from "./PurchaseOverview"
import ProductOverview, { ProductOverviewLoader } from "./ProductSummary"


const Overview = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">

            <SalesOverview />

            <InventoryOverview />

            <PurchaseOverview />

            <ProductOverview />

            <SalesAndPurchase />

            <OrderSummary />

            <TopSellingStock />

            <LowQuantiyStock />
        </div>
    )
}

export default Overview