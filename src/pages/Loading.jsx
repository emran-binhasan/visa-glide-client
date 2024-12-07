import React from 'react';

const Loading = () => {
    return (
        <div className="loading-spinner flex justify-center items-center h-full">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-600 border-t-transparent">
        </div>
      </div>
    );
};

export default Loading;