import react from "react";

type PaginationButtonsPropsType = {
  changeCurrentPage: (n: number) => void;

  currentPage: number;
  totalCount: number;
  pageSize: number;
};
export const PaginationButtons = (
  props: PaginationButtonsPropsType
): JSX.Element => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const mappedPages: any = [];

  const addedItem = (item: number) =>
    mappedPages.push(
      <span
        onClick={() => {
          props.changeCurrentPage(pages[item]);
        }}
        style={
          pages[item] === props.currentPage
            ? { color: "red" }
            : { color: "black" }
        }
      >
        {pages[item]}{" "}
      </span>
    );

  if (props.currentPage < 4) {
    for (let i = 0; i < 5; i++) {
      addedItem(i);
    }
  }

  if (props.currentPage >= 4 && props.currentPage > 1) {
    for (let i = props.currentPage - 3; i < props.currentPage + 2; i++) {
      addedItem(i);
    }
  }
  //   2500-3=2497
  //   2497
  //работа функции под большим вопросом
  if (props.currentPage >= props.totalCount - 4) {
    for (let i = props.currentPage - 5; i < props.totalCount; i++) {
      addedItem(i);
    }
  }

  //     if (props.currentPage < 5 && pages[5]) {
  //       mappedPages.push(addedItem);
  //       if (j === 4) {
  //         break;
  //       }
  //     } else if (props.currentPage >= 5 && pages.length - 4 > props.currentPage) {
  //       mappedPages.push(addedItem);
  //     }
  //   }

  //   pages.forEach((t, i) => {
  //     debugger;

  //   });

  return <div>{mappedPages}</div>;
};
