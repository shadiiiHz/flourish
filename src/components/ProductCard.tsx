import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import ProductImageSlider from "./ProductImageSlider";
import ProductModal from "./ProductModal";
import type { MenuItem } from "../config/siteConfig";

function ProductCard({
  item,
  categoryTitle,
}: {
  item: MenuItem;
  categoryTitle?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="flex snap-start flex-row overflow-hidden rounded-[1.5rem] border border-sand-50 bg-white shadow-[0_16px_40px_-24px_rgba(138,84,39,0.35)] sm:flex-col sm:rounded-[1.75rem]">
        <div onClick={() => setOpen(true)} className="w-28 shrink-0 cursor-pointer sm:w-full">
          <ProductImageSlider
            images={item.images}
            alt={item.title}
            aspectClassName="h-full sm:aspect-square sm:h-auto"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-1 p-3 sm:gap-0 sm:p-0">
          <div className="flex flex-col gap-1 sm:px-3 sm:pt-3">
            <h3
              onClick={() => setOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
              className="line-clamp-1 cursor-pointer font-display text-sm font-bold text-cocoa-900 sm:text-[15px]"
            >
              {item.title}
            </h3>
            <p className="line-clamp-2 text-xs text-cocoa-500 sm:truncate">
              {item.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 sm:px-3 sm:pb-3 sm:pt-2 sm:pb-4">
            <span className="text-sm font-bold text-sand-400 sm:text-[15px]">
              {item.price > 0 ? `${item.price.toLocaleString("fa-IR")} تومان` : "به‌زودی"}
            </span>
            <button
              type="button"
              aria-label={`افزودن ${item.title}`}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sand-400 text-white shadow-[0_10px_20px_-8px_rgba(186,107,38,0.6)] transition-transform hover:scale-105 active:scale-95 sm:h-9 sm:w-9"
            >
              <Plus className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
            </button>
          </div>
        </div>
      </article>

      <AnimatePresence>
        {open && (
          <ProductModal
            item={item}
            categoryTitle={categoryTitle ?? item.category}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductCard;
