import { PaginatedResponse } from "@/interface/NewsInterface";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginationContainerProps {
  data?: PaginatedResponse;
  page: number;
  setPage: (page: number) => void;
}

const PaginationContainer = ({
  data,
  page,
  setPage,
}: PaginationContainerProps) => {
  const pages =
    page === 1 ? [page, page + 1, page + 2] : [page - 1, page, page + 1];

  const validPages = pages.filter(
    (n) => n > 0 && (!data?.totalPages || n <= data.totalPages)
  );

  return (
    <Pagination>
      <PaginationContent className="gap-8">
        {page !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => setPage(page - 1)}
            />
          </PaginationItem>
        )}
        {page > 2 && (
          <>
            <PaginationItem>
              <PaginationLink
                className="cursor-pointer"
                onClick={() => setPage(1)}
                isActive={1 === page}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {validPages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              className={`cursor-pointer ${
                pageNumber === page
                  ? "bg-primary hover:bg-primary text-primary-foreground hover:text-primary-foreground hover:scale-105"
                  : ""
              }`}
              onClick={() => setPage(pageNumber)}
              isActive={pageNumber === page}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {data && data.totalPages > pages[pages.length - 1] && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {page !== data?.totalPages && (
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => setPage(data?.totalPages || 1)}
            >
              {data?.totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        {data && page < data.totalPages && (
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() => setPage(page + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
export default PaginationContainer;
