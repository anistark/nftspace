function ItemCardLoading() {
    return (
        <div className="flex">
            <div className="bg-white p-4 rounded-md">
                <div className="w-64 h-44 bg-gray-200 animate-pulse"></div>
                <div className="mt-8 h-32 w-full space-y-3">
                    <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default ItemCardLoading;
