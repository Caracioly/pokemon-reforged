interface PokeToolTipProps {
  label: string;
  value: number;
}

export function PokeToolTip({ label, value }: PokeToolTipProps) {
  return (
    <div className="absolute z-50 -translate-y-10 translate-x-10 transform bg-white border border-gray-300 px-4 py-2 rounded-md shadow-md">
      <span className="rounded-md">
        {`${label}→ ${value}`}
      </span>
    </div>
  );
}
