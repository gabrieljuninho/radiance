import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { currentYear } from "@/common/libs/utils";

const AuthPage: FC = () => {
  return (
    <div className="flex h-full">
      <div className="!pointer-events-none flex flex-1 flex-col items-stretch">
        <div className="!pointer-events-none relative flex flex-1 flex-col">
          <div className="pointer-events-auto absolute left-0 right-0 top-0 z-1">
            <div className="!pointer-events-none fixed bottom-0 left-0 right-0 flex flex-col items-stretch backface-hidden">
              <div className="!pointer-events-none absolute bottom-0 flex w-full shrink-0 basis-auto translate-y-0 flex-col items-stretch transition-transform duration-300">
                <div className="!pointer-events-none flex shrink-0 basis-auto flex-col items-stretch">
                  <div className="pointer-events-auto flex shrink-0 basis-auto flex-col items-stretch"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-auto z-0 flex min-h-dvh w-full shrink-0 basis-auto flex-col items-stretch">
            <main className="flex shrink grow basis-auto flex-col items-stretch">
              <div className="flex shrink grow basis-auto flex-col items-stretch">
                <div className="flex flex-1 flex-col items-stretch">
                  <div className="flex min-h-auto flex-auto flex-row-reverse items-stretch">
                    <div className="flex min-w-45vw shrink-0 basis-auto flex-col items-stretch justify-center p-4">
                      <div className="flex w-full min-w-[27.313rem] max-w-[47.5rem] shrink-0 basis-auto flex-col items-stretch p-5">
                        <div className="my-12 min-w-0 whitespace-pre-wrap text-[4rem] font-bold leading-[5.25rem] -tracking-[0.075rem] text-dark text-unset word-break">
                          <span className="text-inherit text-unset whitespace-inherit word-break">
                            Happening now
                          </span>
                        </div>
                        <div className="mb-8 min-w-0 whitespace-pre-wrap text-[1.938rem] font-bold leading-9 text-dark text-unset word-break">
                          <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                            Join today.
                          </span>
                        </div>
                        <div className="flex shrink-0 basis-auto flex-col items-stretch">
                          <button
                            type="button"
                            className="mb-2 flex h-10 min-h-9 w-[18.75rem] min-w-9 max-w-[23.75rem] select-none flex-col items-stretch rounded-full border border-lightblue bg-white px-4 transition-all duration-200 flex-0 hover:bg-button-hover"
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
                                  Sign up with Google
                                </span>
                              </span>
                            </div>
                          </button>
                          <button
                            type="button"
                            className="mb-0 flex h-10 min-h-9 w-[18.75rem] min-w-9 max-w-[23.75rem] select-none flex-col items-stretch rounded-full border border-lightblue bg-white px-4 transition-all duration-200 flex-0 hover:bg-button-hover"
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
                                  Sign up with Apple
                                </span>
                              </span>
                            </div>
                          </button>
                          <div className="my-1 flex w-[18.75rem] max-w-[23.75rem] shrink-0 basis-auto flex-col items-stretch">
                            <div className="-mx-1 my-1 flex shrink-0 basis-auto flex-row items-stretch">
                              <div className="mx-1 flex min-w-0 flex-1 basis-0 flex-col items-stretch justify-center">
                                <div className="flex h-px shrink-0 basis-auto flex-col items-stretch bg-divider"></div>
                              </div>
                              <div className="mx-1 flex min-w-0 shrink-0 basis-auto flex-col items-stretch">
                                <div className="min-w-0 whitespace-pre-wrap text-[0.938rem] font-normal leading-5 text-dark text-unset word-break">
                                  <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                                    or
                                  </span>
                                </div>
                              </div>
                              <div className="mx-1 flex min-w-0 flex-1 basis-0 flex-col items-stretch justify-center">
                                <div className="flex h-px shrink-0 basis-auto flex-col items-stretch bg-divider"></div>
                              </div>
                            </div>
                          </div>
                          <Link
                            href="/i/flow/signup"
                            className="mb-2 flex h-10 min-h-9 w-[18.75rem] min-w-9 max-w-[23.75rem] select-none flex-col items-stretch rounded-full border border-transparent bg-primary px-4 transition-all duration-200 flex-0 hover:bg-primary-hover"
                          >
                            <div className="flex min-w-0 grow flex-row items-center justify-center whitespace-pre-wrap text-center text-[0.938rem] font-bold leading-5 text-white text-unset word-break">
                              <span className="min-w-0 max-w-full overflow-hidden whitespace-nowrap text-[0.938rem] leading-5 text-inherit text-unset word-break">
                                <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                                  Create account
                                </span>
                              </span>
                            </div>
                          </Link>
                          <div className="mb-5 w-[18.75rem] min-w-0 max-w-[23.75rem] flex-1 whitespace-pre-wrap text-[0.688rem] font-normal leading-3 text-gray text-unset word-break">
                            By signing up, you agree to the{" "}
                            <Link
                              href="/tos"
                              rel="noopener noreferrer nofollow"
                              target="_blank"
                              className="min-w-0 text-primary text-unset whitespace-inherit word-break hover:underline"
                            >
                              <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                                Terms of Service
                              </span>
                            </Link>{" "}
                            and{" "}
                            <Link
                              href="/privacy"
                              rel="noopener noreferrer nofollow"
                              target="_blank"
                              className="min-w-0 text-primary text-unset whitespace-inherit word-break hover:underline"
                            >
                              <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                                Privacy Policy
                              </span>
                            </Link>{" "}
                            , including{" "}
                            <Link
                              href="/rules-and-policies/radiance-cookies"
                              rel="noopener noreferrer nofollow"
                              target="_blank"
                              className="min-w-0 text-primary text-unset whitespace-inherit word-break hover:underline"
                            >
                              <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                                Cookie Use.
                              </span>
                            </Link>
                          </div>
                          <div className="mt-10 flex shrink-0 basis-auto flex-col items-stretch">
                            <div className="mb-5 min-w-0 max-w-[23.75rem] flex-1 whitespace-pre-wrap text-[1.063rem] font-bold leading-5 text-dark text-unset word-break">
                              <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                                Already have an account?
                              </span>
                            </div>
                            <Link
                              href="/login"
                              className="hover:bg-lightblue-hover mb-2 flex h-10 min-h-9 w-[18.75rem] min-w-9 max-w-[23.75rem] select-none flex-col items-stretch rounded-full border border-lightblue px-4 transition-all duration-200 flex-0"
                            >
                              <div className="flex min-w-0 grow flex-row items-center justify-center whitespace-pre-wrap text-center text-[0.938rem] font-bold leading-5 text-primary text-unset word-break">
                                <span className="min-w-0 max-w-full overflow-hidden whitespace-nowrap text-[0.938rem] leading-5 text-inherit text-unset word-break">
                                  <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                                    Sign in
                                  </span>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative flex min-h-45vw flex-1 flex-col items-stretch justify-center overflow-hidden p-0">
                      <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-1 flex-col items-stretch justify-center">
                        <div className="relative flex max-w-full select-none items-center justify-center align-text-bottom">
                          <Image
                            src="/images/logo.png"
                            alt=""
                            width={400}
                            height={400}
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="transition-margin-bottom mb-0 flex shrink-0 basis-auto flex-col items-stretch duration-100">
                    <nav className="flex shrink-0 basis-auto flex-row flex-wrap items-stretch justify-center px-4 py-3">
                      <Link
                        href="/about"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          About
                        </span>
                      </Link>
                      <Link
                        href="/using-radiance/download-the-radiance-app"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Download the Radiance app
                        </span>
                      </Link>
                      <Link
                        href="/help-center"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Help Center
                        </span>
                      </Link>
                      <Link
                        href="/tos"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Terms of Service
                        </span>
                      </Link>
                      <Link
                        href="/privacy"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Privacy Policy
                        </span>
                      </Link>
                      <Link
                        href="/articles/1"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Cookie Policy
                        </span>
                      </Link>
                      <Link
                        href="/resources/accessibility"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Accessibility
                        </span>
                      </Link>
                      <Link
                        href="/ads-info"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Ads info
                        </span>
                      </Link>
                      <Link
                        href="/blog"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Blog
                        </span>
                      </Link>
                      <Link
                        href="/careers"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Careers
                        </span>
                      </Link>
                      <Link
                        href="/press/brand-assets"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Brand Resources
                        </span>
                      </Link>
                      <Link
                        href="/advertise"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Advertising
                        </span>
                      </Link>
                      <Link
                        href="/marketing"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Marketing
                        </span>
                      </Link>
                      <Link
                        href="/business"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Radiance for Business
                        </span>
                      </Link>
                      <Link
                        href="/developers"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Developers
                        </span>
                      </Link>
                      <Link
                        href="/directory/profiles"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Directory
                        </span>
                      </Link>
                      <Link
                        href="/settings"
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline"
                      >
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          Settings
                        </span>
                      </Link>
                      <div className="my-1 min-w-0 whitespace-pre-wrap pr-4 text-[0.813rem] font-normal leading-4 text-gray text-unset word-break hover:underline">
                        <span className="min-w-0 text-inherit text-unset whitespace-inherit word-break">
                          © {currentYear} Radiance Corp.
                        </span>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </main>
            <div className="flex shrink-0 basis-auto flex-col items-stretch"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
