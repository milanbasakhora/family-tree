import { readBody, createError } from "h3";
import { v4 as uuidv4 } from "uuid";

// Mock database
let familyTree = [
  {
    id: 1,
    name: "Dudippa",
    gender: "male",
    fid: null,
    mid: null,
    pids: [null],
    img: "https://cdn.balkan.app/shared/m60/1.jpg",
  },
  {
    id: 2,
    name: "Tirthabir(Kaila)",
    gender: "male",
    fid: 1,
    mid: null,
    pids: [null],
    img: "https://cdn.balkan.app/shared/m60/1.jpg",
  },
  {
    id: 3,
    name: "Antikarna",
    gender: "male",
    fid: 1,
    mid: null,
    pids: [null],
    img: "https://cdn.balkan.app/shared/m60/1.jpg",
  },
  {
    id: 4,
    name: "Dhanjuri",
    gender: "male",
    fid: 2,
    mid: null,
    pids: [6],
    img: "https://cdn.balkan.app/shared/m60/1.jpg",
  },
  {
    id: 5,
    name: "Hiradhan",
    gender: "male",
    fid: 2,
    mid: null,
    pids: [null],
    img: "https://cdn.balkan.app/shared/m60/1.jpg",
  },
];

export default defineEventHandler(async (event) => {
  console.log("Request method:", event.req.method);

  const method = event.req.method;
  const body = await readBody(event);

  if (method === "GET") {
    return familyTree;
  } else if (method === "POST") {
    const newNode = {
      id: uuidv4(), // Generate a unique ID for the new node
      ...body,
    };
    familyTree.push(newNode);
    return newNode;
  } else if (method === "PUT") {
    const { id, ...updatedData } = body;
    const nodeIndex = familyTree.findIndex((node) => node.id === id);
    if (nodeIndex === -1) {
      throw createError({ statusCode: 404, statusMessage: "Node not found" });
    }
    familyTree[nodeIndex] = { ...familyTree[nodeIndex], ...updatedData };
    return familyTree[nodeIndex];
  } else {
    throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
  }
});
