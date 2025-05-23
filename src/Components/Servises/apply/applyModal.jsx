import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import ApplyFrom from "./applyFrom/ApplyFrom";
import { useTheme } from "../../ThemProvider/ThemProvider";

export default function ApplyModal({ isModalOpen, setIsModalOpen, serviceId, setAppliedServices }) {
    const { darkMode } = useTheme();

    return (
        <Transition appear show={isModalOpen} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                onClose={() => setIsModalOpen(false)}
            >
                {/* Overlay */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
                </Transition.Child>

                {/* Modal Panel */}
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={`
                                w-full max-w-md transform overflow-hidden 
                                rounded-2xl p-6 text-left align-middle shadow-xl transition-all 
                                ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
                            `}>
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-semibold leading-6"
                                >
                                    Apply Now
                                </Dialog.Title>

                                <div className="mt-4">
                                    <ApplyFrom
                                        setIsModalOpen={setIsModalOpen}
                                        serviceId={serviceId}
                                        setAppliedServices={setAppliedServices}
                                    />
                                </div>

                                <div className="mt-6 text-right">
                                    <button
                                        type="button"
                                        className={`inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium 
                                            ${darkMode
                                                ? 'bg-blue-800 text-white hover:bg-blue-700 focus:ring-blue-400'
                                                : 'bg-blue-100 text-blue-900 hover:bg-blue-200 focus:ring-blue-500'
                                            } 
                                            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
