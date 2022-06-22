import { gql, useQuery } from "@apollo/client";
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}
function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  console.log(data);
  return (
    //<h1 className="titles">Hello World</h1>-->
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

// Exemplo 01
// function App() {
//   const { data } = useQuery(GET_LESSONS_QUERY);

//   console.log(data);
//   return (
//     //<h1 className="titles">Hello World</h1>-->
//     <ul>
//       {data.lessons.map((lesson: Lesson) => {
//         return <li>{lesson.title}</li>
//       })}
//     </ul>
//   )
// }

export default App
