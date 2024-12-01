import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 lg:px-[70px] px-4 border-b border-gray-200">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Image src="/icon.svg" alt="logo" width={50} height={50} />
          <h1 className=" text-3xl font-bold">Vault</h1>
        </div>
      </div>
      <div className="flex gap-4">
        <Button>Login</Button>
      </div>
    </div>
  );
}
