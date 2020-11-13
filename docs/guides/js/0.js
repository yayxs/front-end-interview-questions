const oldTreeList = [
  {
    id: "1",
    title: "测试5192",
    attribute: "N",
    sort: "",
    nodes: [
      {
        id: "ef3b9bdc651542c0ba8466eaa4641fd3",
        title: "test1072",
        attribute: "Y",
        sort: "0",
        innerid: "0523",
        videoStreams: [],
        code: "869bba457e0c49168f82463010be27af",
      },
      {
        id: "596746074bce4929859c4dcd998d1b8d",
        title: "集控添加",
        attribute: "N",
        sort: "1",
        nodes: [
          {
            id: "84a2c515eaf1461eac3d4e87745aeabf",
            title: "德蒙10倍云台相机",
            attribute: "Y",
            sort: "3",
            innerid: "235",
            subject: "101",
            subjectId: "f5b700081400495f9bbf59fd6300a81c",
            videoStreams: [
              {
                address: "",
                flag: "false",
                IP: "192.168.3.235",
                name: "德蒙云台相机",
                typeid: "5",
                id: "f8676a29c72e4e44b04b0fe96120e4cf",
                camera: "card1",
                deviceid: "1368d18d24884c80831ca32b20f54ac6",
                cameraName: "教师全景",
                MAC: "192168003235",
              },
            ],
            code: "869bba457e0c49168f82463010be27af",
          },
        ],
        videoStreams: [],
        code: "869bba457e0c49168f82463010be27af",
      },
    ],
    videoStreams: [],
    code: "869bba457e0c49168f82463010be27af",
  },
];
// console.log(oldTreeList);

function handleSubject(ele) {
  return {
    name: 456,
  };
}

function handleClass(ele) {
  return {
    id: ele.id,
    title: ele,
    attribute: ele.attribute,
    sort: ele.sort,
    innerid: ele.sort,
    videoStreams: ele.videoStreams,
    nodes: ele.nodes,
    subject: ele.title,
    subjectList: ele.nodes
  };
}
let newList = oldTreeList
newList[0].subject = oldTreeList[0].title
newList[0].subjectList = oldTreeList[0].nodes

function handlerTree(newList) {
  for (let i = 0; i < newList.length; i++) {
    if (newList[i].attribute) {
      if (newList[i].attribute === "Y") {
        handlerTree(subjectList[i].subjectList);
      } else {
       
      }
    }
  }
  return newList;
}

let r = handlerTree(oldTreeList);
console.log(r);
