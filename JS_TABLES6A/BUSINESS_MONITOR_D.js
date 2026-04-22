// BUSINESS_MONITOR_D.js

window.BUSINESS_MONITOR_D = {
  "tables": {
    "BUSINESS_MONITOR_D": {
      "columns": {
        "BUSINESS_MONITOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "BUSINESS_MONITOR"
        },
        "SEQUENCE": {
          "type": "NUMBER(2)",
          "nullable": false,
          "key_value": true
        },
        "QUERY_TABLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "QUERY_TABLE"
        },
        "SAVED_QUERY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "SAVED_QUERY"
        },
        "FINDER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "FINDER_SET"
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": []
    }
  }
};
