export default function TableList({ handleOpen }) {
  const clients = [
    {
      id: 1,
      name: "Adam",
      email: "Adam@Gmail.com",
      job: "Student",
      rate: "100",
      isactive: true,
    },
    {
      id: 2,
      name: "Adam1",
      email: "Adam1@Gmail.com",
      job: "Student1",
      rate: "101",
      isactive: true,
    },
    {
      id: 3,
      name: "Adam2",
      email: "Adam2@Gmail.com",
      job: "Student2",
      rate: "102",
      isactive: false,
    },
  ];

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>email</th>
              <th>job</th>
              <th>rate</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {/* row 1 */}

            {clients.map((client) => (
              <tr>
                <th>{client.id}</th>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.job}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${client.isactive ? `btn-primary` : `btn-outline : btn-primary`}`}
                  >
                    {client.isactive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleOpen("edit")}
                    className="btn btn-secondary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
