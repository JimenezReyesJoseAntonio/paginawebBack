import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UploadsController } from './uploads/uploads/uploads.controller';
import { ImageModule } from './image/image.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,// No utilizar en producción
        logging:false
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    ImageModule,
  ],
  controllers: [AppController, UploadsController],
  providers: [AppService],
})
export class AppModule {}
