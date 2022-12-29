import clsx from "clsx";

interface IProps {
  name: string;
  number: number;
  max: number;
  containerClassName?: string;
  highlighted?: boolean;
}

export default function ChartBar({
  name,
  highlighted,
  max,
  number,
  containerClassName,
}: IProps) {
  return (
    <div
      className={clsx("group flex h-full flex-1 flex-col", containerClassName)}
    >
      <div className="flex flex-1 flex-col justify-end px-1.5 lg:px-2.5">
        <div
          style={{ height: (number / max) * 100 + "%" }}
          className={clsx(
            "relative flex w-full cursor-pointer items-center justify-center rounded transition-colors duration-75 hover:opacity-80",
            {
              "bg-cyan": highlighted,
              "bg-soft-red": !highlighted,
            }
          )}
        >
          <div className="absolute bottom-full mb-2 flex items-center justify-center rounded bg-dark-brown py-1.5 px-1 text-sm font-bold text-very-pale-orange opacity-0 group-hover:opacity-100 lg:px-1.5 lg:text-base">
            ${number}
          </div>
        </div>
      </div>
      <div className="mt-3 flex-none text-center text-sm text-medium-brown lg:text-base">
        {name}
      </div>
    </div>
  );
}
