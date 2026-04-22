// HOS_DAILY_SUMMARY.js

window.HOS_DAILY_SUMMARY = {
  "tables": {
    "HOS_DAILY_SUMMARY": {
      "columns": {
        "DRIVER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "DRIVER"
        },
        "HOS_DAILY_SUMMARY_SEQ_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "WORK_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time to be associated with "
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT"
        },
        "IS_ACTUAL": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "TIME_WORKED": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total time worked by driver on this date up until time in WORK_DATE. "
        },
        "TIME_WORKED_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TIME_WORKED_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TIME_DRIVEN": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Total time driven by driver on this date up until time in WORK_DATE."
        },
        "TIME_DRIVEN_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "TIME_DRIVEN_BASE": {
          "type": "NUMBER()",
          "nullable": true
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
