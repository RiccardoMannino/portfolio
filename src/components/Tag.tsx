type title = {
  title: string
}

export default function Tag({ title }: title) {
  return (
    <div
      style={{
        WebkitTextStrokeColor: 'var(--foreground)',
        WebkitTextStrokeWidth: '0.4px',
      }}
      className="bg-primary border-background w-fit rounded-sm border-2 p-1 text-sm font-semibold"
    >
      {title}
    </div>
  )
}
