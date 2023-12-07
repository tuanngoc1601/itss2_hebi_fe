import React from "react";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

const PaginationPage = ({ setCurrentPage, currentPage, totalPages }) => {
    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
            },
        },
    };

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const showNextButton = currentPage !== totalPages - 1;
    const showPrevButton = currentPage !== 0;

    return (
        <motion.div
            variants={paginationVariants}
            initial="hidden"
            animate="visible"
        >
            <ReactPaginate
                breakLabel={<span className="mr-4">...</span>}
                nextLabel={
                    showNextButton ? (
                        <span className="w-10 h-10 flex items-center justify-center border border-solid bg-slate-300 rounded-md">
                            <BsChevronRight />
                        </span>
                    ) : null
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={totalPages}
                previousLabel={
                    showPrevButton ? (
                        <span className="w-10 h-10 flex items-center justify-center border border-solid bg-slate-300 rounded-md mr-4">
                            <BsChevronLeft />
                        </span>
                    ) : null
                }
                containerClassName="flex items-center justify-center mt-8 mb-4"
                pageClassName="block border border-solid hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-3 font-semibold"
                pageLinkClassName="w-full h-full flex justify-center items-center"
                activeClassName="border-navActive text-navActive"
            />
        </motion.div>
    );
};

export default PaginationPage;
