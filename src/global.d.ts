declare module '*.css' {}

interface Window {
  plausible?: (event: string, opts?: {
    props?: Record<string, string | number>
    u?: string
    c?: Record<string, string>
  }) => void
}
