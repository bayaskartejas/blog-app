import { Topbar } from "./Topbar"
import { Filter } from "./Filter"
import { Card } from "./Card"
import { Footer } from "./Footer"

export function Main(){
    return <div>
        <Topbar />
        <Filter />
        <div>
            <Card />
        </div>
        <Footer />
    </div>
}