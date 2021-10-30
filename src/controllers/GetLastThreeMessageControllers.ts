import { Request, Response } from "express";
import { GetLastThreeMessagesService } from "../services/GetLastThreeMessagesService";

class GetLastThreeMessageControllers {
  async hadle(request: Request, response: Response) {
    const service = new GetLastThreeMessagesService();
    const result = await service.execute();
    return response.json(result);
  }
}

export { GetLastThreeMessageControllers };
