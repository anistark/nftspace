function ItemCardLoading() {
    return (
        <div class="flex">
            <div class="bg-white p-4 rounded-md">
                <div class="w-64 h-44 bg-gray-200 animate-pulse"></div>
                <div class="mt-8 h-32 w-full space-y-3">
                    <div class="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    <div class="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                    <div class="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
                    <div class="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}

export default ItemCardLoading;
