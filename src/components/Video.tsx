import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';
import { Player, Youtube, DefaultUi } from "@vime/react";
import { } from '../styles/global.css';

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery } from '../graphql/generated';

// const GET_LESSON_BY_SLUG_QUERY = gql`
//   query GetLessonBySlug ($slug:String) {
//     lesson(where: {slug: $slug}) {
//       title
//       description
//       videoId
//       teacher {
//         bio
//         avatarURL
//         name
//       }
//     }
//   }
// `
// interface GetLessonBySlugResponse {
//   lesson: {
//     title: string;
//     description: string;
//     videoId: string;
//     teacher: {
//       bio: string;
//       avatarURL: string;
//       name: string;
//     }  
//   }
// }

interface VideoProps {
  lessonSlug: string;
}
export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    }
  })

  console.log(data)

  if (!data || !data.lesson) {
    return (
      <div className='flex-1'>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div className='flex items-center gap-4 mt-6'>
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                />
                <div>
                  <strong className='font-bold text-2xl block'>
                    {data.lesson.teacher.name}
                  </strong>
                  <span className='text-gray-200 text-sm block'>
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a href="" className="btnComunity">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a href="" className='btnChallenge'>
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className='gap-6 mt-20 grid grid-cols-2'>
          <a href='' className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-sm text-gray-200 mt-2'>
                Material complementar
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
          <a href='' className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-sm text-gray-200 mt-2'>
                Wallpapers exclusivos
              </strong>
              <p className='text-sm text-gray-200 mt-2'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}