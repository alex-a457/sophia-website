import React from "react";

interface CustomPaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 1;
    const range = [];
    const rangeWithDots = [];

    // Add pages around current page
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    // Add first page and dots if needed
    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    // Add middle range
    rangeWithDots.push(...range);

    // Add last page and dots if needed
    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2 min-w-[280px] justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="w-10 h-10 bg-black text-white rounded-[2px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all duration-200 ease-out transform hover:scale-105 active:scale-95"
          aria-label="Previous page"
        >
          <span className="text-lg font-medium">‹</span>
        </button>

        {/* Page Numbers Container - Fixed width to prevent shaking */}
        <div className="flex items-center gap-2 min-w-[120px] justify-center">
          {getVisiblePages().map((page, index) => (
            <button
              key={`${page}-${index}`}
              onClick={() => typeof page === "number" && onPageChange(page)}
              className={`w-10 h-10 rounded-[2px] flex items-center justify-center text-sm font-medium transition-all duration-200 ease-out transform hover:scale-105 active:scale-95 ${
                page === currentPage
                  ? "bg-black text-white shadow-lg"
                  : typeof page === "number"
                    ? "bg-white text-[#374151] border border-[#E5E7EB] hover:bg-gray-50 hover:border-gray-300 cursor-pointer"
                    : "text-[#374151] cursor-default w-10"
              }`}
              disabled={typeof page !== "number"}
              aria-label={
                typeof page === "number" ? `Go to page ${page}` : undefined
              }
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="w-10 h-10 bg-black text-white rounded-[2px] flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all duration-200 ease-out transform hover:scale-105 active:scale-95"
          aria-label="Next page"
        >
          <span className="text-lg font-medium">›</span>
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
