const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === "selected") {
      return "rounded-lg bg-[#E6F7F8] text-[#00ADB5]"
    }
    return "text-[#35383E]"
  }
  return (
    <a href="#" className={`${getVariantClasses()} px-6 py-3`}>
      {children}
    </a>
  )
}

export default SidebarButton
