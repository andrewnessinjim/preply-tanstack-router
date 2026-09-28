type DescriptionProps = {
  filename: string
  body: string
}

export function Description({ filename, body }: DescriptionProps) {
  return (
    <>
      <p className="text-slate-400">
        File: <code>{filename}</code>
      </p>
      <p className="mt-4 text-slate-400">{body}</p>
    </>
  )
}
