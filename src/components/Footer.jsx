import '../styles/footer.css'

export default function Footer () {
  const currentYear = new Date().getFullYear()
  return(
    <footer><strong>&copy;{currentYear} Mary Pat Adams</strong></footer>
  )
}