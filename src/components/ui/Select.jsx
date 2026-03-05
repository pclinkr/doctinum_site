export default function Select({
  options = [],
  placeholder,
  className = '',
  ...props
}) {
  return (
    <select className={`ds-input ${className}`.trim()} {...props}>
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
