import React from 'react';


const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404 - Not Found</h1>
                <p className="text-xl text-gray-700 mb-8">The page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default NotFoundPage;
