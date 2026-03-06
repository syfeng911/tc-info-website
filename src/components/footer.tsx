import { Monitor } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Monitor className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-base font-bold text-foreground">天承資訊</span>
            <span className="text-xs text-muted-foreground">TC-INFO</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 天承資訊 TC-Info. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/tcinfo911"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Facebook
            </a>
            <a
              href="mailto:service@tc-info.com.tw"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Email
            </a>
            <a
              href="tel:0955685641"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              電話
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
