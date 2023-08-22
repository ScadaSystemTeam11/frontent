import { Alarm } from "./Alarm";

export enum TagType {
  AnalogInput = 'AnalogInput',
  DigitalInput = 'DigitalInput',
  AnalogOutput = 'AnalogOutput',
  DigitalOutput = 'DigitalOutput'
}

export abstract class Tag {
    id: string;
    tagName: string;
    description: string;
    ioAddress: string;
    isDeleted: boolean;
    currentValue: number;
  
    constructor(id: string, tagName: string, description: string, currentValue: number, isDeleted: boolean = false, ioAddress?: string) {
      this.id = id;
      this.tagName = tagName;
      this.description = description;
      this.ioAddress = ioAddress || this.getIOAddress();
      this.isDeleted = isDeleted;
      this.currentValue = currentValue;
    }
  
    private getIOAddress(): string {
      const values = ['S', 'C', 'R'];
      const randomValue = values[Math.floor(Math.random() * values.length)];
      return randomValue;
    }
  }
  
  
export class AnalogInput extends Tag {
    driver: string;
    scanTime: number;
    alarms: Alarm[];
    onOffScan: boolean;
    lowLimit: number;
    highLimit: number;
    units: string;
  
    constructor(id: string, tagName: string, description: string, currentValue: number,
                scanTime: number, onOffScan: boolean, alarms: Alarm[], lowLimit: number,
                highLimit: number, units: string, driver: string, isDeleted: boolean = false, ioAddress?: string) {
      super(id, tagName, description, currentValue, isDeleted, ioAddress);
      this.driver = driver;
      this.scanTime = scanTime;
      this.alarms = alarms;
      this.onOffScan = onOffScan;
      this.lowLimit = lowLimit;
      this.highLimit = highLimit;
      this.units = units;
    }
  
    // Additional constructors if needed
  }
  
export class AnalogOutput extends Tag {
    initialValue: number;
    lowLimit: number;
    highLimit: number;
    units: string;
  
    constructor(id: string, tagName: string, description: string, initialValue: number,
                currentValue: number, lowLimit: number, highLimit: number, units: string, isDeleted: boolean = false, ioAddress?: string) {
      super(id, tagName, description, currentValue, isDeleted, ioAddress);
      this.initialValue = initialValue;
      this.lowLimit = lowLimit;
      this.highLimit = highLimit;
      this.units = units;
    }
  
  }
  
export class DigitalInput extends Tag {
    scanTime: number;
    onOffScan: boolean;
    driver: string;
  
    constructor(id: string, tagName: string, description: string, currentValue: number,
                scanTime: number, onOffScan: boolean, driver: string, isDeleted: boolean = false, ioAddress?: string) {
      super(id, tagName, description, currentValue, isDeleted, ioAddress);
      this.scanTime = scanTime;
      this.onOffScan = onOffScan;
      this.driver = driver;
    }
  
  }
  
export class DigitalOutput extends Tag {
    initialValue: number;
  
    constructor(id: string, tagName: string, description: string, initialValue: number,
                currentValue: number, isDeleted: boolean = false, ioAddress?: string) {
      super(id, tagName, description, currentValue, isDeleted, ioAddress);
      this.initialValue = initialValue;
    }
  
  }

export class InputTagDTO {
  id: string;
  scan: boolean;
  type: string;

  constructor(id: string, scan: boolean, type: string) {
    this.id = id;
    this.scan = scan;
    this.type = type;
  }
}

export class OutputTagValueDTO {
  id: string;
  type: string;
  value: number;

  constructor(id: string, type: string, value: number) {
    this.id = id;
    this.type = type;
    this.value = value;
  }
}

export class DigitalOutputDTO {
  constructor(
    public Id: string,
    public Name: string,
    public Description: string,
    public InitialValue: number
  ) {}
}

export class DigitalInputDTO {
  constructor(
    public Id: string,
    public Name: string,
    public Description: string,
    public ScanTime: number,
    public CurrentValue: number
  ) {}
}

export class AnalogOutputDTO {
  constructor(
    public Id: string,
    public Name: string,
    public Description: string,
    public InitialValue: number,
    public LowLimit: number,
    public HighLimit: number,
    public Units: string
  ) {}
}

export class AnalogInputDTO {
  constructor(
    public Id: string,
    public Name: string,
    public Description: string,
    public CurrentValue: number,
    public LowLimit: number,
    public HighLimit: number,
    public Units: string,
    public ScanTime: number
  ) {}
}
  
  