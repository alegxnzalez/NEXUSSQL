// INVOICE_STOP_BOV.js

window.INVOICE_STOP_BOV = {
  "tables": {
    "INVOICE_STOP_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "STOP_SEQ_NO": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "STOP_INVOLVED_PARTY_QUAL_XID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "LOCATION_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "LOCATION_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "LOCATION_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LOCATION_REFNUM": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "INVOICE_STOP_REASON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "INVOICE_STOP_REASON_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INVOICE_STOP_REASON_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "EQUIPMENT_PREFIX": {
          "type": "VARCHAR2(20)",
          "nullable": true
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain of the User. Is used for creating the GID."
        },
        "INVOICE_STOP_REFNUM_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "INVOICE_STOP_REFNUM_DESC": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "STOP_REFERENCE_NUMBER": {
          "type": "VARCHAR2(240)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
