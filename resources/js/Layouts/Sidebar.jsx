import { useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    TransitionChild,
} from "@headlessui/react";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";

import classNames from "classnames";

import { usePage } from "@inertiajs/react";

// function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const { url } = usePage();
    return (
        <>
            <Dialog
                open={sidebarOpen}
                onClose={setSidebarOpen}
                className="relative z-50 lg:hidden"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                />

                <div className="fixed inset-0 flex">
                    <DialogPanel
                        transition
                        className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                    >
                        <TransitionChild>
                            <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                                <button
                                    type="button"
                                    onClick={() => setSidebarOpen(false)}
                                    className="-m-2.5 p-2.5"
                                >
                                    <span className="sr-only">
                                        Close sidebar
                                    </span>
                                    <XMarkIcon
                                        aria-hidden="true"
                                        className="h-6 w-6 text-white"
                                    />
                                </button>
                            </div>
                        </TransitionChild>
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                            <Link
                                to="/admin/dashboard"
                                className="flex h-16 shrink-0 items-center"
                            >
                                <img
                                    alt="Your Company"
                                    src="/assets/Dashboard/logo/Dashboard Logo.svg"
                                    className="h-8 w-auto"
                                />
                            </Link>
                            <nav className="flex flex-1 flex-col">
                                <ul
                                    role="list"
                                    className="flex flex-1 flex-col gap-y-7"
                                >
                                    <li>
                                        <ul
                                            role="list"
                                            className="-mx-2 space-y-1"
                                        >
                                            <li className=" space-y-1">
                                                <NavLink
                                                    to="/admin/dashboard"
                                                    className={({ isActive }) =>
                                                        classNames(
                                                            isActive
                                                                ? "bg-[#7F56D9] text-white"
                                                                : "text-gray-800 dark:text-gray-400 hover:bg-[#7F56D9] hover:text-white",
                                                            "group flex gap-x-3 rounded-md p-2 lg:text-lg font-semibold leading-6"
                                                        )
                                                    }
                                                >
                                                    {({ isActive }) => (
                                                        <>
                                                            <img
                                                                src="/assets/icon/network black icon.svg"
                                                                className={classNames(
                                                                    "h-6 w-6 shrink-0",
                                                                    "group-hover:brightness-0 group-hover:invert",
                                                                    isActive
                                                                        ? "brightness-0 invert"
                                                                        : ""
                                                                )}
                                                                alt="Dashboard Icon"
                                                            />
                                                            Dashboard
                                                        </>
                                                    )}
                                                </NavLink>
                                                <NavLink
                                                    to="/admin/transction"
                                                    className={({ isActive }) =>
                                                        classNames(
                                                            isActive
                                                                ? "bg-[#7F56D9] text-white"
                                                                : "text-gray-800 hover:bg-[#7F56D9] hover:text-white",
                                                            "group flex gap-x-3 rounded-md p-2 group-hover:brightness-0 lg:text-lg font-semibold leading-6"
                                                        )
                                                    }
                                                >
                                                    {({ isActive }) => (
                                                        <>
                                                            <img
                                                                src="/assets/icon/switch-horizontal-01 (1).svg"
                                                                className={classNames(
                                                                    "h-6 w-6 shrink-0",
                                                                    "group-hover:brightness-0 group-hover:invert",
                                                                    isActive
                                                                        ? "brightness-0 invert"
                                                                        : ""
                                                                )}
                                                                alt="Dashboard Icon"
                                                            />
                                                            Transactions
                                                        </>
                                                    )}
                                                </NavLink>
                                                <NavLink
                                                    to="/admin/earn-20$"
                                                    className={({ isActive }) =>
                                                        classNames(
                                                            isActive
                                                                ? "bg-[#7F56D9] text-white"
                                                                : "text-gray-800 dark:text-gray-400 hover:bg-[#7F56D9] hover:text-white",
                                                            "group flex gap-x-3 rounded-md p-2 lg:text-lg font-semibold leading-6"
                                                        )
                                                    }
                                                >
                                                    {({ isActive }) => (
                                                        <>
                                                            <img
                                                                src="/assets/icon/gift black icon.svg"
                                                                className={classNames(
                                                                    "h-6 w-6 shrink-0",
                                                                    "group-hover:brightness-0 group-hover:invert",
                                                                    isActive
                                                                        ? "brightness-0 invert"
                                                                        : ""
                                                                )}
                                                                alt="Dashboard Icon"
                                                            />
                                                            Earn 20$
                                                        </>
                                                    )}
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="mt-auto">
                                        <a
                                            href="#"
                                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-400 hover:bg-gray-50 hover:text-indigo-600"
                                        >
                                            <Cog6ToothIcon
                                                aria-hidden="true"
                                                className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                            />
                                            Settings
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col dark:bg-gray-800">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r dark:border-gray-700 border-gray-200 px-6 pb-4">
                    <Link
                        to="/admin/dashboard"
                        className="flex h-16 shrink-0 items-center"
                    >
                        <img
                            alt="Your Company"
                            src="/assets/Dashboard/logo/Dashboard Logo.svg"
                            className="h-8 w-auto"
                        />
                    </Link>
                    <nav className="flex flex-1 flex-col">
                        <ul
                            role="list"
                            className="flex flex-1 flex-col gap-y-7"
                        >
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    <li className=" space-y-1">


                                        <Link
                                            href={route("dashboard")}
                                            className={`group flex text-gray-500 items-center gap-x-2 text-base sm:gap-x-3 rounded p-2 lg:text-lg font-semibold leading-6 hover:bg-[#7F56D9] hover:text-white ${
                                                route().current("dashboard")
                                                    ? "bg-[#7F56D9] text-white"
                                                    : ""
                                            }`}
                                        >
                                            <img
                                                src={
                                                    window.location.origin +
                                                    "/assets/Dashboard/sidebar/network black icon.svg"
                                                }
                                                className={`h-4 w-4 sm:h-6 sm:w-6 shrink-0 group-hover:brightness-0 group-hover:invert ${
                                                    route().current(
                                                        "dashboard"
                                                    )
                                                        ? "brightness-0 invert"
                                                        : ""
                                                }`}
                                                alt="Send Money"
                                            />
                                            Dashboard
                                        </Link>
                                        <Link
                                            href={route("transection")}
                                            className={`group flex text-gray-500 items-center gap-x-2 text-base sm:gap-x-3 rounded p-2 lg:text-lg font-semibold leading-6 hover:bg-[#7F56D9] hover:text-white ${
                                                route().current("transection")
                                                    ? "bg-[#7F56D9] text-white"
                                                    : ""
                                            }`}
                                        >
                                            <img
                                                src={
                                                    window.location.origin +
                                                    "/assets/Dashboard/sidebar/switch-horizontal-01.svg"
                                                }
                                                className={`h-4 w-4 sm:h-6 sm:w-6 shrink-0 group-hover:brightness-0 group-hover:invert ${
                                                    route().current(
                                                        "transection"
                                                    )
                                                        ? "brightness-0 invert"
                                                        : ""
                                                }`}
                                                alt="Send Money"
                                            />
                                            transection
                                        </Link>
                                        <Link
                                            href={route("earnmoney")}
                                            className={`group flex text-gray-500 items-center gap-x-2 text-base sm:gap-x-3 rounded p-2 lg:text-lg font-semibold leading-6 hover:bg-[#7F56D9] hover:text-white ${
                                                route().current("earnmoney")
                                                    ? "bg-[#7F56D9] text-white"
                                                    : ""
                                            }`}
                                        >
                                            <img
                                                src={
                                                    window.location.origin +
                                                    "/assets/Dashboard/sidebar/gift-02.svg"
                                                }
                                                className={`h-4 w-4 sm:h-6 sm:w-6 shrink-0 group-hover:brightness-0 group-hover:invert ${
                                                    route().current(
                                                        "earnmoney"
                                                    )
                                                        ? "brightness-0 invert"
                                                        : ""
                                                }`}
                                                alt="Send Money"
                                            />
                                          Earn 20$
                                        </Link>

                                        <Link
                                            href={route("earnmoney")}
                                            className={classNames(
                                                url === route("earnmoney") // সম্পূর্ণ URL চেক
                                                    ? "bg-red-500 text-white [&.active]:bg-[#7F56D9]" // Active হলে bg-red-500 হবে
                                                    : "text-gray-800 dark:text-gray-400 [&.active]:bg-[#7F56D9] hover:bg-[#7F56D9] hover:text-white", // Hover effect
                                                "group flex gap-x-3 rounded-md p-2  lg:text-lg font-semibold leading-6 transition-all duration-300"
                                            )}
                                        >
                                            <img
                                                src="/assets/Dashboard/sidebar/gift-02.svg"
                                                className={classNames(
                                                    "h-6 w-6 shrink-0 group-hover:brightness-0 group-hover:invert",
                                                    url === route("earnmoney")
                                                        ? "brightness-0 invert"
                                                        : "" // Active হলে আইকনের রঙ পরিবর্তন
                                                )}
                                                alt="User Icon"
                                            />
                                            User
                                        </Link>{" "}
                                    </li>
                                </ul>
                            </li>

                            <li className="mt-auto">
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-400 hover:bg-gray-50 hover:text-indigo-600"
                                >
                                    <Cog6ToothIcon
                                        aria-hidden="true"
                                        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                    />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
