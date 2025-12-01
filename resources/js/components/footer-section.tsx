import { Minus, Plus } from 'lucide-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from './ui/collapsible';

function FooterSection() {
    return (
        <>
            {/* FAQ section */}
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

            {/* Contact section */}
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

            {/* Footer section */}
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

export default FooterSection;
