
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

export default {
    title: 'Dispute_Resolution/ui-kit/Pagination',
    component: Pagination,
};

const Template = ({ totalPages: propTotalPages, ...args }) => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);

    useEffect(() => {
        setTotalPages(propTotalPages || 1);
    }, [propTotalPages]);

    const handlePageChange = (value) => {
        if (value === '&lsaquo') {
            if (page === 1) {
                console.log('Это первая страница');
            } else {
                setPage(page - 1);
            }
        } else if (value === '&rsaquo') {
            console.log(totalPages);
            if (page === totalPages) {
                console.log('Это последняя страница');
            } else {
                setPage(page + 1);
            }
        } else if (value === '... ') {
            setPage(1);
        } else if (value === ' ...') {
            setPage(totalPages);
        } else {
            setPage(value);
        }
    };

    return <Pagination {...args} page={page} onPageChange={handlePageChange} totalPages={totalPages} />;
};
Template.propTypes = {
    totalPages: PropTypes.number,
}
Template.defaultProps = {
    totalPages: 1,
};

export const BasicPagination = Template.bind({});
BasicPagination.propTypes = {
    totalPages: PropTypes.number,
    page: PropTypes.number,
    limit: PropTypes.number,
    siblings: PropTypes.number,
    onPageChange: PropTypes.func,
};

BasicPagination.args = {
    page: 1,
    limit: 3,
    siblings: 1,
    onPageChange: () => { },
    totalPages: 10,
};
