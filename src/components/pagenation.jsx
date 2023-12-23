import { useMemo } from "react";
import generatePagesToDisplay from "@/utils/formater/formatterPagenation";

const Pagenation = (props) => {
  const { meta, onClickPrevious, onClickNext, onClickPage } = props;

  const pagesToDisplay = useMemo(
    () => generatePagesToDisplay(meta?.current_page, meta?.last_page),
    [meta]
  );

  return (
    <div className="flex mx-[38rem] items-center gap-3 mt-4 mb-4">
      <button
        className="hover:bg-orange-400 rounded-md p-1"
        size="icon"
        disabled={meta?.current_page === 1}
        onClick={onClickPrevious}
      >
        &lt; &lt;
      </button>
      {meta &&
        pagesToDisplay.map((page, index) => {
          return (
            <button
              className="hover:bg-orange-400 rounded-md p-1"
              size="icon"
              key={`${page}-${index}`}
              disabled={meta?.current_page === page}
              onClick={() => onClickPage(page)}
            >
              {page}
            </button>
          );
        })}
      <button
        className="hover:bg-orange-400 rounded-md p-1"
        size="icon"
        disabled={meta?.current_page === meta?.last_page}
        onClick={onClickNext}
      >
        &gt; &gt;
      </button>
    </div>
  );
};

export default Pagenation;
