export enum AlarmPriority {
  LOW = 0,
  MEDIUM = 1,
  HIGH = 2
}

export enum AlarmType {
  LOWER = 0,
  HIGHER = 1
}

export class Alarm {
  id: string;
  valueLimit: number;
  type: AlarmType;
  priority: AlarmPriority;
  tagID: string;
  unit: string;
  isDeleted: boolean;

  constructor(
    id: string,
    valueLimit: number,
    type: AlarmType,
    priority: AlarmPriority,
    tagID: string,
    unit: string,
    isDeleted: boolean
  ) {
    this.id = id;
    this.valueLimit = valueLimit;
    this.type = type;
    this.priority = priority;
    this.tagID = tagID;
    this.unit = unit;
    this.isDeleted = isDeleted;
  }
}

export class AlarmAlert {
  id: string;
  alarm: Alarm;
  timestamp: Date;

  constructor(id : string, alarm : Alarm, timestamp : Date) {
    this.id = id;
    this.alarm = alarm;
    this.timestamp = timestamp;
  }
}

export class AlarmDTO {
  valueLimit: number;
  type: AlarmType;
  priority: AlarmPriority;
  tagID: string;
  unit: string;

  constructor(
    valueLimit: number,
    type: AlarmType,
    priority: AlarmPriority,
    tagID: string,
    unit: string
  ) {
    this.valueLimit = valueLimit;
    this.type = type;
    this.priority = priority;
    this.tagID = tagID;
    this.unit = unit;
  }
}