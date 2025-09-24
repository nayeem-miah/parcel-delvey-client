import { Skeleton } from "@/components/ui/skeleton";


type LoadingSkeletonProps = {
    count?: number;
    width?: string | number;
    height?: string | number;
    className?: string;
};

export default function Loading({
    count = 15,
    width = "100%",
    height = 20,
    className = "",
}: LoadingSkeletonProps) {
    return (
        <div className="flex flex-col gap-3">
            {Array.from({ length: count }).map((_, i) => (
                <Skeleton
                    key={i}
                    className={`rounded-md ${className}`}
                    style={{ width, height }}
                />
            ))}
        </div>
    );
}

