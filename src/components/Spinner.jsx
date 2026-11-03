export default function Spinner() {
  return (
    <div className="flex justify-center py-20" role="status" aria-label="Loading">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />//circle
    </div>
  );
}