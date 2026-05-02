import { appConfig } from "@/config/app"
import logo from "../../public/favicon.svg"

export function AppLogo() {
    return (
        <div className='flex items-center gap-2'>
                <img src={logo} className="h-5 w-5 rounded-sm"/>
            <span className="font-secondary text-nowrap">{appConfig.name}</span>
        </div>
    )
}
