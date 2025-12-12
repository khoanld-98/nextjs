import Image from "next/image";
import ProductIntro from "@/src/component/home/ProductItem";
import ItemListLayout from "@/src/component/home/ListIemLayout";
import SearchBar from "@/src/component/home/SearchBar";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
			<div className="w-full flex flex-col">
				<ItemListLayout />
			</div>
		</div>
	);
}
