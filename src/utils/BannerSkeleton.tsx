
export default function BannerSkeleton() {
    return (
        <div>
            <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <div className="animate-pulse w-[90%] max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left text skeleton */}
                    <div className="space-y-4">
                        <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                        <div className="flex gap-4 mt-6">
                            <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
                            <div className="h-10 w-32 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
                        </div>
                    </div>

                    {/* Right image skeleton */}
                    <div className="flex justify-center md:justify-end">
                        <div className="h-[300px] w-[300px] bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}
