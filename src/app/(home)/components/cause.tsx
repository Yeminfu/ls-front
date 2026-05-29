import type { ts_cause } from "../types/cause.interface";

interface Props {
  cause: ts_cause;
}

export function Cause({ cause }: Props) {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-bold uppercase tracking-wide text-gray-900">
        {cause.title}
      </h3>
      <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
        {cause.description}
      </p>
    </div>
  );
}
