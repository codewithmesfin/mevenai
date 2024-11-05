
import Sidebar from "./sidebar";

interface PROPS {
    children: any;
  }
  

export default function PrivateLayout({ children }: PROPS) {



    return <div className={`h-screen w-full flex antialiased text-gray-900 bg-whit overflow-hidden`}>
        <div className="flex-1 flex flex-col">
            <main className="flex-grow flex flex-row min-h-0">
                <Sidebar />
                <section className={`flex overflow-y-scroll flex-col flex-auto border-x border-gray-100`}>
                {children}
                </section>
            </main>
        </div>
    </div>
}