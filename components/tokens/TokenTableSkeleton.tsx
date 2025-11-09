import React from 'react';

const TokenTableSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div 
          key={index}
          className="grid grid-cols-12 gap-4 px-6 py-4 items-center animate-pulse"
        >
          <div className="col-span-3 flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-muted"></div>
            <div className="space-y-2">
              <div className="h-4 w-20 bg-muted rounded"></div>
              <div className="h-3 w-12 bg-muted rounded"></div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="h-4 w-16 bg-muted rounded"></div>
          </div>

          <div className="col-span-1">
            <div className="h-4 w-12 bg-muted rounded"></div>
          </div>

          <div className="col-span-2">
            <div className="h-4 w-14 bg-muted rounded"></div>
          </div>

          <div className="col-span-2">
            <div className="h-4 w-14 bg-muted rounded"></div>
          </div>

          <div className="col-span-1">
            <div className="h-4 w-8 bg-muted rounded"></div>
          </div>

          <div className="col-span-1 flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="h-5 w-12 bg-muted rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TokenTableSkeleton;
