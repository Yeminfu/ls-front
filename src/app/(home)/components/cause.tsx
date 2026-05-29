import type { ts_cause } from "../types/cause.interface";

interface Props {
  cause: ts_cause
}

export function Cause({cause}: Props) {
    return <div>
        <p>{cause.title}</p>
        <p>{cause.description}</p>
    </div>
}
