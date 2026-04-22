// UOMMAP.js

window.UOMMAP = {
  "tables": {
    "UOMMAP": {
      "columns": {
        "TYPE": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "key_value": true,
          "info": "TYPE contains the type for the unit of measure for localization. Examples include: DISTANCE DURATION LENGTH SPEED TEMPERATURE VOLUME WEIGHT "
        },
        "FROM_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "key_value": true,
          "info": "FROM_UOM_CODE contains an abbreviated name for the original unit of measure being converted. "
        },
        "TO_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": false,
          "key_value": true,
          "info": "TO_UOM_CODE contains an abbreviated name for the unit of measure to which another unit of measure is being converted. "
        },
        "CONVERSION_CLASS": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "CONVERSION_CLASS contains the Java class name that is used to convert a temperature from one unit of measure to another. The  units of measure include Celsius, Fahrenheit and Kelvin. "
        },
        "CONVERSION_FACTOR": {
          "type": "NUMBER(20,7)",
          "nullable": true,
          "info": "CONVERSION_FACTOR contains the mathematical factors for converting one unit of measure to another."
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
