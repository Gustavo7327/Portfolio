export default function TechTag({ name, url }) {
  return (
    <div className="relative mr-2 mb-2">
      <img
        src={url}
        alt={`${name} badge`}
        className="h-8 object-contain block"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.nextElementSibling;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <span className="hidden items-center justify-center px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 text-sm font-medium border border-blue-200 dark:border-blue-700">
        {name}
      </span>
    </div>
  );
}