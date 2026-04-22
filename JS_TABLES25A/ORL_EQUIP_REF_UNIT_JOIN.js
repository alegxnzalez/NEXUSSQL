// ORL_EQUIP_REF_UNIT_JOIN.js

window.ORL_EQUIP_REF_UNIT_JOIN = {
  "tables": {
    "ORL_EQUIP_REF_UNIT_JOIN": {
      "columns": {
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "ORDER_RELEASE_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_LINE",
          "info": "The order release line GID. "
        },
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The equipment reference unit GID for the order line. "
        },
        "NUM_REFERENCE_UNITS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The number of ref units per package for the equipment reference unit GID on this line. "
        },
        "TOTAL_NUM_REFERENCE_UNITS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total number of reference units for the equipment reference unit on this line."
        }
      },
      "fk_tables": []
    }
  }
};
