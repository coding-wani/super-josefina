export default function Sidebar() {
  return (
    <aside
      className="
          h-full 
          w-fit 
          py-4
        "
      aria-label="Sidebar"
    >
      <header
        className="
            whitespace-nowrap
          "
        aria-label="Sidebar header"
      >
        <span
          className="
              text-sm 
              font-medium 
              text-gray-700
            "
          aria-label="Company or team name"
        >
          Acme Inc.
        </span>
      </header>
    </aside>
  );
}
