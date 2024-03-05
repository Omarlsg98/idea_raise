import { IdeaDataDef, IdeaDataDefBackend } from './definitions'

const formatIdeas = (ideas: Array<IdeaDataDefBackend>): Array<IdeaDataDef> => {
  return ideas.map((idea: IdeaDataDefBackend) => {
    return {
      title: idea.title,
      category: idea.category,
      description: idea.description,
      totalPrize: idea.total_prize,
      totalParticipants: idea.total_advocates,
      id: idea.idea_id,
    }
  })
}

const getIdeas = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + 'ideas/', {
    mode: 'cors',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await response.json()
  return formatIdeas(data.ideas)
}

const searchIdeas = async (searchString: string) => {
  const params = new URLSearchParams({
    search_string: searchString, // replace with your actual search string
  })
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}ideas/search?${params.toString()}`, {
    mode: 'cors',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await response.json()
  return formatIdeas(data.ideas)
}

const postIdea = async (idea: IdeaDataDef) => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + 'ideas/', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify({
      title: idea.title,
      category: idea.category,
      description: idea.description,
      total_prize: idea.totalPrize,
      total_advocates: idea.totalParticipants,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json()

  return result
}

const putIdea = async (idea: IdeaDataDef) => {
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + 'ideas/', {
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify({
      title: idea.title,
      category: idea.category,
      description: idea.description,
      total_prize: idea.totalPrize,
      total_advocates: idea.totalParticipants,
      idea_id: idea.id,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  const result = await response.json()

  return result
}

export { getIdeas, postIdea, putIdea, searchIdeas }

