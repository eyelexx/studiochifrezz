import { useCallback, useEffect, useState } from 'react'
import LogoAndName from '../LogoAndName'
import { HeaderBarContainer, ItemLink, Menu, MenuItem } from './styles'

const HOME_URL = '/'
const PROJECTS_URL = '/projects'
const ABOUT_URL = '/about'
const CONTACT_URL = '/contact'

const HeaderBar = () => {
  const [hovered, setHovered] = useState<number | null>(null)
  const [opacity, setOpacity] = useState<number>(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = 200 // Ajuste conforme necessário
      const newOpacity = Math.max(0, 1 - scrollTop / maxScroll)
      setOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMouseEnter = useCallback((index: number) => {
    setHovered(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovered(null)
  }, [])

  return (
    <HeaderBarContainer
      style={{ opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}
    >
      <LogoAndName />
      <Menu>
        <MenuItem
          isHovered={hovered !== null && hovered !== 0}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
          aria-expanded={hovered === 0}
        >
          <ItemLink href={HOME_URL}>INÍCIO</ItemLink>
        </MenuItem>
        <MenuItem
          isHovered={hovered !== null && hovered !== 1}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
          aria-expanded={hovered === 1}
        >
          <ItemLink href={PROJECTS_URL}>PROJETOS</ItemLink>
        </MenuItem>
        <MenuItem
          isHovered={hovered !== null && hovered !== 2}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
          aria-expanded={hovered === 2}
        >
          <ItemLink href={ABOUT_URL}>SOBRE</ItemLink>
        </MenuItem>
        <MenuItem
          isHovered={hovered !== null && hovered !== 3}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
          aria-expanded={hovered === 3}
        >
          <ItemLink href={CONTACT_URL}>CONTATO</ItemLink>
        </MenuItem>
      </Menu>
    </HeaderBarContainer>
  )
}

export default HeaderBar
