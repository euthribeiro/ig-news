import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {

  console.log(request.query); 

  const users = [
    {id: 1, name: 'Diego'},
    {id: 2, name: 'Thiago'},
    {id: 3, name: 'Gabriel'},
  ]

  return response.json(users);
};