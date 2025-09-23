import { Plus } from "lucide-react";
import { Link } from "react-router";

interface IProps {
    data: string,
    href: string
}


export default function NotFount({ data, href }: IProps) {
    return (
        <div>
            <h3>{data} not found</h3>
            <Link to={href}><Plus /> add {data}</Link>
        </div>
    )
}
