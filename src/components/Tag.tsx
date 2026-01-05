type title = {
  title: string
}

export default function Tag({ title }: title) {
  return (
    <div className="w-fit rounded-sm bg-primary border-foreground border-2 text-foreground p-1 text-sm font-semibold">
      {title}
    </div>
  )
}
