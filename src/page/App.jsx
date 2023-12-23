import { useState, useEffect } from "react";
import Banner from "../components/banner";
import CartIdeas from "../components/cartIdeas";
import Navbar from "../components/navbar";
import { getIdeas } from "../utils/api/ideas";
import { useSearchParams } from "react-router-dom";
import { Select } from "@/components/input";
import Pagenation from "@/components/pagenation";

function App() {
  const bannerContent = {
    imageUrl: "./src/assets/asset1.jpg",
    title: "Ideas",
    description: "Where all our great things begin",
  };
  const [ideas, setIdeas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [meta, setMeta] = useState();
  const [itemsPerPage, setItemsPerPage] = useState([]);

  useEffect(() => {
    fetchIdeas();
  }, [searchParams, itemsPerPage]);

  async function fetchIdeas() {
    let query = {};
    for (const entry of searchParams.entries()) {
      query[entry[0]] = entry[1];
    }
    try {
      const result = await getIdeas({ ...query });
      const { ...rest } = result.meta;
      setIdeas(result.data);
      setMeta(rest);
    } catch (error) {
      console.error(error);
    }
  }

  function handlePrevNextPage(page) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page[number]", String(page));
    setSearchParams(newSearchParams);
  }

  function handleShowPerPage(value) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page[size]", value);
    setSearchParams(newSearchParams);
    setItemsPerPage(value);
  }

  return (
    <div>
      <Navbar />
      <Banner {...bannerContent} />
      <div className="container mx-auto mt-20">
        <div className="flex items-center justify-between">
          <div className="items-center">
            <p>
              Showing {meta?.from}-{meta?.to} of {meta?.total}
            </p>
          </div>
          <div className="flex items-center  space-x-3">
            <p>Show Per Page </p>
            <Select
              options={["10", "20", "30"]}
              onChange={() => handleShowPerPage(e.target.value)}
            />
            <p>Sort by :</p>
            <Select options={["Newest", "Oldest"]} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {ideas.map((data) => {
            return (
              <CartIdeas
                key={data.id}
                created_at={data.created_at}
                title={data.title}
              />
            );
          })}
        </div>
        <div className="mx-auto">
          <Pagenation
            meta={meta}
            onClickPrevious={() => handlePrevNextPage(meta?.current_page - 1)}
            onClickNext={() => handlePrevNextPage(meta?.current_page + 1)}
            onClickPage={(page) => handlePrevNextPage(page)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
