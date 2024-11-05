/* eslint-disable @next/next/no-img-element */

import ProductCard from "@/components/marketplace/productCard";
import { modules } from "@/data/modules";



export default function Product() {


    return (
        <div className="bg-white">
         
            <section className="border-b-4 border-gray-100">
                <div className="w-[90%] mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {
                            modules.map((item, i) => <div
                                key={item.title}
                            >
                              <ProductCard item={item} index={i} />
                            </div>)
                        }
                    </div>
                </div>
            </section>

        </div>
    );
}