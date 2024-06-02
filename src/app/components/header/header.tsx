import React from 'react'
import Link from 'next/link'

type HeaderProps = {
    isFixtures: boolean
};

const Header: React.FunctionComponent<HeaderProps> = ({
    isFixtures,
}): JSX.Element => {
    return (
        <div>
            <div className="flex flex-row bg-blue-700 h-12 fixed w-full">
                <p className="text-center my-auto mx-auto">Live cricket world cup-2024 Free Broadcast over the world.</p>
                {isFixtures ? <>
                    <button className="bg-red-500 rounded-md mr-10 m-2 px-2"> <Link href="/fixtures">Fixtures</Link></button></> : ''}
            </div>
        </div>
    )
}





export default Header
