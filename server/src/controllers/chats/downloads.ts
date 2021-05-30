  
import { Request, Response } from 'express';
import findChat from '../../entity/chats/findChat';
import path from 'path';


export default {
  async index(request: Request, response: Response) {
    const { id } = request.params;

    const chat = await findChat(Number(id));

    if(!chat)
    return response.json({error: 'File not found'});

    if(!chat.pdf) 
    return response.json({error: 'File not found'});

    response.download(path.join(__dirname, '..', '..', '..', 'uploads', 'pdfs', `${chat.pdf}`), err => {
      if(err) {
        return response.json({error: 'Error downloading. Please try again!'})
      }
    })
  },
}