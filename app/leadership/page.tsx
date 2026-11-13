import type { Metadata } from "next";
import { SectionIntro } from "@/components/section-intro";

export const metadata: Metadata = { title: "Leadership" };

const leaders = [
  {
    role: "Chairman",
    name: "Asim Raza Ahmed",
    note: "Proposed founding office-bearer",
    image: "https://www.thepfma.com/Admin/images/former-chairman-181.jpg",
    imageAlt: "Portrait published on the Pakistan Flour Mills Association former chairmen page under the name Asim Raza Ahmad",
    imageCredit: "Photo source: Pakistan Flour Mills Association, Former Chairmen page (listed there as Asim Raza Ahmad, 2008–09).",
  },
  {
    role: "Co-Chairman",
    name: "Mian Muhammad Usman",
    note: "Proposed founding office-bearer",
    image: null,
  },
  {
    role: "Senior Vice Chairman",
    name: "Khwaja Habib Ur Rehman",
    note: "Proposed founding office-bearer",
    image: null,
  },
  {
    role: "Vice Chairman",
    name: "Chaudhary Abdul Rauf",
    note: "Proposed founding office-bearer",
    image: null,
  },
  {
    role: "Secretary General",
    name: "Malik Muhammad Naseer",
    note: "Proposed founding office-bearer",
    image: null,
  },
];

const pendingRoles = [
  "Additional Vice Chairmen",
  "Additional Secretary General",
  "Finance Secretary",
  "Official Spokesperson",
];

export default function LeadershipPage() {
  return (
    <div className="container py-20">
      <SectionIntro
        eyebrow="Governance"
        title="Leadership and accountability."
        text="The proposed founding leadership roster is presented below for institutional review. Appointments, terms and delegated authority remain subject to the required formal approvals and recorded resolutions."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader) => (
          <article key={leader.role} className="overflow-hidden border border-[#e5dfd2] bg-white">
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#f0eee6]">
              {leader.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={leader.image} alt={leader.imageAlt} className="h-full w-full object-cover object-center" />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center text-center text-[#8c927f]">
                  <div className="font-serif text-5xl text-[#b49a5a]">{leader.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</div>
                  <span className="mt-3 text-[10px] uppercase tracking-[0.22em]">Portrait to be added</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="eyebrow">{leader.role}</div>
              <h2 className="mt-2 font-serif text-xl text-[#123b2d]">{leader.name}</h2>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[#8a806c]">{leader.note}</p>
              {"imageCredit" in leader && leader.imageCredit ? (
                <p className="mt-4 text-[11px] leading-5 text-[#7a817b]">{leader.imageCredit} Reuse rights have not been verified; replace with an authorised portrait before public launch.</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 border border-[#e5dfd2] bg-[#f8f6f0] p-8 md:p-10">
        <div className="eyebrow">Further nominations</div>
        <h2 className="mt-3 font-serif text-2xl text-[#123b2d]">Additional offices</h2>
        <ul className="mt-6 grid gap-3 text-sm text-[#52645a] sm:grid-cols-2">
          {pendingRoles.map((role) => <li key={role} className="border-b border-[#e5dfd2] pb-3">{role} <span className="text-[#9b8b68]">— To be nominated</span></li>)}
        </ul>
      </section>

      <p className="mt-8 max-w-4xl text-xs leading-6 text-[#7a817b]">
        Governance notice: This page records a proposed roster only. It does not by itself establish appointment, acceptance of office, legal status or authority. UBA will publish confirmed details after the relevant founding approvals are documented. Pakistan Business Forum (PBF) remains a separate organisation.
      </p>
    </div>
  );
}
