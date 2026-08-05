import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import placeholder from "../assets/placeholder.png";

const items = siteConfig.newItems.items;
const SWIPE_THRESHOLD = 40;

function ImagePlaceholder({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute inset-0 h-full w-full bg-white"
    >
      <img src={placeholder} alt="" />
    </div>
  );
}

function ProductImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [failedSrcs, setFailedSrcs] = useState<Record<number, boolean>>({});
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  const go = (direction: 1 | -1) => {
    setIndex((i) => (i + direction + images.length) % images.length);
  };

  const handlePanEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (info.offset.x <= -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x >= SWIPE_THRESHOLD) go(-1);
  };

  const currentFailed = !hasImages || failedSrcs[index];

  return (
    <div className="group/slider relative aspect-square w-full overflow-hidden bg-white">
      <motion.div
        className="relative h-full w-full touch-pan-y"
        onPanEnd={hasMultiple ? handlePanEnd : undefined}
      >
        {currentFailed ? (
          <ImagePlaceholder alt={alt} />
        ) : (
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={alt}
              draggable={false}
              onError={() =>
                setFailedSrcs((prev) => ({ ...prev, [index]: true }))
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
        )}
      </motion.div>

      {hasMultiple && (
        <>
          <button
            type="button"
            aria-label="تصویر بعدی"
            onClick={() => go(1)}
            className="absolute left-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-cocoa-700 opacity-0 shadow-sm backdrop-blur transition-opacity group-hover/slider:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="تصویر قبلی"
            onClick={() => go(-1)}
            className="absolute right-2 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-cocoa-700 opacity-0 shadow-sm backdrop-blur transition-opacity group-hover/slider:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`رفتن به تصویر ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function NewItems() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [sliderState, setSliderState] = useState({
    overflowing: false,
    atStart: true,
    atEnd: true,
  });

  const updateSliderState = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 4) {
      setSliderState({ overflowing: false, atStart: true, atEnd: true });
      return;
    }
    const pos = Math.abs(track.scrollLeft);
    setSliderState({
      overflowing: true,
      atStart: pos <= 4,
      atEnd: pos >= maxScroll - 4,
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateSliderState();

    const handleResize = () => updateSliderState();
    track.addEventListener("scroll", updateSliderState, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      track.removeEventListener("scroll", updateSliderState);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollByCard = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const cardWidth = card?.getBoundingClientRect().width ?? track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    const step = cardWidth + gap;
    track.scrollBy({
      left: direction === "next" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative px-3 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between sm:mb-10">
          <h2 className="font-display text-xl font-bold text-cocoa-900 sm:text-2xl">
            آیتم‌های جدید
          </h2>
          <button
            type="button"
            className="group flex items-center gap-1.5 text-sm font-semibold text-sand-400 transition-colors hover:text-sand-500"
          >
            نمایش همه
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </button>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="grid grid-flow-col auto-cols-[calc((100%-1rem)/2)] gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-1 pb-4 pt-1 sm:auto-cols-[calc((100%_-_2.5rem)/3)] sm:gap-5 lg:auto-cols-[calc((100%_-_5rem)/4)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((item) => (
              <article
                key={item.id}
                className="flex snap-start flex-col overflow-hidden rounded-[1.75rem] border border-sand-50 bg-white shadow-[0_16px_40px_-24px_rgba(138,84,39,0.35)]"
              >
                <ProductImageSlider images={item.images} alt={item.title} />

                <div className="flex flex-1 flex-col gap-1 px-3 pt-3">
                  <h3 className="font-display text-sm font-bold text-cocoa-900 sm:text-[15px]">
                    {item.title}
                  </h3>
                  <p className="truncate text-xs text-cocoa-500">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between px-3 pb-3 pt-2 sm:pb-4">
                  <span className="text-sm font-bold text-sand-400 sm:text-[15px]">
                    {item.price.toLocaleString("fa-IR")} تومان
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
            ))}
          </div>

          {sliderState.overflowing && (
            <>
              <button
                type="button"
                aria-label="آیتم‌های قبلی"
                onClick={() => scrollByCard("prev")}
                disabled={sliderState.atStart}
                className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 translate-x-1/3 items-center justify-center rounded-full border border-sand-100 bg-white text-cocoa-700 shadow-[0_16px_40px_-24px_rgba(138,84,39,0.5)] transition-opacity disabled:pointer-events-none disabled:opacity-0 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="آیتم‌های بعدی"
                onClick={() => scrollByCard("next")}
                disabled={sliderState.atEnd}
                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-1/3 -translate-y-1/2 items-center justify-center rounded-full border border-sand-100 bg-white text-cocoa-700 shadow-[0_16px_40px_-24px_rgba(138,84,39,0.5)] transition-opacity disabled:pointer-events-none disabled:opacity-0 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewItems;
