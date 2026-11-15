import { cse, asArray, toRow } from "@/lib/cse";
import StocksExplorer from "@/components/StocksExplorer";

export const revalidate = 30;

export default async function Stocks() {
  const rows = asArray(await cse("todaySharePrice")).map(toRow).filter((r) => r.symbol);

  console.log('rows', rows);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">All stocks</h1>
      {rows.length ? <StocksExplorer rows={rows} /> : <p className="text-muted">No price data returned right now. Try again when the market is open.</p>}
    </div>
  );
}
