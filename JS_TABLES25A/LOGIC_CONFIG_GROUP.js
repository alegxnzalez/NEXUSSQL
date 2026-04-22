// LOGIC_CONFIG_GROUP.js

window.LOGIC_CONFIG_GROUP = {
  "tables": {
    "LOGIC_CONFIG_GROUP": {
      "columns": {
        "LOGIC_CONFIG_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
        },
        "LOGIC_CONFIG_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
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
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
        }
      },
      "fk_tables": [
        "LOGIC_CONFIG",
        "LOGIC_CONFIG_SET",
        "LOGIC_SCENARIO"
      ]
    }
  }
};
