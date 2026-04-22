// BULK_REPORTING.js

window.BULK_REPORTING = {
  "tables": {
    "BULK_REPORTING": {
      "description": "Progress table for monitoring bulk report generation",
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
},
        "BULK_REPORTING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "BULK_REPORTING_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "QUERY_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Saved query used to generate bulk report"
},
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REPORT",
          "info": "Report generated"
},
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Start time of bulk report generation"
},
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "End time of bulk report generation"
},
        "NUM_REPORTS_REQUESTED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "# of business objects requested for bulk generation"
},
        "NUM_REPORTS_GENERATED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "# of business objects generated to date"
},
        "NUM_REPORTS_EMAILED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "# of e-mails generated to date"
},
        "NUM_REPORTS_PRINTED": {
          "type": "NUMBER",
          "nullable": true,
          "info": "# of printouts via IPP generated to date"
},
        "STATUS": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "WAITING",
                    "RUNNING",
                    "COMPLETED",
                    "ABORTED"
          ],
          "info": "Status of bulk reporting"
},
        "SINCE": {
          "type": "DATE",
          "nullable": true,
          "info": "Time since last status change"
},
        "APP_MACHINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "APP_MACHINE",
          "info": "Application server running the bulk generation"
}
      },
      "fk_tables": [
        "REPORT_LOG"
]
    }
  }
};