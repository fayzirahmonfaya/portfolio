import Link from "next/link";
import CompositingHub from "@/components/CompositingHub";
import ContactHub from "@/components/ContactHub";
import EcosystemHub from "@/components/EcosystemHub";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OddlyNotesHub from "@/components/OddlyNotesHub";
import WayBlockHub from "@/components/WayBlockHub";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <section id="work" className="px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-6 flex justify-center sm:mb-8">
              <Link
                href="/cv"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3 font-sans text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97]"
              >
                CV
              </Link>
            </div>
            <div className="rounded-[32px] border border-line bg-ink p-2 sm:p-3">
              <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
                <Hero className="lg:col-span-5" />
                <OddlyNotesHub className="lg:col-span-7" />
              </div>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <ContactHub />
                <WayBlockHub />
                <CompositingHub />
                <EcosystemHub />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
