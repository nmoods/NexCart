import styles from './Pagination.module.css';

export type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    totalItems?: number;
    itemsPerPage?: number;
    itemsPerPageOptions?: number[];
    onItemsPerPageChange?: (value: number) => void;
};

export const Pagination = ({
                               currentPage,
                               totalPages,
                               onPageChange,
                               totalItems,
                               itemsPerPage,
                               itemsPerPageOptions,
                               onItemsPerPageChange,
                           }: PaginationProps) => {

    const showItemsPerPage = itemsPerPage && totalItems && itemsPerPageOptions;

    return (
        <div className={styles['nx-pagination']}>
            {showItemsPerPage && (
                <div className={styles['nx-pagination--controls']}>
                    <label htmlFor="items-per-page">Items per page : </label>
                    <select
                        id="items-per-page"
                        value={itemsPerPage}
                        onChange={(e) => onItemsPerPageChange?.(Number(e.target.value))}
                    >
                        {itemsPerPageOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>
            )}

            {totalPages > 1 && (
                <ul className={styles['nx-pagination--list']}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <li key={page}>
                            <button
                                type="button"
                                className={
                                    page === currentPage
                                        ? `${styles['nx-pagination--dot']} ${styles['nx-pagination--dot--active']}`
                                        : styles['nx-pagination--dot']
                                }
                                onClick={() => onPageChange(page)}
                                aria-label={`Go to page ${page}`}
                                aria-current={page === currentPage ? 'page' : undefined}
                            />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
