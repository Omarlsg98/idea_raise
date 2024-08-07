export interface IdeaDataDefBackend {
  idea_id: number
  title: string
  category: string
  description: string
  total_prize: number
  total_advocates: number
  chat: Array<any>
}

export interface IdeaDataDef {
  id: number
  title: string
  category: string
  description: string
  totalPrize: number
  totalParticipants: number
}

export interface IdeaDetailsProps {
  idea: IdeaDataDef
  ideasList: Array<IdeaDataDef>
  setIdeasList: Function
}
