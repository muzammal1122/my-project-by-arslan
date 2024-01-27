import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <h2 className={`mb-3 text-2xl font-semibold`}>
                Header{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
        </div>
    )
}

export default Header