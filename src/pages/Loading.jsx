import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full border-blue-600 border-t-transparent"></div>
        </div>
    );
};

export default Loading;
