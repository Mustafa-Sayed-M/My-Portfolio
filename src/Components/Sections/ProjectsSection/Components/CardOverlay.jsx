import React from 'react';

function CardOverlay() {

    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        setMousePos({ x, y });
    };

    return (
        <div
            style={{
                boxShadow: '0 0 20px 1px #8750F7 inset'
            }}
            onMouseMove={handleMouseMove}
            className='overlay absolute w-full h-full bg-purple-color/20 backdrop-blur-sm left-0 top-0 opacity-0 duration-300 ease-out sm:hover:opacity-100 transition group flex items-center justify-center'
        >
            <p
                className="p-1 rounded-md bg-purple-color absolute"
                style={{
                    transform: `translate(${mousePos.x + 90}px, ${mousePos.y + 30}px)`,
                    pointerEvents: "none"
                }}
            >
                Click To Live Preview
            </p>
            <div className='text-3xl translate-y-5 group-hover:translate-y-0 delay-100 ease-in-out duration-300 transition'>
                <picture>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/eye-animate.gif`}
                        alt='Eye Animate'
                        width={50}
                        height={50}
                        className='rounded-md'
                    />
                </picture>
            </div>
        </div>
    )
}

export default CardOverlay;