// SKU_LEVEL_TYPE.js

window.SKU_LEVEL_TYPE = {
  "tables": {
    "SKU_LEVEL_TYPE": {
      "columns": {
        "SKU_LEVEL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "SKU inventory alert level type id. For example, a minimum level can indicate that replenishment request needs to be sent. "
        },
        "SKU_LEVEL_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "SKU inventory alert level type xid. "
        },
        "SKU_LEVEL_TYPE_DESCRIPTION": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of SKU inventory alert level type."
        },
        "LEVEL_MONITORING_TYPE": {
          "type": "VARCHAR2(5)",
          "nullable": false,
          "values": [
            "MAX",
            "MIN",
            "INFO"
          ]
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
        "SKU_LEVEL"
      ]
    }
  }
};
