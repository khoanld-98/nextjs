import ItemListLayout from "@/src/component/home/ListIemLayout";
import FilterBar from "@/src/component/home/FilterBar"

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
			<div className="w-full flex flex-col">
				<FilterBar />
				<ItemListLayout title={'Top người dùng có rating cao nhất'} />
				<div className="flex mx-auto gap-2">
					{/* <div className="flex"> */}
						<div className="h-[2px] w-10 bg-gray-300 rounded-full" />
						<div className="h-[2px] w-6 bg-gray-400 rounded-full" />
						<div className="h-[2px] w-4 bg-gray-500 rounded-full" />
					{/* </div> */}
				</div>
				<ItemListLayout title={'Top người dùng có thể thuê ở quanh bạn'} />
			</div>
		</div>
	);
}
