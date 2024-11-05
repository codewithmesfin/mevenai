
import MobilePrivateNavbar from "./mobilePrivateNav";
import Sidebar from "./sidebar";

interface PROPS {
    children: any;
}


export default function PrivateLayout({ children }: PROPS) {


    return <div className={`h-full w-full flex antialiased text-gray-900 bg-white`}>
        <div className="flex-1 flex flex-col">
        <MobilePrivateNavbar />
            <main className="pt-24 md:pt-0 flex-grow flex flex-row min-h-0">
                <Sidebar />
                <section className={`flex overflow-y-scroll flex-col flex-auto border-x border-gray-100`}>
                    {children}
                </section>
            </main>
        </div>
    </div>
}