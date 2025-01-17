export const dateFormat = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
    return formattedDate;
};
