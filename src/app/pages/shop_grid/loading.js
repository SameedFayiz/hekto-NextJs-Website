import { Suspense } from "react";

export default function Loading() {
  // Or a custom loading skeleton component
  return <Suspense fallback={<p>Loading...</p>}></Suspense>;
}
