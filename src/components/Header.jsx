import Link from "next/link";
import { FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <header className="h-250 bg-fuchsia-700 py-8"> 
      <div className="container mx-auto flex items-center justify-between h-full">
        <h1 className="text-white text-2xl font-bold ml-10">MERCADINHO</h1>
        <div className="flex items-center space-x-4">
          <Link>
            <FiUser className="text-white text-3xl mr-10" />
          </Link>
        </div>
      </div>
    </header>
  );
};


