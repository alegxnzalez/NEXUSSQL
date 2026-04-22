// CAPACITY_GROUP.js

window.CAPACITY_GROUP = {
  "tables": {
    "CAPACITY_GROUP": {
      "columns": {
        "CAPACITY_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Unique Identifier for each CAPCITY GROUP. This is a combination of XID and Domain Name "
        },
        "CAPACITY_GROUP_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "GC3 Unique identifier for the entity. Is used for creating the GID "
        },
        "CAPACITY_GROUP_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SERVPROV",
          "info": "This is set up so service providers can edit their own capacity usage records."
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
        "CAPACITY_COMMITMENT",
        "CAPACITY_LIMIT",
        "CAPACITY_USAGE",
        "RATE_OFFERING"
      ]
    }
  }
};
