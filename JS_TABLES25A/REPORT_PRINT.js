// REPORT_PRINT.js

window.REPORT_PRINT = {
  "tables": {
    "REPORT_PRINT": {
      "columns": {
        "REPORT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "REPORT",
          "info": "Report ID "
        },
        "REPORT_JOB_NUMBER": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Report job number "
        },
        "IPP_PRINTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "IPP_PRINTER",
          "info": "IPP-compliant printer "
        },
        "NUM_COPIES": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "# of copies to print "
        },
        "PAGE_RANGES": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Page ranges to print "
        },
        "REPORT_PRINTED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Y if report has been printed "
        },
        "SCHEDULE": {
          "type": "VARCHAR2(100)",
          "nullable": true,
          "info": "Schedule description"
        },
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
        }
      },
      "fk_tables": []
    }
  }
};
