// LOAD_CONFIG_RULE.js

window.LOAD_CONFIG_RULE = {
  "tables": {
    "LOAD_CONFIG_RULE": {
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
        "SEQUENCE_NO": {
          "type": "NUMBER()",
          "nullable": false,
          "key_value": true
        },
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PACKAGED_ITEM"
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC"
        },
        "EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP"
        },
        "COMPARTMENT_NUM": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_ROLE_PROFILE"
        },
        "LOCATION_ROLE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_ROLE_PROFILE"
        },
        "LOAD_CONFIG_SETUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOAD_CONFIG_SETUP"
        }
      },
      "fk_tables": []
    }
  }
};
