import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <section className="container flex flex-col gap-6 py-8 md md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="flex flex-col items-start justify-center gap-4">
        <h1 className="font-heading text-3xl sm:text-3xl leading-[1.1rem] md:text-6xl">
          Simple, transparent pricing
        </h1>
        <p className="text-muted-foreground leading-normal max-w-[85rem] s sm:text-lg sm:leading-7">
          Unlock all features including unlimited posts for your blog.
        </p>
      </div>
      <div className="grid w-full gap-4 items-center jsutify-center rounded-lg border border-muted p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="grid gap-6 font-bold text-xl md:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2 text-sm md:text-md text-muted-foreground">
            <li className="flex items-center">
              <Icons.check className="h-4 w-4 mr-2" /> Unlimited Posts
            </li>
            <li className="flex items-center">
              <Icons.check className="h-4 w-4 mr-2" /> Custom Domain
            </li>
            <li className="flex items-center">
              <Icons.check className="h-4 w-4 mr-2" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="h-4 w-4 mr-2" /> Unlimited Users
            </li>
            <li className="flex items-center">
              <Icons.check className="h-4 w-4 mr-2" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="h-4 w-4 mr-2" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-7xl  font-bold">$19</h1>
          <p className="text-muted-foreground text-sm">Billed Monthly</p>
          <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="flex mx-auto flex-col gap-4 max-w-[58rem] w-full">
        <p className="text-muted-foreground">
          {" "}
          Taxonomy is a demo app.
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  );
}
