import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

const topCompaniesItems = [
  {
    companyName: "Rempel and Sons",
    category: "Media & Marketing",
    image: "/images/bg_hero.jpg",
    logo: "/images/telkom.png",
  },
  {
    companyName: "Dietrich, Beahan and Connelly",
    category: "Tourism",
    image: "/images/office.jpg",
    logo: "/images/telkom.png",
  },
  {
    companyName: "Gutmann LLC",
    category: "Oil & Gas",
    image: "/images/bg_hero.jpg",
    logo: "/images/telkom.png",
  },
  {
    companyName: "Kerluke Group",
    category: "Accounting",
    image: "/images/office.jpg",
    logo: "/images/telkom.png",
  },
  {
    companyName: "Hahn LLC",
    category: "Food & Beverage",
    image: "/images/bg_hero.jpg",
    logo: "/images/telkom.png",
  },
  {
    companyName: "Ziemann, Nicolas and Grady",
    category: "Construction",
    image: "/images/office.jpg",
    logo: "/images/telkom.png",
  },
];

export const TopCompanies = () => {
  return (
    <section id="top-companies">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top Companies</h2>
        <Button variant="outline" className="hidden xs:inline-flex">
          Show All
        </Button>
      </div>

      <div
        id="top-companies__items"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {topCompaniesItems.map((item, i) => (
          <Link href="/#" key={i}>
            <a className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-150 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-700">
              <div className="relative block overflow-hidden  pt-[70%]">
                <Image
                  src={item.image}
                  alt={item.companyName}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-200 group-hover:scale-[102%]"
                />
              </div>

              <div className="relative flex flex-col border-t p-4 dark:border-slate-600">
                <span className="absolute right-4 -top-[65px] block h-[80px] w-[80px] overflow-hidden rounded-lg border shadow-sm dark:border-slate-600">
                  <div className="relative block overflow-hidden  bg-slate-200 pt-[100%]">
                    <Image
                      src={item.logo}
                      alt={item.companyName}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </span>

                <h5 className="block truncate text-xl font-semibold capitalize">
                  {item.companyName}
                </h5>
                <span className="block truncate text-slate-500 dark:text-slate-400">
                  {item.category}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};