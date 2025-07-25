export const Strikes = ({ count }: { count: number }) => {
    return (
      <div className="flex gap-2 text-red-500 text-4xl">
        {Array.from({ length: count }).map((_, i) => (
          <span key={i}>❌</span>
        ))}
      </div>
    );
  };
  