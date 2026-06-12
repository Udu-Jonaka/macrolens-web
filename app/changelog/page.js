import versions from "@/data/versions";

export const metadata = {
  title: "Changelog – MacroLens",
  description:
    "See what's new in MacroLens. Browse the full version history, new features, improvements, and bug fixes.",
};

function getTypeLabel(type) {
  switch (type) {
    case "feature":
      return "New";
    case "improvement":
      return "Improved";
    case "fix":
      return "Fix";
    default:
      return type;
  }
}

export default function ChangelogPage() {
  return (
    <section className="changelog">
      <div className="changelog-inner">
        {/* Header */}
        <div className="changelog-header">
          <h1>Changelog</h1>
          <p>
            All the latest updates, features, and fixes for MacroLens.
          </p>
        </div>

        {/* Timeline */}
        <div className="changelog-timeline">
          {versions.map((release, index) => (
            <div key={release.version} className="changelog-entry">
              {/* Version pill */}
              <div className="changelog-version-row">
                <span className="changelog-version-pill">
                  v{release.version}
                </span>
                {release.tag && (
                  <span className="changelog-tag">{release.tag}</span>
                )}
                <span className="changelog-date">
                  {new Date(release.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              {/* Summary */}
              <p className="changelog-summary">{release.summary}</p>

              {/* Changes list */}
              <ul className="changelog-changes">
                {release.changes.map((change, i) => (
                  <li key={i} className="changelog-change-item">
                    <span
                      className={`changelog-type changelog-type--${change.type}`}
                    >
                      {getTypeLabel(change.type)}
                    </span>
                    <span className="changelog-change-text">{change.text}</span>
                  </li>
                ))}
              </ul>

              {/* Divider (except last) */}
              {index < versions.length - 1 && (
                <div className="changelog-divider"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
