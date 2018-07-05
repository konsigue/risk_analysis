import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'analysis-business',
  templateUrl: './analysis-business.component.html',
  styleUrls: ['./analysis-business.component.css']
})
export class AnalysisBusinessComponent implements OnInit {
  public month: any
  public monthChart: string
  public daysChart: string

  public clientsInvoicing: any[]

  constructor() {
    this.month = moment()

    /* mocks */
    this.clientsInvoicing = [
      { Name: "pegaso", Invoices: [
        { month: "2017-04", quantity: 0},
        { month: "2017-05", quantity: 20},
        { month: "2017-06", quantity: 3},
        { month: "2017-07", quantity: 0},
        { month: "2017-08", quantity: 9},
      ], Amount: 25650, Weight: 33.3, Score: 10 },
      { Name: "axtel", Invoices: [
        { month: "2017-04", quantity: 4},
        { month: "2017-05", quantity: 0},
        { month: "2017-06", quantity: 3},
        { month: "2017-07", quantity: 30},
        { month: "2017-08", quantity: 0},
      ], Amount: 22122, Weight: 28.72, Score: 10 },
      { Name: "operbes", Invoices: [
        { month: "2017-04", quantity: 0},
        { month: "2017-05", quantity: 29},
        { month: "2017-06", quantity: 38},
        { month: "2017-07", quantity: 10},
        { month: "2017-08", quantity: 9},
      ], Amount: 11710, Weight: 15.2, Score: 8 },
    ]
    /* end mocks */
  }

  ngOnInit() {
    this.drawActivityChart()
  }

  drawActivityChart() : void {
    this.drawDays()
    this.drawMonths()
  }

  drawMonths() : void {
    this.monthChart = "<ol class='month'>"
    for (let i=0; i<=12; i++) {
      let durationMonth = moment.duration({'months':1})
      this.monthChart += "<li>"
      this.monthChart += moment(this.month).format('MMM')
      this.monthChart += "</li>"
      this.month = moment(this.month).subtract(durationMonth)
    }
    this.monthChart += "</ol>"

    document.getElementById("month").innerHTML = this.monthChart
  }

  drawDays() : void {
    let day = moment()

    this.daysChart = ""
    // Calculate the offset for days of the week to line up correctly
    for (const client of this.clientsInvoicing) {
      this.daysChart += "<ol><div class='name'><label>" + client.Name + "</label></div>"

      this.daysChart += "<div class='week'>"
      for (const invoice of client.Invoices) {
        this.daysChart += '<li><span class="tooltip">'+ invoice.month + '</span></li>'
      }
      this.daysChart += "</div></ol>"
    }
    
    document.getElementById("days").innerHTML = this.daysChart
  }

}