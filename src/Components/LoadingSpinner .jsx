function LoadingSpinner() {
  return (
    <div className="skeleton-container">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="skeleton-item">
          <div className="skeleton-avatar"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-action"></div>
        </div>
      ))}
    </div>
  );
}

export { LoadingSpinner };
