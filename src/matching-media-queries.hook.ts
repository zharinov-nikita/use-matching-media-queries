import { useEffect, useMemo, useState } from 'react'

export function useMatchingMediaQueries(mediaQueryString: string): boolean {
  const [{ height, width }, setResize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  const [isMatches, setIsMatches] = useState<boolean>(false)

  function resizeHandler() {
    setResize({ width: window.innerWidth, height: window.innerHeight })
  }

  function matchMedia(): boolean {
    return window.matchMedia(mediaQueryString).matches
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  useMemo(() => {
    setIsMatches(matchMedia())
  }, [height, width])

  return isMatches
}
