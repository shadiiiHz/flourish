import { Plus } from "lucide-react";
import ProductImageSlider from "./ProductImageSlider";
import type { MenuItem } from "../config/siteConfig";

function ProductCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex snap-start flex-col overflow-hidden rounded-[1.75rem] border border-sand-50 bg-white shadow-[0_16px_40px_-24px_rgba(138,84,39,0.35)]">
      <ProductImageSlider images={item.images} alt={item.title} />

      <div className="flex flex-1 flex-col gap-1 px-3 pt-3">
        <h3 className="font-display text-sm font-bold text-cocoa-900 sm:text-[15px]">
          {item.title}
        </h3>
        <p className="truncate text-xs text-cocoa-500">{item.description}</p>
      </div>

      <div className="flex items-center justify-between px-3 pb-3 pt-2 sm:pb-4">
        <span className="text-sm font-bold text-sand-400 sm:text-[15px]">
          {item.price > 0 ? `${item.price.toLocaleString("fa-IR")} تومان` : "به‌زودی"}
        </span>
        <button
          type="button"
          aria-label={`افزودن ${item.title}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand-400 text-white shadow-[0_10px_20px_-8px_rgba(186,107,38,0.6)] transition-transform hover:scale-105 active:scale-95"
        >
          <Plus className="h-4.5 w-4.5" />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
