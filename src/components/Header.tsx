import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

interface HeaderProps {
  onSearch?: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    if (onSearch) onSearch(query);
    console.log("Search query:", query);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white shadow-md">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-20 items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden text-white hover:bg-white/20"
              data-testid="button-menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/">
              <h1 className="text-2xl md:text-3xl font-bold cursor-pointer" data-testid="text-logo">
                MyShop
              </h1>
            </Link>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                name="search"
                placeholder="Search products..."
                className="w-full rounded-full bg-white pl-12 pr-4 py-3 text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-white"
                data-testid="input-search"
              />
            </div>
          </form>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20"
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="md:hidden px-4 pb-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                name="search"
                placeholder="Search products..."
                className="w-full rounded-full bg-white pl-12 pr-4 py-3 text-gray-900 placeholder:text-gray-500"
                data-testid="input-search-mobile"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
