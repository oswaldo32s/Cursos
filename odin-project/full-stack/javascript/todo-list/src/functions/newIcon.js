export function newIcon(iconSrc, iconAlt, iconClass) {
  const icon = document.createElement('img')
  icon.src = iconSrc
  icon.alt = iconAlt
  icon.classList.add(iconClass)

  return icon
}