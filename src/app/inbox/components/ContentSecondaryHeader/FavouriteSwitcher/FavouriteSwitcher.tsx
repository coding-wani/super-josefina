import { Star } from "lucide-react";

export default function FavouriteSwitcher() {
  return (
    <button className="flex items-center p-2">
      <Star size={16} />
    </button>
  );
}
