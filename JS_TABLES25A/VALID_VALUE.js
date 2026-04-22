// VALID_VALUE.js

window.VALID_VALUE = {
  "tables": {
    "VALID_VALUE": {
      "columns": {
        "VALID_VALUE_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "VALID_VALUE_TYPE",
          "info": "Identifies type from the VALID_"
        },
        "VALUE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "A single valid value for the type. If type is SHIPMENT_COST, this may be B or A or any value used by the code and for persistence "
        },
        "TRANSLATION_GID": {
          "type": "VARCHAR2(1000)",
          "nullable": false,
          "foreign_key": "TRANSLATION",
          "info": "Translation gid to represent the value to the user such as in a picklist.  For example, this may be label.base_cost or label.accessorial_cost. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "description of the value and what it represents"
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
