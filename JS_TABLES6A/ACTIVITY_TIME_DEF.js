// ACTIVITY_TIME_DEF.js

window.ACTIVITY_TIME_DEF = {
  "tables": {
    "ACTIVITY_TIME_DEF": {
      "columns": {
        "ACTIVITY_TIME_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "ACTIVITY_TIME_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPECIAL_SERVICE"
        },
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE"
        },
        "SHIP_UNIT_SPEC_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC_PROFILE"
        },
        "FIXED_STOP_TIME": {
          "type": "NUMBER()",
          "nullable": false
        },
        "FIXED_STOP_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "FIXED_STOP_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "VARIABLE_STOP_TIME": {
          "type": "NUMBER()",
          "nullable": false
        },
        "VARIABLE_STOP_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false
        },
        "VARIABLE_STOP_TIME_BASE": {
          "type": "NUMBER()",
          "nullable": false
        },
        "VARIABLE_STOP_QUANTITY": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VARIABLE_STOP_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VARIABLE_STOP_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "VARIABLE_STOP_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VARIABLE_STOP_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "VARIABLE_STOP_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
        },
        "VARIABLE_STOP_VOLUME_BASE": {
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
      "fk_tables": [
        "LOCATION_ACTIVITY_TIME_DEF"
      ]
    }
  }
};
