import { cn } from "@/lib/utils"

interface SpeedometerProps {
  value: number
  max: number
  label: string
  className?: string
}

export function Speedometer({ value, max, label, className }: SpeedometerProps) {
  const percentage = (value / max) * 100
  const rotation = (percentage / 100) * 180 - 90

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-32 h-16 overflow-hidden">
        <div className="absolute w-32 h-32 border-16 border-gray-200 rounded-full" />
        <div
          className="absolute w-32 h-32 border-16 border-vibrant-red rounded-full"
          style={{
            clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.sin((rotation * Math.PI) / 180) * 50}% ${50 - Math.cos((rotation * Math.PI) / 180) * 50}%)`,
          }}
        />
        <div
          className="absolute top-16 left-16 w-1 h-16 bg-deep-blue origin-bottom"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
      </div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}

