type TableProps = {
  content: { [key: string]: string };
  tableKey: string;
};

export default function Table({ content, tableKey }: TableProps) {
  return (
    <table className="my-4">
      <tbody>
        {Object.entries(content).map(([key, value]) => {
          return (
            <tr key={`${tableKey}-${key}`}>
              <td className="text-left">{key}</td>
              <td className="text-left">{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
