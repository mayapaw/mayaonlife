import React from 'react';

type ChildrenElementT = {
  props: {
    date: string;
  };
};

export const SortWrapper = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <div className="mt-4 space-y-6 mb-28">
      {[...children]
        .sort((a, b) => {
          const dateA = new Date((a as ChildrenElementT).props?.date);
          const dateB = new Date((b as ChildrenElementT).props?.date);

          console.log(
            dateA,
            (a as ChildrenElementT).props,
            (b as ChildrenElementT).props,
            dateB,
          );

          return dateB.getTime() - dateA.getTime();
        })
        .map((child) => (
          <>{child}</>
        ))}
    </div>
  );
};
