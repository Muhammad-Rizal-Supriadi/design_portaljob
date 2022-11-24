import { FeaturedJobs } from "../../components/global/FeaturedJobs";
import { Footer } from "../../components/global/Footer";
import { Hero } from "../../components/global/Hero";
import { TopCompanies } from "../../components/global/TopCompanies";

export default function Job(){
    return (
        <>
            
            <Hero />
            <main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
                <div className='mt-16 space-y-20'>
                    <FeaturedJobs />
                    <TopCompanies/>
                </div>
            </main>

            <Footer/>
        </>
    );
}