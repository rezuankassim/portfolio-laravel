import FooterSection from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import { project, projects as Rprojects } from '@/routes';
import { Project as IProject } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Rezuan Kassim Freelance Website Development',
    url: 'https://rezuankassim.dev/',
    logo: 'https://rezuankassim.dev/portfolio-logo.svg',
    description:
        'Freelance website developer offering services in Sabah and Malaysia - fast modern sites built for results.',
    areaServed: {
        '@type': 'Place',
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'Sabah',
            addressCountry: 'MY',
        },
    },
    serviceType: [
        'Website Development',
        'Web Design',
        'Laravel Development',
        'React Development',
    ],
    sameAs: ['https://www.linkedin.com/in/rezuan-kassim'],
};

export default function Projects({ projects }: { projects: IProject[] }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Head title="Projects">
                <link rel="canonical" href="https://rezuankassim.dev/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />
            </Head>

            <div className="relative flex flex-col items-center bg-[url('/background.png')] bg-size-[800px_1000px] bg-center pb-12 lg:bg-size-[auto_auto] lg:bg-position-[50%_25%]">
                <div className="absolute bottom-0 h-[400px] w-full bg-linear-180 from-transparent via-transparent to-[#0B0B0D]"></div>

                <header className="relative mt-4 mb-6 w-full max-w-[350px] text-sm not-has-[nav]:hidden lg:max-w-[772px]">
                    <nav className="flex items-center justify-between rounded-full bg-[#16171B] px-2.5 py-1.5 lg:px-2">
                        <Link
                            href="/"
                            className="flex items-center gap-x-[7.47px]"
                        >
                            <img src="/portfolio-logo.svg" />

                            <span className="font-kavoon text-lg text-[#FEFEFE] lg:text-[20px]">
                                Rezuan
                            </span>
                        </Link>

                        <div className="hidden gap-x-6 text-sm text-[#FEFEFE] lg:flex">
                            <Link href="#pricing">Pricing</Link>

                            <Link href={Rprojects()}>Projects</Link>

                            <Link href="#contact">Contact</Link>
                        </div>

                        <div className="hidden lg:block">
                            <a
                                href="https://calendly.com/rezuankassim"
                                target="_blank"
                                className="flex items-center gap-x-3 rounded-full bg-[#FEFEFE] px-[18px] py-2 text-sm font-semibold text-[#16171B]"
                            >
                                Let's Talk
                                <div className="size-5">
                                    <img
                                        src="/arrow.svg"
                                        className="h-full w-full"
                                    />
                                </div>
                            </a>
                        </div>

                        <Button
                            size="icon"
                            variant="ghost"
                            className="size-7 rounded-full p-2 hover:cursor-pointer hover:bg-transparent lg:hidden"
                            onClick={() => setShow(!show)}
                        >
                            {!show ? (
                                <Menu className="size-6 text-white" />
                            ) : (
                                <X className="size-6 text-white" />
                            )}
                        </Button>
                    </nav>

                    {show && (
                        <div className="absolute top-0 z-50 mt-[46px] flex w-full max-w-[350px] flex-col items-center gap-8 rounded-2xl bg-[#0B0B0D] py-8 text-sm text-[#FEFEFE]">
                            <div className="flex flex-col gap-y-4 text-center">
                                <Link href="#pricing">Pricing</Link>

                                <Link href={Rprojects()}>Projects</Link>

                                <Link href="#contact">Contact</Link>
                            </div>

                            <a
                                href="https://calendly.com/rezuankassim"
                                target="_blank"
                                className="flex items-center gap-x-3 rounded-full bg-[#FEFEFE] px-[18px] py-2 text-sm font-semibold text-[#16171B]"
                            >
                                Let's Talk
                                <div className="size-5">
                                    <img
                                        src="/arrow.svg"
                                        className="h-full w-full"
                                    />
                                </div>
                            </a>
                        </div>
                    )}
                </header>

                <div className="z-20 mt-6 flex w-full flex-1 flex-col self-start px-5 lg:mt-24 lg:w-full lg:max-w-[1170px] lg:self-center">
                    <div className="flex flex-col items-center gap-y-10 lg:gap-x-6">
                        <div className="flex flex-col items-center gap-y-6 text-[#FEFEFE]">
                            <span className="max-w-fit rounded-full bg-[#FC9766] px-3 py-1">
                                Projects
                            </span>

                            <h1 className="text-center font-alexandria text-4xl font-medium lg:text-6xl">
                                My Projects
                            </h1>

                            <p className="text-center text-lg text-[#CDCDCD]">
                                From scratch to web development, I deliver
                                creative, user-friendly solutions that bring
                                ideas to life.
                            </p>

                            <a
                                href="https://calendly.com/rezuankassim"
                                target="_blank"
                                className="inline-flex gap-x-2.5 rounded-full bg-linear-[57deg] from-[#F63C0C] to-[#FE812E] px-1.5 py-1.5 pl-[18px] text-sm font-semibold text-[#FEFEFE] lg:mt-4"
                            >
                                Get in Touch
                                <div className="rounded-full bg-[#FEFEFE] p-[5px]">
                                    <img src="/arrow.svg" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <section
                id="projects"
                className="px-5 py-20 lg:mx-auto lg:w-full lg:max-w-[1170px]"
            >
                <div className="mt-12 flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12">
                    {projects.map((p) => (
                        <Link
                            href={project(p.slug)}
                            className="flex flex-col gap-y-6"
                        >
                            <div className="relative h-[300px] w-full rounded-xl lg:h-[324px] lg:w-full">
                                <img
                                    src={p.images.at(-1)}
                                    className="h-full w-full rounded-xl object-cover object-center"
                                />

                                <div className="absolute top-0 left-0 h-full w-full rounded-xl bg-linear-90 to-[#FF7600] opacity-20"></div>

                                <div className="absolute bottom-0 left-0 mb-3 ml-3 flex size-7 items-center justify-center rounded-full bg-white">
                                    <img
                                        src="/arrow.svg"
                                        className="size-3.5"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="font-alexandria text-2xl font-medium text-[#FF7600] lg:text-[28px] lg:leading-[1.4]">
                                    {p.name}
                                </span>

                                <div className="rounded-full border border-[#373737] bg-[#16171B] px-3 py-1 text-xs">
                                    <span>{p.category}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <FooterSection />
        </>
    );
}
