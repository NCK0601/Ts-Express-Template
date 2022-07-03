import { Request, Response } from 'express';
import { Controller, Get } from '@nichengkai/express/typescript';
import homeService from '../service/Home.service';

@Controller('/home')
export class Home {
  @Get('/')
  homePage(req: Request, res: Response) {
    res.render('index', { title: 'Express' });
  }

  @Get('/hello')
  helloWorld(req: Request, res: Response) {
    res.send(homeService.getHelloWorld());
  }
}
