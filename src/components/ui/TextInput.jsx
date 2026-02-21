export default function TextInput({ className = '', ...props }) {
  return <input className={`ds-input ${className}`.trim()} {...props} />;
}
