import screens from "@/data/screenshots";

export const metadata = {
  title: "Screenshots – MacroLens",
  description:
    "See MacroLens in action. Browse screenshots of the app's key screens including the dashboard, meal scanner, fasting timer, and more.",
};

export default function ScreenshotsPage() {
  return (
    <section className="screenshots">
      <div className="screenshots-inner">
        {/* Header */}
        <div className="screenshots-header">
          <span className="screenshots-badge">Preview</span>
          <h1>See MacroLens in action</h1>
          <p>
            Take a closer look at the screens that make nutrition tracking
            effortless and enjoyable.
          </p>
        </div>

        {/* Grid */}
        <div className="screenshots-grid">
          {screens.map((screen, index) => (
            <div key={index} className="screenshot-card">
              <div className="screenshot-image-wrapper">
                {/* TODO: Add actual screenshots to /public/screenshots/ */}
                <img
                  src={screen.image}
                  alt={`${screen.label} screenshot`}
                  className="screenshot-image"
                />
              </div>
              <div className="screenshot-info">
                <h3>{screen.label}</h3>
                <p>{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
