type Props = {
    value: string;
    isPressed: boolean;
};

export default function Key({value, isPressed} : Props) {
    let width = "12";
    return (
        <div className={
            `${isPressed ? "bg-black text-white"  : "bg-white text-black" }
            ${value == "Space" ? "w-[16rem]" : "w-12"}
            h-12 border-black border-2 grid place-content-center select-none`
            }>
            {value}
        </div>
    );
}
