function Footer() {
    return (
        <footer className="page-footer teal lighten-2">          
          <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Nikolay Chernikov
            <a className="grey-text text-lighten-4 right" href="https://github.com/inoris7/Movies-catalog">Repo</a>
            </div>
          </div>
        </footer>
    )
}

export {Footer};