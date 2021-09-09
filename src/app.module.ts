import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { NestjsKnexModule } from 'nestjs-knexjs';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthGuard } from './auth.guard';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'docs'),
    }),
    NestjsKnexModule.register({
      client: 'mysql',
      connection: {
        host: 'sql3.freesqldatabase.com',
        user: 'sql3435893',
        password: 'zcVgqXKXs4',
        database: 'sql3435893',
        port: 3306,
    },
      // connection: {
      //     host: 'remotemysql.com',
      //     user: 'PrVenWSklm',
      //     password: 'H9p5XAvf8U',
      //     database: 'PrVenWSklm',
      //     port: 3306,
      // },
  })],
  controllers: [AppController, UserController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
