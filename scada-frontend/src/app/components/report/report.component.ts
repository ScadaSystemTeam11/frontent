import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  tagForm: FormGroup;
  dateRangeForm: FormGroup;
  selectedReport: number = 0;
  selectedPriority : number = 0
  generateReport : boolean = false;
  reportTypes = [
    "Alarm Activations during a Time Period",
    "Alarm Activations of a certain Priority",
    "Tag Changes during a Time Period",
    "Latest Analog Input Values",
    "Latest Digital Input Values",
    "All Tag Changes for a certain Tag ID"]
  
  priorities = ["Low", "Medium", "High"] 


  
  constructor(private fb: FormBuilder,private reportService : ReportService){
    this.tagForm = this.fb.group({
      tagIDControl: ['', Validators.required]
    });
    this.dateRangeForm = this.fb.group({
      startDateControl: [null, Validators.required],
      endDateControl: [null, Validators.required]
    });
  }

  handleReportSelect(){
    this.generateReport = false;
    if(this.selectedReport == 3){
      this.reportService.getLatestAIReport().subscribe((res) =>{
        console.log(res);
        this.generateReport = true;
      })
    }
    if(this.selectedReport == 4){
      this.reportService.getLatestDIReport().subscribe((res) =>{
        console.log(res);
        this.generateReport = true;
      })
    }
  }

  dateReport(){
    const startDateValue = this.dateRangeForm.get('startDateControl')?.value;
    const endDateValue = this.dateRangeForm.get('endDateControl')?.value;
    console.log('Start Date:', startDateValue);
    console.log('End Date:', endDateValue);
    if (this.selectedReport == 0) {
      this.reportService.getDateRangeAlarmReport(startDateValue, endDateValue).subscribe((res) =>{
        console.log(res);
        this.generateReport = true;

      })
    }
    if(this.selectedReport == 2){
      this.reportService.getDateRangeTagReport(startDateValue, endDateValue).subscribe((res) =>{
        console.log(res);
        this.generateReport = true;

      })

    }
  }
  priorityReport(){
    this.reportService.getPriorityReport(this.selectedPriority).subscribe((res) =>{
      console.log(res);
      this.generateReport = true;

    })
  }

  tagIDReport(){
    const tagIDValue = this.tagForm.get('tagIDControl')?.value;
    console.log(tagIDValue);
    this.reportService.getTagsByIDReport(tagIDValue).subscribe((res) =>{
      console.log(res);
      this.generateReport = true;
    })
  }
}
