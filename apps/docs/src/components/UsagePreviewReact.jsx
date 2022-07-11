export function UsagePreviewReact({ ...props }) {
  return (
    <div className="my-8 rounded-lg border bg-white dark:bg-gray-900">
      <div className="bg-gray-100 p-4 font-semibold text-gray-800">
        {props.title}
      </div>

      <pre className="bg-gray-800 text-gray-100">
        <code className="language-js">{props.codePreview}</code>
      </pre>

      <div className="p-4">
        <h6 className="mb-4 text-xs uppercase text-gray-600 dark:text-gray-200">
          Demo
        </h6>
        {props.children}
      </div>
    </div>
  )
}
