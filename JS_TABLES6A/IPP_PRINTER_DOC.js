// IPP_PRINTER_DOC.js

window.IPP_PRINTER_DOC = {
  "tables": {
    "IPP_PRINTER_DOC": {
      "columns": {
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF",
          "info": "Document Definition ID "
        },
        "IPP_PRINTER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "IPP_PRINTER",
          "info": "Printer ID "
        },
        "SIDES": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "values": [
            "ONE SIDED",
            "TWO SIDED - LONG EDGE",
            "TWO SIDED - SHORT EDGE",
            "DUPLEX",
            "TUMBLE"
          ],
          "info": "Single/multiple side setting for this document and printer "
        },
        "ORIENTATION": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
            "PORTRAIT",
            "LANDSCAPE"
          ],
          "info": "Orientation for this document and printer "
        },
        "MEDIA": {
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
          "info": "Paper tray for this document and printer "
        },
        "DEFAULT_COPIES": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Default number of copies"
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
