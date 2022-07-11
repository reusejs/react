import Head from "next/head";
import Image from "next/image";
import { LabelBase } from "@reusejs/react";

export default function Labels() {
  return (
    <div>
      <Head>
        <title>Labels</title>
      </Head>

      <main>
        <LabelBase />
      </main>
    </div>
  );
}
