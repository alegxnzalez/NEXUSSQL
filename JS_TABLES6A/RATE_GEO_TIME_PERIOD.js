// RATE_GEO_TIME_PERIOD.js

window.RATE_GEO_TIME_PERIOD = {
  "tables": {
    "RATE_GEO_TIME_PERIOD": {
      "columns": {
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO",
          "info": "Owning rate geo "
        },
        "RATE_GEO_TIME_PERIOD_SEQ": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true,
          "info": "System generated sequence number "
        },
        "START_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Start date of the time period "
        },
        "END_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "End date of the time period"
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
      "fk_tables": [
        "RATE_GEO_TIME_PERIOD_D"
      ]
    }
  }
};
