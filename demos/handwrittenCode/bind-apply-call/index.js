let arr = [
  null,
  {
    id: "1",
    title: "测试5192",
    attribute: "N",
    sort: "",
    nodes: [
      null,
      {
        id: "596746074bce4929859c4dcd998d1b8d",
        title: "集控添加",
        attribute: "N",
        sort: "1",
        nodes: [null],
        videoStreams: [],
        code: "869bba457e0c49168f82463010be27af",
      },
      null,
      null,
      {
        id: "0ff3fb39b42f4fc8b77ff0ab689a2ae8",
        title: "学情分析专用教室",
        attribute: "Y",
        sort: "1",
        innerid: "3700",
        videoStreams: [
          {
            address: "",
            flag: "false",
            IP: "192.168.12.244",
            name: "244开发专用",
            typeid: "1",
            id: "ded62f9e308741b3a729b5c637dc0645",
            camera: "card10",
            deviceid: "6b3894a0ab2f4fa4b5456ecf20af6790",
            cameraName: "电影",
            MAC: "00096F004B04",
          },
          {
            address: "",
            flag: "false",
            IP: "192.168.12.244",
            name: "244开发专用",
            typeid: "1",
            id: "9dad6dfaa2fd4cda8ae90fc822a0acf9",
            camera: "card0",
            deviceid: "6b3894a0ab2f4fa4b5456ecf20af6790",
            cameraName: "教师",
            MAC: "00096F004B04",
          },
          {
            address: "",
            flag: "false",
            IP: "192.168.12.244",
            name: "244开发专用",
            typeid: "1",
            id: "c7043627cc0b4f59a96f83b202d56db3",
            camera: "card1",
            deviceid: "6b3894a0ab2f4fa4b5456ecf20af6790",
            cameraName: "教师全景",
            MAC: "00096F004B04",
          },
          {
            address: "",
            flag: "false",
            IP: "192.168.12.244",
            name: "244开发专用",
            typeid: "1",
            id: "14119134605f45f8938a294beb40cc11",
            camera: "card2",
            deviceid: "6b3894a0ab2f4fa4b5456ecf20af6790",
            cameraName: "学生",
            MAC: "00096F004B04",
          },
          {
            address: "",
            flag: "false",
            IP: "192.168.12.244",
            name: "244开发专用",
            typeid: "1",
            id: "196496b2c134462787c92463f89173e4",
            camera: "card3",
            deviceid: "6b3894a0ab2f4fa4b5456ecf20af6790",
            cameraName: "学生全景",
            MAC: "00096F004B04",
          },
          {
            address: "",
            flag: "false",
            IP: "192.168.12.244",
            name: "244开发专用",
            typeid: "1",
            id: "278cad9dee9d46e0bd3f8bdd8b734866",
            camera: "blackboard",
            deviceid: "6b3894a0ab2f4fa4b5456ecf20af6790",
            cameraName: "板书",
            MAC: "00096F004B04",
          },
          {
            address: "",
            flag: "false",
            IP: "192.168.12.244",
            name: "244开发专用",
            typeid: "1",
            id: "8939cfffd66c42ff915bf709a105245b",
            camera: "card5",
            deviceid: "6b3894a0ab2f4fa4b5456ecf20af6790",
            cameraName: "VGA",
            MAC: "00096F004B04",
          },
        ],
        code: "869bba457e0c49168f82463010be27af",
        subject: "101",
      },
      null,
      null,
      null,
      null,
    ],
    videoStreams: [],
    code: "869bba457e0c49168f82463010be27af",
  },
];

function handleData(arr) {
  arr.forEach((item, index) => {
    // console.log(arr[index]);
    if (arr[index]) {
      if (arr[index]["nodes"]) {
        handleData(arr[index]["nodes"]);
      }
    }

    arr.splice(index, 1);
  });
  return arr;
}
let r = handleData(arr);
console.log(r);
