const Box = ({propery, value}) => {
    return (
        <div className="rounded-2xl w-fit p-3 m-3 text-[var(--main-color)] border-2 border-[var(--main-color)]">
            {propery}: <span className="text-white">{value}</span>
        </div>
    )
}

export default Box