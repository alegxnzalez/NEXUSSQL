// UOM.js

window.UOM = {
  "tables": {
    "UOM": {
      "columns": {
        "TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "key_value": true,
          "info": "TYPE contains the type for the unit of measure. Examples include: DISTANCE DURATION LENGTH SPEED TEMPERATURE VOLUME WEIGHT "
        },
        "UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "key_value": true,
          "info": "UOM_CODE contains an abbreviation for the unit of measure. Examples include CUFT, LB and YD. "
        },
        "UOM_SHORT_DESCRIPTION": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "info": "UOM_SHORT_DESCRIPTION contains an abbreviated name for the unit of measure. Examples include CAN GAL, KPH and NAUT MI. "
        },
        "UOM_LONG_DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "info": "UOM_LONG_DESCRIPTION contains the full name for the unit of measure. Examples include METRIC TONS, POUNDS and YARDS. "
        },
        "UOM_RANK": {
          "type": "NUMBER(3)",
          "nullable": false
        },
        "IS_STORAGE_DEFAULT": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "The IS_STORAGE_DEFAULT column, when set to Y, indicates that the given uom_code is the\nstorage default for all database columns of the given type.  For example, LB is the\ndefault code for all WEIGHT related columns. "
        },
        "IS_DISPLAY_DEFAULT": {
          "type": "CHAR(1)",
          "nullable": false,
          "info": "The IS_DISPLAY_DEFAULT column, when set to Y, indicates that the given uom_code is the\ndisplay default for all display fields of the given type."
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
