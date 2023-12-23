function Select(props) {
  const { label, placeholder, id, error, options, register, name, value } =
    props;

  return (
    <div className="flex flex-col mb-4">
      <label className="text-black tracking-wider mb-3" htmlFor={id}>
        {label}
      </label>
      <select
        className={
          "flex h-10 w-full rounded-full border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
        }
        value={value}
        defaultValue=""
        {...(register ? register(name) : {})}
      >
        <option disabled value="">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export { Select };
