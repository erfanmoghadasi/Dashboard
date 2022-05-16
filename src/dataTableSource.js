import avatar from "./assets/avatar.png";

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div  className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: avatar,
    status: "active",
    email: "snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Lannister",
    img: avatar,
    status: "active",
    email: "Lannister@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Jaime",
    img: avatar,
    status: "passive",
    email: "Jaime@gmail.com",
    age: 25,
  },
  {
    id: 4,
    username: "Stark",
    img: avatar,
    status: "active",
    email: "Stark@gmail.com",
    age: 40,
  },
  {
    id: 5,
    username: "Targaryen",
    img: avatar,
    status: "pending",
    email: "Targaryen@gmail.com",
    age: 70,
  },
  {
    id: 6,
    username: "Melisandre",
    img: avatar,
    status: "passive",
    email: "Melisandre@gmail.com",
    age: 31,
  },
  {
    id: 7,
    username: "Clifford",
    img: avatar,
    status: "active",
    email: "Clifford@gmail.com",
    age: 38,
  },
  {
    id: 8,
    username: "Frances",
    img: avatar,
    status: "active",
    email: "Frances@gmail.com",
    age: 22,
  },
  {
    id: 9,
    username: "Roxie",
    img: avatar,
    status: "pending",
    email: "Roxie@gmail.com",
    age: 21,
  },
  {
    id: 10,
    username: "Cersei",
    img: avatar,
    status: "passive",
    email: "Cersei@gmail.com",
    age: 18,
  },
];
