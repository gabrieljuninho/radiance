"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { cn } from "@/common/libs/utils";

const ModalForm: FC = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleClick = () => {
    isFocus ? setIsFocus(false) : setIsFocus(true);
  };

  return (
    <div className="relative z-100 flex h-[40.625rem] max-h-90vh min-h-[25rem] min-w-[37.5rem] max-w-80vw shrink basis-auto flex-col items-stretch overflow-hidden rounded-2xl border-none">
      <div className="flex shrink grow basis-auto flex-col items-stretch bg-white">
        <div className="flex shrink grow basis-auto flex-col items-stretch self-stretch">
          <div
            tabIndex={0}
            className="flex shrink-0 basis-auto flex-col items-stretch"
          ></div>
          <div
            tabIndex={0}
            className="flex shrink grow basis-auto flex-col items-stretch bg-white"
          >
            <div className="flex shrink-0 basis-auto flex-col items-stretch">
              <div className="z-2 flex h-[3.313rem] shrink-0 basis-auto flex-col items-stretch">
                <div className="flex shrink-0 basis-auto flex-col items-stretch">
                  <div className="flex h-[3.313rem] shrink-0 basis-auto flex-col items-stretch bg-light backdrop-blur-md">
                    <div className="mx-auto flex h-[3.313rem] w-full max-w-[37.5rem] shrink-0 basis-auto flex-row items-center justify-center px-4">
                      <div className="flex min-h-8 min-w-[3.5rem] shrink grow basis-1/2 flex-col items-start justify-center self-stretch">
                        <button
                          type="button"
                          className="-ml-2 flex min-h-9 min-w-9 shrink-0 basis-auto select-none flex-col items-stretch rounded-full transition-all duration-200 hover:bg-light-primary"
                        >
                          <div className="flex min-w-0 grow flex-row items-center justify-center whitespace-pre-wrap text-center text-[0.938rem] font-bold leading-5 text-dark text-unset word-break">
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="relative inline-block size-5 max-w-full select-none fill-current align-text-bottom text-dark"
                            >
                              <g>
                                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                              </g>
                            </svg>
                            <span className="min-w-0 max-w-full overflow-hidden whitespace-nowrap text-[0.938rem] leading-5 text-inherit text-unset word-break"></span>
                          </div>
                        </button>
                      </div>
                      <div className="flex h-full shrink grow basis-auto flex-col items-center justify-center">
                        <div className="flex shrink-0 basis-auto flex-col items-start"></div>
                        <div className="flex min-w-8 shrink-0 grow basis-auto flex-col items-center justify-center self-stretch">
                          <div className="h--[50px] w-[50px] pt-4">
                            <Image
                              src="/images/logo.png"
                              alt=""
                              className="relative inline-block h-full w-full max-w-full grow select-none align-text-bottom"
                              width={50}
                              height={32}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex min-h-8 min-w-[3.5rem] shrink grow basis-1/2 flex-col items-end justify-center self-stretch"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto flex w-full max-w-[37.5rem] shrink grow basis-auto flex-col items-stretch">
              <div className="flex shrink grow basis-auto flex-col items-stretch overflow-auto">
                <div className="flex shrink-0 basis-auto flex-col items-stretch">
                  <div className="m-auto flex min-w-[22.75rem] max-w-[22.75rem] shrink-0 basis-auto flex-col items-stretch px-8 pb-12">
                    <div className="flex shrink-0 basis-auto flex-col items-stretch">
                      <div className="my-5 flex shrink-0 basis-auto flex-col items-stretch">
                        <h1 className="min-w-0 whitespace-pre-wrap text-[1.938rem] font-bold leading-9 text-dark text-unset word-break">
                          <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                            <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                              Sign in to Radiance
                            </span>
                          </span>
                        </h1>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="m-auto my-3 flex h-10 min-h-9 w-[18.75rem] min-w-9 shrink-0 basis-auto select-none flex-col items-stretch rounded-full border border-lightblue bg-white px-4 transition-all duration-200 hover:bg-button-hover"
                    >
                      <div className="flex min-w-0 grow flex-row items-center justify-center whitespace-pre-wrap text-center text-[0.938rem] font-bold leading-5 text-dark text-unset word-break">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          className="mr-2 block size-[1.125rem]"
                        >
                          <g>
                            <path
                              fill="#EA4335"
                              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            ></path>
                            <path
                              fill="#4285F4"
                              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            ></path>
                            <path
                              fill="#FBBC05"
                              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            ></path>
                            <path
                              fill="#34A853"
                              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            ></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                          </g>
                        </svg>
                        <span className="min-w-0 max-w-full overflow-hidden whitespace-nowrap text-[0.938rem] leading-5 text-inherit text-unset word-break">
                          <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                            Sign in with Google
                          </span>
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      className="m-auto my-3 flex h-10 min-h-9 w-[18.75rem] min-w-9 shrink-0 basis-auto select-none flex-col items-stretch rounded-full border border-lightblue bg-white px-4 transition-all duration-200 hover:bg-button-hover"
                    >
                      <div className="flex min-w-0 grow flex-row items-center justify-center whitespace-pre-wrap text-center text-[0.938rem] font-bold leading-5 text-dark text-unset word-break">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="relative mr-1 inline-block size-5 max-w-full select-none fill-current align-text-bottom text-dark"
                        >
                          <g>
                            <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                          </g>
                        </svg>
                        <span className="min-w-0 max-w-full overflow-hidden whitespace-nowrap text-[0.938rem] leading-5 text-inherit text-unset word-break">
                          <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                            Sign in with Apple
                          </span>
                        </span>
                      </div>
                    </button>
                    <div className="-mx-1 flex w-full shrink-0 basis-auto flex-row items-stretch">
                      <div className="mx-1 flex min-w-0 flex-1 basis-0 flex-col items-stretch justify-center">
                        <div className="my-2 flex h-px w-full shrink-0 basis-auto flex-col items-stretch bg-lightblue"></div>
                      </div>
                      <div className="mx-1 min-w-0 basis-auto whitespace-pre-wrap text-[1.063rem] font-normal leading-5 text-dark text-unset word-break">
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                            or
                          </span>
                        </span>
                      </div>
                      <div className="mx-1 flex min-w-0 flex-1 basis-0 flex-col items-stretch justify-center">
                        <div className="my-2 flex h-px w-full shrink-0 basis-auto flex-col items-stretch bg-lightblue"></div>
                      </div>
                    </div>
                    <div className="flex w-full shrink-0 basis-auto flex-col items-stretch px-0 py-3">
                      <label
                        htmlFor=""
                        onClick={handleClick}
                        className={cn(
                          "flex shrink-0 basis-auto flex-row items-stretch rounded border border-lightblue",
                          isFocus && "shadow-label border-primary"
                        )}
                      >
                        <div className="flex shrink grow basis-auto flex-col items-stretch">
                          <div className="absolute flex size-full shrink-0 basis-auto flex-row items-stretch justify-between">
                            <div
                              className={cn(
                                "min-w-0 max-w-full overflow-hidden whitespace-nowrap px-2 pt-4 text-[1.063rem] font-normal leading-6 text-gray transition-all text-unset word-break ",
                                isFocus &&
                                  "select-text pt-2 text-sm leading-4 text-primary"
                              )}
                            >
                              <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                                Phone, email, or username
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 flex shrink-0 grow basis-auto flex-row items-stretch overflow-hidden px-2 pb-2 pt-3">
                            <div className="flex w-full min-w-0 items-center whitespace-pre-wrap text-[1.063rem] font-normal leading-6 text-dark text-unset word-break">
                              <input
                                type="text"
                                className="font-inherit w-full cursor-text resize-none rounded-none border-0 bg-slate-300 p-4 text-left"
                              />
                            </div>
                          </div>
                        </div>
                      </label>
                      <div className=""></div>
                    </div>
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            tabIndex={0}
            className="flex shrink-0 basis-auto flex-col items-stretch"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
