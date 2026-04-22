// OBL_EQUIP_REF_UNIT_JOIN.js

window.OBL_EQUIP_REF_UNIT_JOIN = {
  "tables": {
    "OBL_EQUIP_REF_UNIT_JOIN": {
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
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "OB_LINE",
          "info": "The GID for the order base line. "
        },
        "NUM_REFERENCE_UNITS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The equipment reference unit, such as loading meter, that is referring to the equipment consumption value. "
        },
        "TOTAL_NUM_REFERENCE_UNITS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The number of equipment reference units this line will consume when loading onto the equipment. "
        },
        "EQUIPMENT_REFERENCE_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EQUIPMENT_REFERENCE_UNIT",
          "info": "The total equipment reference units max consumption demand for this line."
        }
      },
      "fk_tables": []
    }
  }
};
