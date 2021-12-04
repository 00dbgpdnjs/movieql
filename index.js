import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

// console.log("sup");

// Create graphpl server
const server = new GraphQLServer({
    // 환경 설정: Set schema and resolvers
    typeDefs: "graphql/schema.graphql",
    resolvers // resolvers.js에서 resolvers로 export 안했으면 'resolvers=eport한 변수명'으로 바꿔야함(물론 그 파일에서 그 변수명과 const 변수명이 일치해야함)
})

server.start(() => console.log("Graphql Server Running")) 
// (() => callback) 