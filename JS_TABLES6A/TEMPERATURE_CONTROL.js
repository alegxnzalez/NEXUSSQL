// TEMPERATURE_CONTROL.js

window.TEMPERATURE_CONTROL = {
  "tables": {
    "TEMPERATURE_CONTROL": {
      "columns": {
        "TEMPERATURE_CONTROL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "TEMPERATURE_CONTROL_GID contains the unique identifier for temperature control information for the item being shipped. Examples include: AMBIENT, INSULATED, REFRIGERATED "
        },
        "TEMPERATURE_CONTROL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "TEMPERATURE_CONTROL_XID contains the unique external identifier for the temperature control of the item being shipped. "
        },
        "TEMPERATURE_CONTROL_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "TEMPERATURE_CONTROL_NAME contains the temperature control name for the item being shipped. "
        },
        "MIN_TEMP": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "MIN_TEMP contains the minimum temperature at which the item can be shipped. "
        },
        "MIN_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for MIN_TEMP column. "
        },
        "MIN_TEMP_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "MIN_TEMP in base units. "
        },
        "MAX_TEMP": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "MAX_TEMP contains the maximum temperature at which the item can be shipped. "
        },
        "MAX_TEMP_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "info": "Unit of measure for MAX_TEMP column. "
        },
        "MAX_TEMP_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "MAX_TEMP in base units."
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
        "COMMODITY",
        "EQUIPMENT_GROUP",
        "EQUIPMENT_GROUP_COMPARTMENT",
        "EQUIPMENT_TYPE"
      ]
    }
  }
};
