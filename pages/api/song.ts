// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await (await fetch('https://cdn.jsdelivr.net/gh/nj-lizhi/song/audio/download.txt')).text()
  const songList = data.split('\n')
  res.status(200).json({data: songList})
}
