const Social = ({ socials, updatedOn }) => {
  if (!socials || socials.length === 0) return null;
  return (
    <div className="social">
      <p className="section-emoji">🪴🌻🏕</p>
      <ul className="social-list">
        {socials.map((contactItem, index) => {
          return (
            <li key={'social'+index}>
              <a href={contactItem.url} target="_blank" rel="noreferrer"><span style={{ borderBottomColor: contactItem.color }}>{contactItem.platform}</span></a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Social;
