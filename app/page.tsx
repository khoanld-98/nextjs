import Image from "next/image";
import ProductIntro from "@/src/component/home/ProductItem";
import ItemListLayout from "@/src/component/home/ListIemLayout";
import SearchBar from "@/src/component/home/SearchBar";
import FilterBar from "@/src/component/home/FilterBar"

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
			<div className="w-full flex flex-col">
				<FilterBar />
				<ItemListLayout title={'Top người dùng có rating cao nhất'} />
				<ItemListLayout title={'Top người dùng có thể thuê ở quanh bạn'} />
			</div>
		</div>
	);
}
