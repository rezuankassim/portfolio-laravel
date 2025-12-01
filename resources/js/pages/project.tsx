import FooterSection from '@/components/footer-section';
import { Button } from '@/components/ui/button';
import { projects } from '@/routes';
import { Project as IProject } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Calendar, DollarSign, FileText, Menu, User, X } from 'lucide-react';
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

export default function Project({ project }: { project: IProject }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Head title={project.name}>
                <link rel="canonical" href="https://rezuankassim.dev/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />
            </Head>

            <div className="relative flex flex-col items-center bg-[url('/background.png')] bg-size-[800px_1000px] bg-center pb-12 lg:bg-size-[auto_auto] lg:bg-position-[50%_80%]">
                <div className="absolute bottom-0 h-[400px] w-full bg-linear-180 from-transparent via-[#0B0B0D] to-[#0B0B0D] lg:h-[800px]"></div>

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

                            <Link href={projects()}>Projects</Link>

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

                                <Link href={projects()}>Projects</Link>

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

                <div className="z-20 mt-6 flex flex-1 flex-col self-start px-5 lg:mt-24 lg:w-full lg:max-w-[1170px] lg:self-center">
                    <div className="flex flex-col gap-y-10 lg:flex-row lg:items-start lg:gap-x-6">
                        <div className="flex flex-col gap-y-6 text-[#FEFEFE]">
                            <span className="max-w-fit rounded-full bg-[#FC9766] px-3 py-1">
                                Projects
                            </span>

                            <h1 className="font-alexandria text-4xl font-medium lg:text-6xl">
                                {project.name}
                            </h1>

                            <p className="text-lg text-[#CDCDCD] lg:hidden">
                                we believe that architecture is more than just
                                building structures; it's about creating
                            </p>
                        </div>

                        <div className="flex items-center gap-x-6 lg:flex-col lg:items-start lg:gap-y-8">
                            <p className="hidden text-[22px] leading-[1.5] text-[#CDCDCD] lg:block lg:max-w-[573px]">
                                we believe that architecture is more than just
                                building structures; it's about creating
                            </p>

                            <div className="flex items-center gap-x-6">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex gap-x-2.5 rounded-full bg-linear-[57deg] from-[#F63C0C] to-[#FE812E] px-1.5 py-1.5 pl-[18px] text-lg font-semibold text-[#FEFEFE]"
                                >
                                    View Live Website
                                    <div className="flex size-7 items-center justify-center rounded-full bg-[#FEFEFE]">
                                        <img
                                            src="/arrow-down.svg"
                                            className="mt-px ml-px"
                                        />
                                    </div>
                                </a>

                                <Link
                                    href={projects()}
                                    className="inline-flex text-[#FEFEFE] underline"
                                >
                                    See All Projects
                                </Link>
                            </div>
                        </div>
                    </div>

                    <img
                        src="/project-1.jpg"
                        className="mt-16 h-[210px] rounded-2xl object-cover lg:h-[580px]"
                    />
                </div>
            </div>

            <section className="mx-auto grid w-full max-w-[350px] grid-cols-2 grid-rows-2 gap-6 py-8 text-[#FEFEFE] lg:mx-auto lg:max-w-[1170px] lg:grid-cols-4">
                <div className="flex flex-col items-center justify-center gap-y-3">
                    <div className="flex items-center gap-x-2.5 rounded-full bg-[#16171B] px-3 py-1">
                        <User className="size-3 lg:size-5" />

                        <span className="text-xs lg:text-sm">Client</span>
                    </div>

                    <p className="text-sm font-semibold lg:text-2xl lg:font-medium">
                        {project.client}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-y-3">
                    <div className="flex items-center gap-x-2.5 rounded-full bg-[#16171B] px-3 py-1">
                        <FileText className="size-3 lg:size-5" />

                        <span className="text-xs lg:text-sm">Category</span>
                    </div>

                    <p className="text-sm font-semibold lg:text-2xl lg:font-medium">
                        {project.category}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-y-3">
                    <div className="flex items-center gap-x-2.5 rounded-full bg-[#16171B] px-3 py-1">
                        <Calendar className="size-3 lg:size-5" />

                        <span className="text-xs lg:text-sm">Duration</span>
                    </div>

                    <p className="text-sm font-semibold lg:text-2xl lg:font-medium">
                        {project.duration}
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-y-3">
                    <div className="flex items-center gap-x-2.5 rounded-full bg-[#16171B] px-3 py-1">
                        <DollarSign className="size-3 lg:size-5" />

                        <span className="text-xs lg:text-sm">Budget</span>
                    </div>

                    <p className="text-sm font-semibold lg:text-2xl lg:font-medium">
                        {project.budget}
                    </p>
                </div>
            </section>

            <section className="px-5 py-20 lg:mx-auto lg:max-w-[1170px]">
                <div className="lg:max-w-[708px]">
                    <h2 className="font-alexandria text-[28px] leading-[1.4] font-medium text-[#FEFEFE] lg:text-6xl">
                        Project Summary
                    </h2>

                    <div className="mt-4 flex flex-col gap-y-3 text-[#A5A5A5]">
                        {project.summary.map((paragraph, index) => (
                            <p key={index} className="text-pretty lg:text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <h4 className="mt-10 font-alexandria text-2xl font-medium text-[#FEFEFE] lg:text-4xl">
                        The Goal:
                    </h4>

                    <ul className="mt-4 flex list-disc flex-col gap-y-4 pl-6 marker:text-[#FEFEFE]">
                        {project.goal.map((goal, index) => (
                            <li
                                key={index}
                                className="text-sm text-[#A5A5A5] lg:text-base"
                            >
                                {goal}
                            </li>
                        ))}
                    </ul>

                    <h4 className="mt-10 font-alexandria text-2xl font-medium text-[#FEFEFE] lg:text-4xl">
                        The Challenge:
                    </h4>

                    <div className="mt-4 flex flex-col gap-y-3 text-[#A5A5A5]">
                        {project.challenge.map((paragraph, index) => (
                            <p key={index} className="text-pretty lg:text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col gap-y-6 lg:grid lg:grid-cols-2 lg:gap-x-6">
                        {project.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className="h-[250px] rounded-2xl"
                            />
                        ))}
                    </div>

                    <h4 className="mt-10 font-alexandria text-2xl font-medium text-[#FEFEFE] lg:text-4xl">
                        Key Features
                    </h4>

                    <ul className="mt-4 flex list-disc flex-col gap-y-4 pl-6 marker:text-[#FEFEFE] lg:grid lg:grid-cols-2">
                        {project.features.map((feature, index) => (
                            <li
                                key={index}
                                className="text-sm text-[#A5A5A5] lg:text-base"
                            >
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <h4 className="mt-10 font-alexandria text-2xl font-medium text-[#FEFEFE] lg:text-4xl">
                        Results
                    </h4>

                    <div className="mt-4 flex flex-col gap-y-3 text-[#A5A5A5]">
                        {project.results.map((paragraph, index) => (
                            <p key={index} className="text-pretty lg:text-lg">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            <FooterSection />
        </>
    );
}
