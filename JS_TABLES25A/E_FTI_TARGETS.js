// E_FTI_TARGETS.js

window.E_FTI_TARGETS = {
  "tables": {
    "E_FTI_TARGETS": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
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
        "YEAR_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "QUARTER_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "MONTH_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "WEEK_ID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "key_value": true
        },
        "TARGET_NAME": {
          "type": "VARCHAR2(100)",
          "nullable": false,
          "key_value": true
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "key_value": true
        },
        "DESTINATION_COUNTRY": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DESTINATION_PROVINCE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DESTINATION_REGION": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "DESTINATION_LOCATION": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SOURCE_COUNTRY": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SOURCE_PROVINCE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SOURCE_REGION": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "SOURCE_LOCATION": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "TARGET_DESCRIPTION": {
          "type": "VARCHAR2(300)",
          "nullable": true
        },
        "TARGET_FINAL_REMARKS": {
          "type": "VARCHAR2(300)",
          "nullable": true
        },
        "TARGET_VALUE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "FORECAST_VALUE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "IB_VALUE": {
          "type": "NUMBER()",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
