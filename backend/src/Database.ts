//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { UserEntity } from './db/User.entity';
import { GameEntity } from './db/Game.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UserEntity, GameEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      User: [
        {
          username: 'username 1',
          email: 'email 1',
          password: 'password 1',
          balance: 0.94,
          winLossRecord: 'winLossRecord 1',
          id: 1,
        },
        {
          username: 'username 2',
          email: 'email 2',
          password: 'password 2',
          balance: 0.04,
          winLossRecord: 'winLossRecord 2',
          id: 94,
        },
        {
          username: 'username 3',
          email: 'email 3',
          password: 'password 3',
          balance: 0.39,
          winLossRecord: 'winLossRecord 3',
          id: 37,
        },
        {
          username: 'username 4',
          email: 'email 4',
          password: 'password 4',
          balance: 0.69,
          winLossRecord: 'winLossRecord 4',
          id: 98,
        },
        {
          username: 'username 5',
          email: 'email 5',
          password: 'password 5',
          balance: 0.05,
          winLossRecord: 'winLossRecord 5',
          id: 37,
        },
      ],
      Game: [
        {
          gameName: 'gameName 1',
          gameType: 'gameType 1',
          rulesDescription: 'rulesDescription 1',
          numberOfPlayers: 1,
          difficultyLevel: 'difficultyLevel 1',
          id: 80,
        },
        {
          gameName: 'gameName 2',
          gameType: 'gameType 2',
          rulesDescription: 'rulesDescription 2',
          numberOfPlayers: 2,
          difficultyLevel: 'difficultyLevel 2',
          id: 98,
        },
        {
          gameName: 'gameName 3',
          gameType: 'gameType 3',
          rulesDescription: 'rulesDescription 3',
          numberOfPlayers: 3,
          difficultyLevel: 'difficultyLevel 3',
          id: 70,
        },
        {
          gameName: 'gameName 4',
          gameType: 'gameType 4',
          rulesDescription: 'rulesDescription 4',
          numberOfPlayers: 4,
          difficultyLevel: 'difficultyLevel 4',
          id: 10,
        },
        {
          gameName: 'gameName 5',
          gameType: 'gameType 5',
          rulesDescription: 'rulesDescription 5',
          numberOfPlayers: 5,
          difficultyLevel: 'difficultyLevel 5',
          id: 20,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('UserEntity', data.User);
      await this.SeedResource('GameEntity', data.Game);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}