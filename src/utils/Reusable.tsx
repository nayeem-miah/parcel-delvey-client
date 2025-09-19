import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-center gap-4 p-4 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">{icon}</div>
            <div className="flex-1">
                <p className="text-sm font-medium">{label}</p>
                <p className="font-medium">{value}</p>
            </div>
        </div>
    )
}

export function FormField({
    id,
    label,
    type,
    placeholder,
    value,
    onChange,
}: {
    id: string
    label: string
    type: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={onChange} required />
        </div>
    )
}
