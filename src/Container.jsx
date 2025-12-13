import { Card } from "@heroui/react"

export default function Container({children,title}){
    return (
        <Card className="p-6 gap-6">
            <h1 className="text-2xl font-bold">{title}</h1>
            {children}
        </Card>
    )
}