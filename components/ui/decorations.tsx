export function BubbleDecoration({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute -z-10 opacity-70 ${className}`}>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-40 left-40 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-20 left-60 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
    </div>
  )
}

export function CardDecoration() {
  return (
    <>
      <div className="card-decoration card-decoration-1" />
      <div className="card-decoration card-decoration-2" />
    </>
  )
}

export function WavyDivider() {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 text-background"
        fill="currentColor"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      </svg>
    </div>
  )
}
