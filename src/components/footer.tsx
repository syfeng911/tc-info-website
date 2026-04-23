export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="天承資訊 Logo" 
              className="h-6 w-auto opacity-80"
            />
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-foreground">天承資訊</span>
              <span className="text-xs font-light tracking-widest text-muted-foreground">TC-INFO</span>
            </div>
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
