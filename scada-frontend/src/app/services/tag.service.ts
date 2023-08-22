import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnalogInput, AnalogInputDTO, AnalogOutput, AnalogOutputDTO, DigitalInput, DigitalInputDTO, DigitalOutput, DigitalOutputDTO, InputTagDTO, OutputTagValueDTO, Tag, TagType } from '../models/Tag';
import { BehaviorSubject } from 'rxjs';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  api : string = `${environment.api}/tag`
   hubConnection: HubConnection;


  constructor(private http: HttpClient) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5022/tagChangeHub')
      .build();
    this.hubConnection.start().then(() => {
      console.log('WebSocket connected');
    });

  }

  getActiveInputs(){
    return this.http.get<Tag[]>(this.api + '/ActiveInputs')
  }
  getAnalogInputs(){
    return this.http.get<AnalogInput[]>(this.api + '/AnalogInputs')
  }
  getAnalogOutputs(){
    return this.http.get<AnalogOutput[]>(this.api + '/AnalogOutputs')
  }
  getDigitalInputs(){
    return this.http.get<DigitalInput[]>(this.api + '/DigitalInputs')
  }
  getDigitalOutputs(){
    return this.http.get<DigitalOutput[]>(this.api + '/DigitalOutputs')
  }

  deleteAnalogInput(id : string){
    return this.http.delete(this.api + `/DeleteAnalogInputTag?id=${id}`);
  }
  deleteAnalogOutput(id : string){
    return this.http.delete(this.api + `/DeleteAnalogOutputTag?id=${id}`);
  }
  deleteDigitalInput(id : string){
    console.log("Here");
    console.log(id);
    const call =  this.http.delete(this.api + `/DeleteDigitalInputTag?id=${id}`);
    console.log(call);
    return call;
  }
  deleteDigitalOutput(id : string){
    return this.http.delete(this.api + `/DeleteDigitalOutputTag?id=${id}`);
  }

  createAnalogInputTag(dto: AnalogInputDTO) {
    return this.http.post(this.api + '/CreateAnalogInputTag', dto);
  }
  createAnalogOutputTag(dto: AnalogOutputDTO) {
    return this.http.post(this.api + '/CreateAnalogOutputTag', dto);
  }
  createDigitalInputTag(dto: DigitalInputDTO) {
    return this.http.post(this.api + '/CreateDigitalInputTag', dto);
  }
  createDigitalOutputTag(dto: DigitalOutputDTO) {
    return this.http.post(this.api + '/CreateDigitalOutputTag', dto);
  }
  
  setTagScanOnOff(inputTagDto: InputTagDTO){
    return this.http.put(this.api + "/InputScanOnOff", inputTagDto);
  }

  updateOutputTagValue(outputTagValueDto: OutputTagValueDTO){
    return this.http.put(this.api + "/UpdateOutputTagValue", outputTagValueDto);
  }
  
  getTagType(tag : any) : TagType{
    if(tag.onOffScan !== undefined){
      if(tag.alarms !== undefined)return TagType.AnalogInput;
      else return TagType.DigitalInput;
    }else{
      if(tag.units !== undefined) return TagType.AnalogOutput;
      else return TagType.DigitalOutput;
    }
  }
}
