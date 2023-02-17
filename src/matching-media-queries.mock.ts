interface MediaQueryList {
  readonly matches: boolean
  readonly media: string
}

export class MatchMedia {
  private mediaQueryList!: MediaQueryList
  private currentMediaQuery: string

  constructor(currentMediaQuery: string) {
    this.currentMediaQuery = currentMediaQuery

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: (query: string): MediaQueryList => {
        this.mediaQueryList = {
          matches: query === this.currentMediaQuery,
          media: query,
        }

        return this.mediaQueryList
      },
    })
  }
}
