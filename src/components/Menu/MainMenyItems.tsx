import { useState } from "react";
import { motion } from "framer-motion";

export type ItemData = {
  id: string;
  name: string;
  price: string;
  image: string;
};

type ItemDataProps = {
  items: ItemData[];
};

export default function MainMenuItemData({ items }: ItemDataProps) {
  //   const [showDetails, setShowDetails] = useState(false);
  const [showDetailsItemId, setShowDetailsItemId] = useState<string | null>(
    null
  );

  function showDetailsHandler(id: string) {
    // Toggle showDetailsItemId only if it's the same item, otherwise, set it to the clicked item ID
    setShowDetailsItemId((prevId) => (prevId === id ? null : id));
    // setShowDetails(!showDetails);
  }

  return (
    <div className="z-20 flex flex-col flex-wrap justify-center items-center md:flex md:flex-row">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative p-4 m-6 flex flex-col justify-center items-center border border-gray-200 gap-y-4 relative"
        >
          <img
            src={item.image}
            alt={item.name}
            className="max-w-[15rem] max-h-[15rem]"
          />
          <h2 className="text-xl font-bold">{item.name}</h2>
          <h2 className="text-[#ffc139] font-bold">{item.price} $</h2>
          <button
            onClick={() => showDetailsHandler(item.id)}
            className="bg-[#ffc139] px-6 py-2 rounded-full hover:bg-[#ffae00] hover:text-white"
          >
            Show Details
          </button>
          {showDetailsItemId === item.id && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: showDetailsItemId === item.id ? 0 : "100%" }}
              transition={{ ease: "easeOut", duration: 10 }}
              className="z-10 absolute bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 flex flex-col justify-center items-center"
              style={{ visibility: showDetailsItemId ? "visible" : "hidden" }}
            >
              <h2 className="text-xl font-bold">{item.name}</h2>
              <h2 className="text-[#ffc139] font-bold">{item.price}$ </h2>
              <p>Details for {item.name}</p>

              <button
                onClick={() => showDetailsHandler(item.id)}
                className="bg-[#ffc139] px-6 py-2 rounded-full hover:bg-[#ffae00] hover:text-white"
              >
                Add To Basket
              </button>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
