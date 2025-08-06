// app/book/page.tsx
export const metadata = { title: "Book Consultation" };

export default function Book() {
  return (
    <main className="container-wrapper py-20">
      <h1 className="text-4xl font-heading font-semibold mb-8">
        Book Your Free Solar Consultation
      </h1>

      {/* Scheduler iframe */}
      <div className="aspect-[4/3] w-full max-w-3xl mx-auto">
        <iframe
          src="https://cal.com/yourname/solar?hide_event_type_details=1"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>

      {/* Fallback link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Can’t find a suitable time?{" "}
        <a href="#contact" className="text-brand underline">
          Send us a request
        </a>
        .
      </p>

      {/* ContactForm component (id=\"contact\") */}
      {/* <ContactForm /> */}
    </main>
  );
}
