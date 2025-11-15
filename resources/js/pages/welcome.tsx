import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Marquee } from '@/components/ui/marquee';
import { Head, Link } from '@inertiajs/react';
import { Check, Menu, Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';

const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Rezuan Kassim Freelance Website Development',
    url: 'https://rezuankassim.dev/',
    logo: 'https://rezuankassim.dev/path-to-logo.png',
    description:
        'Freelance website developer offering services in Sabah and Malaysia – fast modern sites built for results.',
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

export default function Welcome() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Head title="Freelance Website Developer Sabah & Malaysia">
                <link rel="canonical" href="https://rezuankassim.dev/" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemaData),
                    }}
                />
            </Head>
            <div className="relative flex min-h-screen flex-col items-center bg-[url('/background.png')] bg-cover bg-top pb-12">
                <img
                    src="/element-big.svg"
                    className="absolute right-0 bottom-0 z-0 hidden lg:block"
                />

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

                            <Link href="#projects">Projects</Link>

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

                                <Link href="#projects">Projects</Link>

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

                <div className="z-20 mt-6 flex flex-1 flex-col self-start px-5 lg:w-full lg:max-w-[1170px] lg:self-center">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[84px]">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-x-1.5 text-[#FEFEFE]">
                                <img src="/circle-small.svg" />
                                <span className="text-xs lg:text-base lg:font-medium">
                                    Available for new projects
                                </span>
                            </div>

                            <h1 className="mt-2 font-alexandria text-[42px] leading-[1.2] font-medium text-[#FEFEFE] lg:text-8xl">
                                Creative Strategist and Design Oriented
                            </h1>
                        </div>

                        <div className="z-20 hidden items-start gap-x-12 lg:flex">
                            <div className="flex flex-1 flex-col gap-y-3">
                                <span className="text-[#FEFEFE]">Socials</span>

                                <div className="flex flex-col gap-x-0.5">
                                    <a
                                        href="https://www.instagram.com/reeeezuan/"
                                        target="_blank"
                                        className="text-lg font-semibold text-[#FEFEFE]"
                                    >
                                        Instagram
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/rezuan-kassim"
                                        target="_blank"
                                        className="text-lg font-semibold text-[#FEFEFE]"
                                    >
                                        Linkedin
                                    </a>
                                </div>
                            </div>

                            <span className="text-[#FEFEFE]">Rezuan @2025</span>
                        </div>
                    </div>

                    <div className="z-20 mt-24 hidden items-center justify-between border border-r-0 border-l-0 border-[#A5A5A5] pb-1 lg:flex">
                        <span>BRANDING</span>
                        <span>IS</span>
                        <span>THE</span>
                        <span>VOICE</span>
                        <span>OF</span>
                        <span>IDENTITY</span>
                    </div>

                    <div className="z-20 mt-24 hidden items-center gap-x-[123px] lg:flex">
                        <p className="text-[22px] leading-[1.5] text-[#FEFEFE]">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Beautiful design has the power to captivate
                            audiences{' '}
                            <span className="text-[#CDCDCD]">
                                and drive business growth. I create stunning,
                                user-focused designs that engage, inspire trust,
                                and help businesses grow, transform, and succeed
                                worldwide.
                            </span>
                        </p>

                        <div className="z-20 flex h-[125px]">
                            <div className="h-full rounded-xl bg-[#FEFEFE] p-1.5">
                                <div className="h-full w-[88px] overflow-hidden rounded-[6px] bg-linear-[57deg] from-[#F63C0C] to-[#FE812E]">
                                    <img
                                        src="/user-closeup.png"
                                        className="mt-[-20px] h-[308px] w-[143px] object-cover object-top"
                                    />
                                </div>
                            </div>

                            <div className="h-full w-[250px] rounded-xl bg-[#FEFEFE] px-4 py-3">
                                <p className="text-lg font-semibold text-[#16171B]">
                                    Let's Talk
                                </p>
                                <p className="text-sm text-[#373737]">
                                    rezuankassim@hotmail.com
                                </p>

                                <a
                                    href="https://calendly.com/rezuankassim"
                                    target="_blank"
                                    className="mt-5 inline-flex gap-x-2.5 rounded-full bg-linear-[57deg] from-[#F63C0C] to-[#FE812E] px-1.5 py-1.5 pl-[18px] text-sm font-semibold text-[#FEFEFE]"
                                >
                                    Get in Touch
                                    <div className="rounded-full bg-[#FEFEFE] p-[5px]">
                                        <img src="/arrow.svg" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 block text-lg text-[#FEFEFE] lg:hidden">
                        Beautiful design has the power to captivate audiences
                        &nbsp;
                        <span className="text-[#CDCDCD]">
                            and drive business growth. I create stunning,
                            user-focused designs that engage, inspire trust, and
                            help businesses grow, transform, and succeed
                            worldwide.
                        </span>
                    </p>

                    <div className="z-20 mt-16 flex items-center justify-between border border-r-0 border-l-0 border-[#A5A5A5] pb-1 text-sm lg:hidden">
                        <span>BRANDING</span>
                        <span>IS</span>
                        <span>THE</span>
                        <span>VOICE</span>
                        <span>OF</span>
                        <span>IDENTITY</span>
                    </div>

                    <div className="z-20 mt-8 flex h-[125px] lg:hidden">
                        <div className="h-full rounded-xl bg-[#FEFEFE] p-1.5">
                            <div className="h-full w-[88px] overflow-hidden rounded-[6px] bg-linear-[57deg] from-[#F63C0C] to-[#FE812E]">
                                <img
                                    src="/user-closeup.png"
                                    className="mt-[-20px] h-[308px] w-[143px] object-cover object-top"
                                />
                            </div>
                        </div>

                        <div className="h-full w-[250px] rounded-xl bg-[#FEFEFE] px-4 py-3">
                            <p className="text-lg font-semibold text-[#16171B]">
                                Let's Talk
                            </p>
                            <p className="text-sm text-[#373737]">
                                rezuankassim@hotmail.com
                            </p>

                            <a
                                href="https://calendly.com/rezuankassim"
                                target="_blank"
                                className="mt-5 inline-flex gap-x-2.5 rounded-full bg-linear-[57deg] from-[#F63C0C] to-[#FE812E] px-1.5 py-1.5 pl-[18px] text-sm font-semibold text-[#FEFEFE]"
                            >
                                Get in Touch
                                <div className="rounded-full bg-[#FEFEFE] p-[5px]">
                                    <img src="/arrow.svg" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="z-20 mt-8 flex items-end gap-x-3 lg:hidden">
                        <div className="flex flex-1 flex-col gap-y-3">
                            <span className="text-xs text-[#A5A5A5]">
                                Socials
                            </span>

                            <div className="flex gap-x-4">
                                <a
                                    href="https://www.instagram.com/reeeezuan/"
                                    target="_blank"
                                    className="text-sm font-semibold text-[#FEFEFE]"
                                >
                                    Instagram
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/rezuan-kassim"
                                    target="_blank"
                                    className="text-sm font-semibold text-[#FEFEFE]"
                                >
                                    Linkedin
                                </a>
                            </div>
                        </div>

                        <span className="text-xs text-[#A5A5A5]">
                            Portfolio @2025
                        </span>
                    </div>
                </div>
            </div>

            <section className="px-5 py-20 lg:mx-auto lg:w-full lg:max-w-[1170px]">
                <div className="flex flex-col gap-y-10 lg:gap-y-20">
                    <div className="flex items-center gap-x-4">
                        <div className="hidden size-5 items-center justify-center rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] lg:flex">
                            <Plus className="size-3 text-white" />
                        </div>
                        <hr className="hidden h-px flex-1 text-[#16171B] lg:block" />
                        <span className="text-xs text-[#FEFEFE]">
                            //APPROACH
                        </span>
                        <hr className="h-px flex-1 text-[#16171B]" />
                        <span className="text-xs text-[#FEFEFE]">
                            THREE PHASES
                        </span>
                    </div>

                    <div className="flex flex-col gap-y-6 text-center lg:mx-auto lg:w-full lg:max-w-[772px] lg:gap-y-5">
                        <p className="text-4xl font-medium text-[#FEFEFE] lg:text-6xl">
                            I'm{' '}
                            <span className="text-[#FF7600]">
                                Rezuan Kassim
                            </span>{' '}
                            Based in Tawau, Sabah
                        </p>
                        <p className="text-white/60 lg:mx-auto lg:w-full lg:max-w-[500px] lg:text-lg">
                            I use responsive design techniques to ensure a
                            seamless and consistent experience across every
                            device.
                        </p>
                    </div>

                    <div className="flex items-center gap-x-3 px-6 lg:mx-auto lg:w-full lg:max-w-[374px]">
                        <div className="size-[38px] rounded-[10px] bg-[#16171B] px-2.5 py-[5px] text-center text-[20px] leading-[1.5] font-semibold text-[#FEFEFE]">
                            1.
                        </div>
                        <div className="h-px flex-1 rounded-r-full bg-linear-90 from-transparent to-[#FF7600]"></div>
                        <div className="size-[38px] rounded-[10px] bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] px-2.5 py-[5px] text-center text-[20px] leading-[1.5] font-semibold text-[#FEFEFE]">
                            2.
                        </div>
                        <div className="h-px flex-1 rounded-r-full bg-[#16171B]"></div>
                        <div className="size-[38px] rounded-[10px] bg-[#16171B] px-2.5 py-[5px] text-center text-[20px] leading-[1.5] font-semibold text-[#FEFEFE]">
                            3.
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-4 rounded-xl bg-[#16171B] px-[30px] py-11 text-center lg:gap-y-5">
                        <span className="text-[28px] leading-[1.4] font-medium text-[#FEFEFE]">
                            Research & Insights
                        </span>

                        <p className="text-sm text-[#A5A5A5] lg:text-base">
                            Analyze user needs, market trends, and brand goals
                            to set a clear foundation for design.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-y-4 rounded-xl bg-[#16171B] px-[30px] py-11 text-center">
                        <span className="text-[28px] leading-[1.4] font-medium text-[#FEFEFE]">
                            Design & Build
                        </span>

                        <p className="text-sm text-[#A5A5A5] lg:text-base">
                            Craft intuitive designs and implement them into
                            functional digital products that bring ideas to
                            life.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-y-4 rounded-xl bg-[#16171B] px-[30px] py-11 text-center">
                        <span className="text-[28px] leading-[1.4] font-medium text-[#FEFEFE]">
                            Launch & Refine
                        </span>

                        <p className="text-sm text-[#A5A5A5] lg:text-base">
                            Deliver polished solutions, monitor performance, and
                            refine for long-term success.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-5 py-20 lg:mx-auto lg:w-full lg:max-w-[1170px]">
                <div className="flex flex-col gap-y-10 lg:gap-y-20">
                    <div className="flex items-center gap-x-4">
                        <div className="hidden size-5 items-center justify-center rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] lg:flex">
                            <Plus className="size-3 text-white" />
                        </div>
                        <hr className="hidden h-px flex-1 text-[#16171B] lg:block" />
                        <span className="text-xs text-[#FEFEFE]">
                            //EXPERIENCE
                        </span>
                        <hr className="h-px flex-1 text-[#16171B]" />
                        <span className="text-xs text-[#FEFEFE]">
                            SINCE 2019
                        </span>
                    </div>

                    <div className="flex flex-col gap-y-12 lg:max-w-[573px]">
                        <p className="font-alexandria text-2xl font-medium text-[#FEFEFE] lg:text-[32px] lg:leading-[1.2]">
                            Designing seamless digital experiences that go
                            beyond visuals and create lasting impact.
                        </p>

                        <div className="flex">
                            <a
                                href="https://calendly.com/rezuankassim"
                                target="_blank"
                                className="mt-5 inline-flex items-center gap-x-2.5 rounded-full bg-linear-[57deg] from-[#F63C0C] to-[#FE812E] px-1.5 py-1.5 pl-[18px] font-medium text-[#FEFEFE] lg:mt-10 lg:pl-6 lg:text-[22px] lg:leading-[1.5]"
                            >
                                See more Experience
                                <div className="flex size-[46px] items-center justify-center rounded-full bg-[#FEFEFE]">
                                    <img
                                        src="/arrow.svg"
                                        className="size-[25px]"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex w-full flex-col gap-y-10 lg:flex-row lg:gap-x-6">
                    <div className="flex flex-col gap-y-5 lg:flex-1">
                        <div className="flex flex-col justify-center gap-y-6 rounded-xl bg-linear-[65deg] from-[#F63C0C] to-[#FE812E] px-6 py-7">
                            <div className="flex w-full items-center justify-between text-[#FEFEFE]">
                                <span className="text-sm font-semibold">
                                    01.
                                </span>
                                <div className="rounded-full border border-[#FC9766] px-3 py-1 text-sm">
                                    2023 - Present
                                </div>
                            </div>

                            <div>
                                <p className="text-[28px] leading-[1.4] font-medium text-[#FEFEFE]">
                                    Senior Software Developer
                                </p>

                                <p className="mt-3 text-[20px] leading-[1.4] text-[#CDCDCD]">
                                    at VeecoTech
                                </p>
                            </div>
                        </div>

                        <div className="h-1 w-full bg-linear-90 from-[#FE812E] to-[#F63C0C]"></div>
                    </div>

                    <div className="flex flex-col gap-y-5">
                        <div className="flex flex-col justify-center gap-y-6 rounded-xl bg-[#16171B] px-6 py-7">
                            <div className="flex w-full items-center justify-between text-[#FEFEFE]">
                                <span className="text-sm font-semibold">
                                    02.
                                </span>
                                <div className="rounded-full border border-[#373737] px-3 py-1 text-sm">
                                    2021 - 2022
                                </div>
                            </div>

                            <div>
                                <p className="text-[28px] leading-[1.4] font-medium text-[#FEFEFE]">
                                    Frontend Engineer
                                </p>

                                <p className="mt-3 text-[20px] leading-[1.4] text-[#CDCDCD]">
                                    at EasyParcel
                                </p>
                            </div>
                        </div>

                        <div className="h-1 w-full bg-[#16171B]"></div>
                    </div>

                    <div className="flex flex-col gap-y-5">
                        <div className="flex flex-col justify-center gap-y-6 rounded-xl bg-[#16171B] px-6 py-7">
                            <div className="flex w-full items-center justify-between text-[#FEFEFE]">
                                <span className="text-sm font-semibold">
                                    03.
                                </span>
                                <div className="rounded-full border border-[#373737] px-3 py-1 text-sm">
                                    2019 - 2021
                                </div>
                            </div>

                            <div>
                                <p className="text-[28px] leading-[1.4] font-medium text-[#FEFEFE]">
                                    PHP Developer
                                </p>

                                <p className="mt-3 text-[20px] leading-[1.4] text-[#CDCDCD]">
                                    at Convep Mobilogy
                                </p>
                            </div>
                        </div>

                        <div className="h-1 w-full bg-[#16171B]"></div>
                    </div>
                </div>
            </section>

            <section
                id="projects"
                className="px-5 py-20 lg:mx-auto lg:w-full lg:max-w-[1170px]"
            >
                <div className="flex flex-col gap-y-10 lg:gap-y-20">
                    <div className="flex items-center gap-x-4">
                        <div className="hidden size-5 items-center justify-center rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] lg:flex">
                            <Plus className="size-3 text-white" />
                        </div>
                        <hr className="hidden h-px flex-1 text-[#16171B] lg:block" />
                        <span className="text-xs text-[#FEFEFE]">
                            //LATEST WORK
                        </span>
                        <hr className="h-px flex-1 text-[#16171B]" />
                        <span className="text-xs text-[#FEFEFE]">
                            FAST DELIVERY
                        </span>
                    </div>

                    <div className="flex flex-col gap-y-3 lg:-mx-18">
                        <Marquee
                            pauseOnHover
                            className="flex items-center gap-x-4 pb-0 font-alexandria text-[28px] leading-[1.4] font-medium text-[#FEFEFE] lg:text-6xl"
                        >
                            <img src="/asterik-mobile.svg" />
                            <span>WORKS</span>
                            <img src="/asterik-mobile.svg" />
                            <span>SHOW CASE</span>
                            <img src="/asterik-mobile.svg" />
                            <span>PROJECTS</span>
                        </Marquee>

                        <Marquee
                            pauseOnHover
                            reverse
                            className="flex items-center gap-x-4 pt-0 font-alexandria text-[28px] leading-[1.4] font-medium text-[#6D6D6E] lg:text-6xl"
                        >
                            <img src="/asterik-dark-mobile.svg" />
                            <span>SHOW CASE</span>
                            <img src="/asterik-dark-mobile.svg" />
                            <span>WORKS</span>
                            <img src="/asterik-dark-mobile.svg" />
                            <span>PROJECTS</span>
                        </Marquee>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:gap-x-12">
                    <div className="flex flex-col gap-y-6">
                        <div className="relative h-[200px] w-[350px] rounded-xl lg:h-[324px] lg:w-full">
                            <img
                                src="/project-1.jpg"
                                className="h-full w-full rounded-xl object-cover object-center"
                            />

                            <div className="absolute top-0 left-0 h-full w-full rounded-xl bg-linear-90 to-[#FF7600] opacity-20"></div>

                            <div className="absolute bottom-0 left-0 mb-3 ml-3 flex size-7 items-center justify-center rounded-full bg-white">
                                <img src="/arrow.svg" className="size-3.5" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="font-alexandria text-2xl font-medium text-[#FF7600] lg:text-[28px] lg:leading-[1.4]">
                                LCD Logistics
                            </span>

                            <div className="rounded-full border border-[#373737] bg-[#16171B] px-3 py-1 text-xs">
                                <span>Web Development</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="faqs"
                className="px-5 py-20 lg:mx-auto lg:w-full lg:max-w-[1170px]"
            >
                <div className="flex flex-col gap-y-10 lg:gap-y-20">
                    <div className="flex items-center gap-x-4">
                        <div className="hidden size-5 items-center justify-center rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] lg:flex">
                            <Plus className="size-3 text-white" />
                        </div>
                        <hr className="hidden h-px flex-1 text-[#16171B] lg:block" />
                        <span className="text-xs text-[#FEFEFE]">//FAQs</span>
                        <hr className="h-px flex-1 text-[#16171B]" />
                        <span className="text-xs text-[#FEFEFE]">CONCERNS</span>
                    </div>

                    <div className="flex flex-col gap-y-4 lg:mx-auto lg:max-w-[772px]">
                        <span className="text-center text-4xl font-medium text-[#FEFEFE] lg:text-6xl">
                            Frequently Asked Questions
                        </span>

                        <p className="text-center text-[#A5A5A5] lg:text-lg">
                            Get quick answers about our services, pricing, and
                            more.
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-y-8 lg:mx-auto lg:mt-20 lg:max-w-[772px]">
                    <Collapsible>
                        <CollapsibleTrigger className="group flex w-full items-center justify-between data-[state=closed]:text-[#A5A5A5] data-[state=open]:text-[#FEFEFE]">
                            <p className="font-alexandria text-lg font-medium lg:text-[28px] lg:leading-[1.4]">
                                What Services Do You Offer?
                            </p>

                            <Plus className="block size-6 group-data-[state=open]:hidden" />
                            <Minus className="hidden size-6 group-data-[state=open]:block" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 text-sm text-[#A5A5A5] lg:mt-5 lg:text-base">
                            Blending creativity and functionality, I design
                            user-focused digital products and responsive
                            websites that not only look stunning but also
                            deliver.
                        </CollapsibleContent>
                    </Collapsible>

                    <div className="h-px w-full bg-[#16171B]"></div>

                    <Collapsible>
                        <CollapsibleTrigger className="group flex w-full items-center justify-between data-[state=closed]:text-[#A5A5A5] data-[state=open]:text-[#FEFEFE]">
                            <p className="text-left font-alexandria text-lg font-medium lg:text-[28px] lg:leading-[1.4]">
                                Can You Update My Existing Website?
                            </p>

                            <Plus className="block size-6 group-data-[state=open]:hidden" />
                            <Minus className="hidden size-6 group-data-[state=open]:block" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 text-sm text-[#A5A5A5] lg:mt-5 lg:text-base">
                            Absolutely! I specialize in revamping and updating
                            existing websites to enhance their design, improve
                            user experience, and ensure they are responsive
                            across all devices.
                        </CollapsibleContent>
                    </Collapsible>

                    <div className="h-px w-full bg-[#16171B]"></div>

                    <Collapsible>
                        <CollapsibleTrigger className="group flex w-full items-center justify-between data-[state=closed]:text-[#A5A5A5] data-[state=open]:text-[#FEFEFE]">
                            <p className="text-left font-alexandria text-lg font-medium lg:text-[28px] lg:leading-[1.4]">
                                Will My Website Be Mobile-Friendly?
                            </p>

                            <Plus className="block size-6 group-data-[state=open]:hidden" />
                            <Minus className="hidden size-6 group-data-[state=open]:block" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 text-sm text-[#A5A5A5] lg:mt-5 lg:text-base">
                            Yes, all websites I design are fully responsive and
                            optimized for mobile devices, ensuring a seamless
                            experience for users on smartphones and tablets.
                        </CollapsibleContent>
                    </Collapsible>

                    <div className="h-px w-full bg-[#16171B]"></div>

                    <Collapsible>
                        <CollapsibleTrigger className="group flex w-full items-center justify-between data-[state=closed]:text-[#A5A5A5] data-[state=open]:text-[#FEFEFE]">
                            <p className="text-left font-alexandria text-lg font-medium lg:text-[28px] lg:leading-[1.4]">
                                How Much Does A New Website Cost?
                            </p>

                            <Plus className="block size-6 group-data-[state=open]:hidden" />
                            <Minus className="hidden size-6 group-data-[state=open]:block" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 text-sm text-[#A5A5A5] lg:mt-5 lg:text-base">
                            The cost of a new website varies based on its
                            complexity, features, and design requirements. I
                            offer competitive pricing tailored to your needs.
                            Check out the pricing section below.
                        </CollapsibleContent>
                    </Collapsible>

                    <div className="h-px w-full bg-[#16171B]"></div>

                    <Collapsible>
                        <CollapsibleTrigger className="group flex w-full items-center justify-between data-[state=closed]:text-[#A5A5A5] data-[state=open]:text-[#FEFEFE]">
                            <p className="text-left font-alexandria text-lg font-medium lg:text-[28px] lg:leading-[1.4]">
                                How Fast Can You Deliver?
                            </p>

                            <Plus className="block size-6 group-data-[state=open]:hidden" />
                            <Minus className="hidden size-6 group-data-[state=open]:block" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 text-sm text-[#A5A5A5] lg:mt-5 lg:text-base">
                            Delivery timelines depend on the project's scope and
                            complexity. Typically, a basic website can be
                            delivered within 1 week, while more complex projects
                            may take longer. I prioritize quality and timely
                            delivery.
                        </CollapsibleContent>
                    </Collapsible>

                    <div className="h-px w-full bg-[#16171B]"></div>
                </div>
            </section>

            <section
                id="pricing"
                className="px-5 py-20 lg:mx-auto lg:w-full lg:max-w-[1170px]"
            >
                <div className="flex flex-col gap-y-10 lg:gap-y-20">
                    <div className="flex items-center gap-x-4">
                        <div className="hidden size-5 items-center justify-center rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] lg:flex">
                            <Plus className="size-3 text-white" />
                        </div>
                        <hr className="hidden h-px flex-1 text-[#16171B] lg:block" />
                        <span className="text-xs text-[#FEFEFE]">
                            //PLAN & PRICING
                        </span>
                        <hr className="h-px flex-1 text-[#16171B]" />
                        <span className="text-xs text-[#FEFEFE]">
                            SIMPLE PLAN
                        </span>
                    </div>

                    <div className="flex flex-col gap-y-4 lg:mx-auto lg:max-w-[772px] lg:gap-y-5">
                        <span className="text-center text-4xl font-medium text-[#FEFEFE] lg:text-6xl">
                            Business or Personal? <br /> I Have a Plan.
                        </span>

                        <p className="text-center text-balance text-[#A5A5A5] lg:mx-auto lg:max-w-[530px] lg:text-lg">
                            Explore our clear and affordable pricing plans for
                            website development. No hidden fees—only quality
                            care at the right cost.
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-y-10 lg:mt-20 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-x-6">
                    <div className="flex flex-col gap-y-8">
                        <div className="rounded-3xl bg-[#16171B] px-6 py-9">
                            <div className="flex flex-col gap-y-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-2.5 rounded-full border border-[#373737] px-2.5 py-1">
                                        <div className="size-1.5 rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E]"></div>

                                        <span className="text-xs">
                                            Available for work
                                        </span>
                                    </div>

                                    <span className="font-medium">
                                        4-6 days
                                    </span>
                                </div>

                                <div>
                                    <h3 className="font-alexandria text-[28px] leading-[1.4] font-medium">
                                        Landing Pages
                                    </h3>
                                    <p className="text-sm text-[#A5A5A5]">
                                        Perfect for small business and startups.
                                    </p>
                                </div>

                                <div className="h-px w-full bg-[#373737]"></div>
                            </div>
                            <ul className="mt-9 flex flex-col gap-y-2 font-medium text-[#A5A5A5]">
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Landing Pages
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Design and Development
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Responsive Layout
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    WhatsApp Chat
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Analytics Integration
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Free SSL (HTTPS)
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Free 1 Year Domain
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Free 1 Year Domain
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <X className="size-5 text-[#F63C0C]" />
                                    Advanced SEO
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <X className="size-5 text-[#F63C0C]" />
                                    Pause or Cancel Anytime
                                </li>
                            </ul>
                            <div className="mt-9 flex items-center justify-between rounded-full bg-[#FEFEFE] py-1.5 pr-1.5 pl-6 text-sm text-[#16171B]">
                                <div className="flex items-center gap-x-1">
                                    <span>From</span>
                                    <span className="text-[42px] leading-[1.2]">
                                        RM2,499
                                    </span>
                                    <span>/ Project</span>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center justify-between gap-x-4">
                                <div className="h-px w-full bg-[#373737]"></div>
                                <span>or</span>
                                <div className="h-px w-full bg-[#373737]"></div>
                            </div>
                            <div className="mt-2 flex items-center justify-between rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] px-6 py-1.5 text-sm text-[#FEFEFE]">
                                <div className="mx-auto flex items-center justify-center gap-x-1">
                                    <span>From</span>
                                    <span className="text-[42px] leading-[1.2]">
                                        RM499
                                    </span>
                                    <span>/ month</span>
                                </div>
                            </div>
                            <div className="mt-1 flex items-center justify-center">
                                For 6 Monthly Payments
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-8">
                        <div className="rounded-3xl bg-linear-[52deg] from-[#F63C0C] to-[#FE812E] px-6 py-9">
                            <div className="flex flex-col gap-y-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-2.5 rounded-full border border-transparent bg-[#FC9766] px-2.5 py-1">
                                        <div className="size-1.5 rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E]"></div>

                                        <span className="text-xs">
                                            Available for work
                                        </span>
                                    </div>

                                    <span className="font-medium">
                                        2-3 weeks
                                    </span>
                                </div>

                                <div>
                                    <h3 className="font-alexandria text-[28px] leading-[1.4] font-medium">
                                        Full Website
                                    </h3>
                                    <p className="text-sm text-[#CDCDCD]">
                                        Perfect for businesses that want to
                                        grow.
                                    </p>
                                </div>

                                <div className="h-px w-full bg-[#CDCDCD]"></div>
                            </div>
                            <ul className="mt-9 flex flex-col gap-y-2 font-medium text-[#FEFEFE]">
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    3-5 Pages Website
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Design and Development
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Responsive Layout
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    WhatsApp Chat
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Analytics Integration
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Free SSL (HTTPS)
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Free 1 Year Domain
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Free 1 Year Domain
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Advanced SEO
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Pause or Cancel Anytime
                                </li>
                            </ul>
                            <div className="mt-9 flex items-center justify-between rounded-full bg-[#FEFEFE] py-1.5 pr-1.5 pl-6 text-sm text-[#16171B]">
                                <div className="flex items-center gap-x-1">
                                    <span>From</span>
                                    <span className="text-[42px] leading-[1.2]">
                                        RM5,499
                                    </span>
                                    <span>/ Project</span>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center justify-between gap-x-4">
                                <div className="h-px w-full bg-[#CDCDCD]"></div>
                                <span>or</span>
                                <div className="h-px w-full bg-[#CDCDCD]"></div>
                            </div>
                            <div className="mt-2 flex items-center justify-between rounded-full bg-[#FC9766] px-6 py-1.5 text-sm text-[#FEFEFE]">
                                <div className="mx-auto flex items-center justify-center gap-x-1">
                                    <span>From</span>
                                    <span className="text-[42px] leading-[1.2]">
                                        RM1,099
                                    </span>
                                    <span>/ month</span>
                                </div>
                            </div>
                            <div className="mt-1 flex items-center justify-center">
                                For 6 Monthly Payments
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-y-8">
                        <div className="rounded-3xl bg-[#16171B] px-6 py-9 lg:flex lg:h-full lg:flex-col">
                            <div className="flex flex-col gap-y-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-2.5 rounded-full border border-[#373737] px-2.5 py-1">
                                        <div className="size-1.5 rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E]"></div>

                                        <span className="text-xs">
                                            Available for work
                                        </span>
                                    </div>

                                    <span className="font-medium">
                                        Custom deadline
                                    </span>
                                </div>

                                <div>
                                    <h3 className="font-alexandria text-[28px] leading-[1.4] font-medium">
                                        Custom Website
                                    </h3>
                                    <p className="text-sm text-[#A5A5A5]">
                                        Perfect for businesses with unique
                                        needs.
                                    </p>
                                </div>

                                <div className="h-px w-full bg-[#373737]"></div>
                            </div>
                            <ul className="mt-9 flex flex-col gap-y-2 font-medium text-[#A5A5A5] lg:flex-1">
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Include all features
                                </li>
                                <li className="flex items-center gap-x-4">
                                    <Check className="size-5 text-[#FEFEFE]" />
                                    Custom requirements
                                </li>
                            </ul>
                            <div className="mt-9 flex items-center justify-between rounded-full bg-[#FEFEFE] py-1.5 pr-1.5 pl-6 text-sm text-[#16171B]">
                                <div className="flex items-center gap-x-1">
                                    <span>From</span>
                                    <span className="text-[42px] leading-[1.2]">
                                        RM7,499
                                    </span>
                                    <span>/ Project</span>
                                </div>
                            </div>
                            <div className="mt-2 flex items-center justify-between gap-x-4">
                                <div className="h-px w-full bg-[#373737]"></div>
                                <span>or</span>
                                <div className="h-px w-full bg-[#373737]"></div>
                            </div>
                            <div className="mt-2 flex items-center justify-between rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] px-6 py-1.5 text-sm text-[#FEFEFE]">
                                <div className="mx-auto flex items-center justify-center gap-x-1">
                                    <span>From</span>
                                    <span className="text-[42px] leading-[1.2]">
                                        RM1,499
                                    </span>
                                    <span>/ month</span>
                                </div>
                            </div>
                            <div className="mt-1 flex items-center justify-center">
                                For 6 Monthly Payments
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="contact"
                className="px-5 py-20 lg:mx-auto lg:w-full lg:max-w-[972px]"
            >
                <div className="flex flex-col gap-y-16 lg:gap-y-20">
                    <div className="flex flex-col items-center gap-y-4 text-center lg:gap-y-8">
                        <div className="flex items-center gap-x-2.5">
                            <div className="size-2.5 rounded-full bg-linear-[64deg] from-[#F63C0C] to-[#FE812E] lg:size-3"></div>
                            <span className="text-xs text-[#FEFEFE] lg:text-sm">
                                Web Development
                            </span>
                        </div>

                        <p className="font-alexandria text-[42px] leading-[1.2] font-medium text-[#FEFEFE] lg:text-[94px] lg:leading-[1.2]">
                            LET'S WORK TOGETHER
                        </p>

                        <p className="text-[#A5A5A5] lg:mx-auto lg:max-w-[507px] lg:text-lg">
                            Contact me and discover the website solution
                            perfectly suited for your business.
                        </p>
                    </div>

                    <div className="flex">
                        <a
                            href="https://calendly.com/rezuankassim"
                            target="_blank"
                            className="flex w-full items-center gap-x-2.5 rounded-full bg-linear-[57deg] from-[#F63C0C] to-[#FE812E] px-1.5 py-1.5 pl-[18px] font-alexandria text-4xl font-medium text-[#FEFEFE] lg:mx-auto lg:mt-10 lg:max-w-[533px] lg:pl-6 lg:text-6xl"
                        >
                            <span className="flex flex-1 items-center justify-center">
                                Contact Now
                            </span>
                            <div className="flex size-[46px] items-center justify-center rounded-full bg-[#FEFEFE] lg:size-[84px]">
                                <img
                                    src="/arrow.svg"
                                    className="size-[25px] lg:size-[46px]"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="mt-20 flex flex-col gap-y-16 lg:mt-40 lg:gap-y-20">
                    <img
                        src="/profile.jpeg"
                        className="h-[400px] w-full rounded-xl object-cover object-top lg:h-[560px] lg:rounded-[20px]"
                    />

                    <p className="text-center text-lg text-[#A5A5A5] lg:text-[22px] lg:leading-[1.5] lg:text-pretty">
                        BASED IN MALAYSIA, I AM AN INNOVATIVE WEBSITE DEVELOPER.
                        MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT
                        TYPOGRAPHY, AND INTUITIVE DESIGN IS EVIDENT IN MY WORK.
                    </p>

                    <div className="flex flex-col gap-y-16 lg:gap-y-8">
                        <div className="h-px w-full bg-[#16171B]"></div>

                        <div className="flex items-center justify-center gap-x-8 gap-y-5">
                            <a
                                href="https://www.instagram.com/reeeezuan/"
                                target="_blank"
                                className="flex items-center gap-x-1.5 font-alexandria text-2xl font-medium text-[#FEFEFE]"
                            >
                                <span>Instagram</span>
                                <img src="/arrow.svg" className="size-[18px]" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/rezuan-kassim"
                                target="_blank"
                                className="flex items-center gap-x-1.5 font-alexandria text-2xl font-medium text-[#FEFEFE]"
                            >
                                <span>LinkedIn</span>
                                <img src="/arrow.svg" className="size-[18px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="flex flex-col gap-y-10 pt-12 pb-5 lg:pb-8">
                <div className="flex items-center justify-center gap-x-1.5 font-alexandria text-[70px] leading-[1] tracking-tight lg:text-[258px]">
                    <span className="bg-[url('/text-clip.png')] bg-size-[100%_70px] bg-clip-text text-transparent lg:bg-size-[100%_258px]">
                        Rezuan
                    </span>
                    <span className="bg-[url('/text-clip.png')] bg-size-[100%_70px] bg-clip-text text-transparent opacity-60 lg:bg-size-[100%_258px]">
                        K.
                    </span>
                </div>

                <div className="h-px w-full bg-[#16171B]"></div>

                <div className="flex flex-col items-center gap-y-3 text-sm text-[#6D6D6E] lg:flex-row lg:justify-between lg:px-24 lg:text-base">
                    <p>© 2025 Rezuan Kassim</p>

                    <p>Made by Rezuan Kassim</p>
                </div>
            </footer>
        </>
    );
}
