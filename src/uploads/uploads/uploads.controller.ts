import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('uploads')
export class UploadsController {
    @Post('image')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './imagenes/',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);
            },
        }),
    }))
    async uploadImage(@UploadedFile() file) {
        // Aquí puedes guardar el archivo en una ubicación específica
        const filename = file.filename;
        const filePath = 'http://localhost:8080/imagenes/'+filename; // URL base del servidor + ruta del archivo
        return { filename, filePath }; // Devuelve el nombre del archivo y la URL del archivo guardado
    }
}
