function Header() {
  return <h1>My Website</h1>;
}
function Content() {
  return <p>This is the main content.</p>;
}
function Footer() {
  return <p>© 2025 My Website</p>;
}
function Layout() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default Layout;
