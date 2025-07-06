export default function Loading() {
	return (
		<div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-gray-100 z-[999]">
			<div className="flex flex-col items-center">
				<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
				<p className="mt-4 text-lg text-gray-700 font-medium">Please wait, loading...</p>
			</div>
		</div>
	);
}
