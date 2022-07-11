export function UsagePreviewReact({ ...props }) {
  return (
    <div className="my-8 rounded-lg border">
      <div className="bg-gray-100 p-4 font-bold text-gray-800">
        {props.title}
      </div>

      <pre className="bg-gray-800">
        <code className="language-js">{props.codePreview}</code>
      </pre>

      <div className="p-4">
        <h6 className="mb-4 text-xs uppercase text-gray-600">Demo</h6>
        {props.children}
      </div>
    </div>
  )
}
