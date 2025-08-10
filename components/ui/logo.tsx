import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo-imagee.png" alt="logo" width={50} height={40} />

      <div className="flex flex-col">
        <p className="text-2xl font-bold text-logo-green">SuryaRun</p>
        <p className="text-xs font-semibold text-logo-blue">SOLAR SOLUTIONS</p>
      </div>
    </Link>
  );
};
