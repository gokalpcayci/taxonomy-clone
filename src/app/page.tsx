import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <Button variant="destructive">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="default">Click me</Button>
      <Button variant="secondary">click me</Button>
    </div>
  );
}
