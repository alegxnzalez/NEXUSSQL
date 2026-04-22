// OR_EQUIPMENT.js

window.OR_EQUIPMENT = {
  "tables": {
    "OR_EQUIPMENT": {
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE",
          "info": "The GID for the order release. "
        },
        "OR_EQUIPMENT_SEQ": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "The equipment sequence to allow for multiple equipment request to be specified on the order release. "
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "EQUIPMENT_GROUP",
          "info": "The seal sequence to allow for multiple seals to be defined. "
        },
        "EQUIPMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_TYPE",
          "info": "The equipment seal number for the order release ordered equipment. "
        },
        "EQUIPMENT_NUMBER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "The equipment number as an identifier specified for this order release equipment. "
        },
        "EQUIPMENT_INITIAL": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "The equipment initial as an identifier specified for this order release equipment. "
        },
        "EQUIPMENT_INITIAL_NUMBER": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The equipment initial and number as an identifier specified for this order release equipment. "
        },
        "EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT",
          "info": "The actual equipment GID if the equipment is managed in the database. "
        },
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
          "info": "Date and time of the most recent data update."
        }
      },
      "fk_tables": [
        "OR_EQUIPMENT_SEAL",
        "SHIP_UNIT"
      ]
    }
  }
};
