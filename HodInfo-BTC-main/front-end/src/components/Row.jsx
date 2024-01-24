const Row = ({ value }) => {
  return (
    <tbody>
      <tr>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {value}
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            xyz
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            abc
          </p>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <a
            href="#"
            class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
          >
            abc
          </a>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <a
            href="#"
            class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
          >
            abc
          </a>
        </td>
        <td class="p-4 border-b border-blue-gray-50">
          <a
            href="#"
            class="block font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
          >
            abc
          </a>
        </td>
      </tr>
    </tbody>
  );
};
export default Row;
