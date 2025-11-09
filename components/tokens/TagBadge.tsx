"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface TagBadgeProps {
  type: 'new' | 'migrated' | 'final-stretch';
}

const TagBadge: React.FC<TagBadgeProps> = ({ type }) => {
  const config = {
    new: {
      label: 'New',
      className: 'bg-green-100 text-green-800 border-green-200',
    },
    migrated: {
      label: 'Migrated',
      className: 'bg-blue-100 text-blue-800 border-blue-200',
    },
    'final-stretch': {
      label: 'Final Stretch',
      className: 'bg-orange-100 text-orange-800 border-orange-200',
    },
  };

  const { label, className } = config[type];

  return (
    <span
      className={cn(
        'px-2 py-1 text-xs font-medium rounded-full border',
        className
      )}
    >
      {label}
    </span>
  );
};

export default React.memo(TagBadge);
