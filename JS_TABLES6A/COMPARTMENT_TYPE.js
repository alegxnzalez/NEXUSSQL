// COMPARTMENT_TYPE.js

window.COMPARTMENT_TYPE = {
  "tables": {
    "COMPARTMENT_TYPE": {
      "columns": {
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
        "COMPARTMENT_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "User defined id for the Compartment Type "
        },
        "COMPARTMENT_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "COMPARTMENT_TYPE_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Compartment type name. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "Description for the Compartment Type"
        }
      },
      "fk_tables": [
        "COMPARTMENT_TYPE_PROF_D",
        "EQUIPMENT_GROUP",
        "EQUIPMENT_GROUP_COMPARTMENT"
      ]
    }
  }
};
