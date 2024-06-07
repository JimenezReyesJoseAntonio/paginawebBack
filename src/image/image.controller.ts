import { Body, Controller, Param, Post, Put, Get } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {

    constructor(private readonly imageService: ImageService) {}

  @Post()
  async saveImage(@Body() body: { path: string }) {
    return await this.imageService.saveImage(body.path);
  }

  @Put(':id')
  async updateImageById(@Param('id') id: number, @Body() body: { newPath: string }) {
    return await this.imageService.updateImageById(id, body.newPath);
  }

  @Get(':id')
    async getImagePath(@Param('id') id: number): Promise<{ path: string }> {
        const path = await this.imageService.getImagePathById(id);
        return { path };
    }
}
