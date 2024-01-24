import Row from "./Row";

const Banner = () => {
  const values = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
  ];
  return (
    <div class=" bg-gray-900 relative flex flex-col w-full h-full overflow-scroll text-black bg-black text-white shadow-md bg-clip-border scrollbar-hide pt-20">
      <table class="w-full text-left table-auto min-w-max">
        <thead>
          <tr>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70 ">
                #
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Platform
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Last Traded Price
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Buy / Sell Price
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Difference
              </p>
            </th>
            <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
              <p class="block font-sans text-2xl font-bold antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Savings
              </p>
            </th>
          </tr>
        </thead>
        {values.map((value, index) => {
          return <Row key={index} {...value} />;
        })}
      </table>
    </div>
  );
};
export default Banner;
