function NavBar() {
  const dragons = [
    { name: "Tohu", link: "https://en.wikipedia.org/wiki/Tohu" },
    { name: "Tehom", link: "https://en.wikipedia.org/wiki/Tehom" },
    { name: "Theli", link: "https://en.wikipedia.org/wiki/Theli_(mythology)" },
    { name: "Than", link: "https://en.wikipedia.org/wiki/Dragon" },
    { name: "Leviathan", link: "https://en.wikipedia.org/wiki/Leviathan" },
    { name: "Tanin'iver", link: "https://en.wikipedia.org/wiki/Tanin%27iver" },
    { name: "Taninsam", link: "https://en.wikipedia.org/wiki/Reinkaos" },
  ];

  return (
    <nav>
      <ul>
        {dragons.map((dragon) => (
          <li key={dragon.name}>
            <a href={dragon.link} target="_blank" rel="noopener noreferrer">
              {dragon.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
