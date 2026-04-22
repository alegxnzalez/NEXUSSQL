// DATA_PURGE_HISTORY.js

window.DATA_PURGE_HISTORY = {
  "tables": {
    "DATA_PURGE_HISTORY": {
      "columns": {
        "DATA_PURGE_SEQNO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "Data sequence number "
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Data purge start time "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Data purge end time "
        },
        "STATUS": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Status of the current data purge.  There are three types of statuses: RUNNING, COMPLETED, STOPPED. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain Name"
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
      "fk_tables": [
        "DATA_PURGE_HISTORY_DETAIL"
      ]
    }
  }
};
