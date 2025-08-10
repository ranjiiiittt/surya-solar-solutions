import { StickyBanner } from "@/components/ui/sticky-banner";

export function StickyBannerInfo() {
  return (
    <div className="relative flex  w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          ALERT: Last chance to claim federal solar tax credits before Dec 31,
          2025. Act now!{" "}
          <a
            href="/booking"
            className="transition duration-200 hover:underline"
          >
            Book Free Consultation
          </a>
        </p>
      </StickyBanner>
      {/* <DummyContent /> */}
    </div>
  );
}
