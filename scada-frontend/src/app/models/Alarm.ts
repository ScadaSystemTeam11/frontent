export enum AlarmPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export enum AlarmType {
  LOWER = 'LOWER',
  HIGHER = 'HIGHER'
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