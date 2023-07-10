'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Navbar = () => {

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdown] = useState(false);

    useEffect(() => {
        const fetchProviders = async () => {
            const providers = await getProviders();
            setProviders(providers);
        }
        fetchProviders();
    }, [])


    const { data: session } = useSession();

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href='/' className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/lightbulb.svg"
                    width={30}
                    height={30}
                    alt="Prompt Logo"
                />
                <p className="logo_text">PromptlyHub</p>
            </Link>

            {/* Deskptop */}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href='/create-prompt' className="black_btn">
                            Create Post
                        </Link>

                        <button className="outline_btn" type="button" onClick={signOut} >
                            Sign Out
                        </button>

                        <Link href='/profile'>
                            <Image
                                src={session?.user.image}
                                width={35}
                                height={35}
                                className="rounded-full"
                                alt="Profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {
                            providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </>
                )}
            </div>

            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.user.image}
                            width={35}
                            height={35}
                            className="rounded-full"
                            alt="Profile"
                            onClick={() => settoggleDropdown((prev) => !prev)}
                        />
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href='/profile'
                                    className="dropdown_link"
                                    onClick={() => settoggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href='/create-prompt'
                                    className="dropdown_link"
                                    onClick={() => settoggleDropdown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type="button"
                                    className="mt-5 w-full black_btn"
                                    onClick={() => {
                                        settoggleDropdown(false);
                                        signOut();
                                    }}
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {
                            providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </>
                )}
            </div>
            {/*  <div className="sn:hidden flex relative">
                {isUserLoggedIn ? (
                    <div className="flex">
                        <Image
                                src='/assets/images/logo.svg'
                                width={35}
                                height={35}
                                className="rounded-full"
                                alt="Profile"
                                onClick={()=> settoggleDropdown((prev)=> !prev)}
                            />
                    </div>
                ) : (
                    <div>
                         {
                            providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign In
                                </button>
                            ))
                        }
                    </div>
                )}
            </div> */}
        </nav>
    )
}

export default Navbar