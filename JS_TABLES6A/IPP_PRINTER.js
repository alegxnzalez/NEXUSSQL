// IPP_PRINTER.js

window.IPP_PRINTER = {
  "tables": {
    "IPP_PRINTER": {
      "columns": {
        "IPP_PRINTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "IPP_PRINTER_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PRINTER_NAME": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "info": "IPP printer name "
        },
        "DEFAULT_COPIES": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Default # of document copies "
        },
        "DEFAULT_SIDES": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
            "ONE SIDED",
            "TWO SIDED - LONG EDGE",
            "TWO SIDED - SHORT EDGE",
            "DUPLEX",
            "TUMBLE"
          ],
          "info": "Default settings for single/multiple sided output "
        },
        "DEFAULT_ORIENTATION": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "PORTRAIT",
            "LANDSCAPE"
          ],
          "info": "Default orientation (portrait/landscape) "
        },
        "DEFAULT_MEDIA": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "TRAY1",
            "TRAY2",
            "TRAY3",
            "A3",
            "A4",
            "A5",
            "B4",
            "B5"
          ],
          "info": "Default paper tray "
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
        },
        "REPORT_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REPORT_SYSTEM",
          "info": "Report System handling the print request"
        }
      },
      "fk_tables": [
        "IPP_PRINTER_DOC",
        "IPP_PRINTER_REP",
        "REPORT_PRINT"
      ]
    }
  }
};
