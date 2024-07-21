const Social = ({ socials, updatedOn }) => {
  if (!socials || socials.length === 0) return null;
  return (
    <div className="social">
      <ul>
        {socials.map((contactItem) => {
          return (
            <li>
              <a href={contactItem.url} target="_blank" rel="noreferrer"><span style={{ borderBottomColor: contactItem.color }}>{contactItem.platform}</span></a>
            </li>
          )
        })}
      </ul>
      <span className="updated-on">Updated @ {updatedOn}</span>
    </div>
  );
}

export default Social;
