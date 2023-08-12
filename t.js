const obj = {
  "_id": "64d2157e5bc1e34560d9f3b8",
  "ID": "",
  "FirstName": "B",
  "LastName": "A",
  "Gender": "Female",
  "Email": "",
  "Class": {
    "Room": {
      "Name": "B13",
      "Id": "rooms:f3e5432820ae4866bee156e597377626"
    },
    "Trainer": {},
    "Name": "WEP-2021A",
    "Id": "classes:850fc09e5eb745eaaecb92c759d93937"
  },
  "GENERATIONS_ID": "generations:7a81264593b94dc79145da534b51721b",
  "SCHOOLS_ID": "schools:754c248aae73461080e0d99ad463d3c2",
  "STUDENTS_ID": "students:dbb1f631e6754c4cb2aa843e5d0a8617",
  "CreatedAt": "2023-08-08T10:14:22.912Z"
}
let paths = [
  {
    path: 'Gender',
  },
  {
    path: 'Class.Name',
  },

]
console.log('re', getValueNtestedObject(paths, obj));