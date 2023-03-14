const defaultPaths = [
    { key: "/", value: "INÍCIO" },
    { key: "/index.html", value: "INÍCIO" },
    { key: "/about.html", value: "SOBRE" },
    { key: "/gallery.html", value: "GALERIA" },
    { key: "/contact.html", value: "CONTATO" },
  ]
  const currentPathName = window.location.pathname
  const currentPageData = defaultPaths.find((defaultPathName) => defaultPathName.key === currentPathName)
  const navBar = Array.from(document.getElementById("navBar").querySelectorAll("a"))
  const currentNavItem = navBar.find((link) => link.innerText === currentPageData.value)
  currentNavItem.classList.remove("hover:border-[var(--green-loud)]", "hover:text-[var(--green-loud)]")
  currentNavItem.classList.add("bg-[var(--green-loud)]", "text-[black]", "hover:bg-[transparent]", "hover:border-[var(--green-loud)]", "hover:text-[var(--green-loud)]")