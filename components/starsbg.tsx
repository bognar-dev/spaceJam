
export function StarsBackground({ children }: { children: React.ReactNode }) {

    const stars = Array.from({ length: 10 }, (_, index) => (
        <div key={index} className="w-[30px] h-[30px] -z-40 absolute bg-amber-200 rounded-full transition-all hover:w-[40px] hover:h-[30px]"></div>
    ));

    return (
        <>
            <div className="grid grid-cols-[repeat(10,30)] gap-3">

                {stars}
            </div>
            {children}
        </>
    );


}
