export default function TextArea({ className = '', ...props }) {
  return <textarea className={`ds-textarea ${className}`.trim()} {...props} />;
}
